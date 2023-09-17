import {useRef, useMemo, useState, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import ReactMap, {Source, Layer} from 'react-map-gl';
import DeckGL, {GeoJsonLayer, ArcLayer} from 'deck.gl';
import {range} from 'd3-array';
import {scaleQuantile} from 'd3-scale';

async function getIsochrone(longitude, latitude, contours_minutes) {
  const accessToken = 'your-access-token-here';
  const isochroneUrl = `https://api.mapbox.com/isochrone/v1/mapbox/driving-traffic/${longitude}%2C${latitude}?contours_minutes=${contours_minutes}&polygons=true&denoise=0&generalize=0&access_token=${accessToken}`;

  try {
      const response = await fetch(isochroneUrl);
      
      if (response.ok) {
          const geojsonData = await response.json();
          console.log(geojsonData);
          // Do something with the geojson data
      } else {
          console.log('Failed to fetch isochrone data:', response.status, response.statusText);
      }
  } catch (error) {
      console.error('Error fetching isochrone data:', error);
  }
}

// Call the function
getIsochrone('longitude-here', 'latitude-here', 'contours_minutes-here');


function updatePercentiles(
  featureCollection,
  accessor,
) {
  const {features} = featureCollection;
  const scale = scaleQuantile().domain(features.map(accessor)).range(range(9));
  return {
    type: 'FeatureCollection',
    features: features.map(f => {
      const value = accessor(f);
      const properties = {
        ...f.properties,
        value,
        percentile: scale(value)
      };
      return {...f, properties};
    })
  };
}


const dataLayer = {
  id: 'data',
  type: 'fill',
  paint: {
    'fill-color': {
      property: 'percentile',
      stops: [
        [0, '#3288bd'],
        [1, '#66c2a5'],
        [2, '#abdda4'],
        [3, '#e6f598'],
        [4, '#ffffbf'],
        [5, '#fee08b'],
        [6, '#fdae61'],
        [7, '#f46d43'],
        [8, '#d53e4f']
      ]
    },
    'fill-opacity': 0.8
  }
};

async function fetchCoffeeShops() {
  const latitude = 37.8;
  const longitude = -122.4;
  const radius = 1000; // radius in meters
  
  // Build Overpass API URL
  const query = `[out:json][timeout:25];` +
                `(node["amenity"="cafe"](${latitude - 0.01},${longitude - 0.01},${latitude + 0.01},${longitude + 0.01});` +
                `way["amenity"="cafe"](${latitude - 0.01},${longitude - 0.01},${latitude + 0.01},${longitude + 0.01});` +
                `relation["amenity"="cafe"](${latitude - 0.01},${longitude - 0.01},${latitude + 0.01},${longitude + 0.01}););` +
                `out body;`;
  const overpassUrl = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;
  
  try {
    const response = await fetch(overpassUrl);
    
    if (response.ok) {
      const data = await response.json();
      const coffeeShops = data.elements;
      console.log("Coffee Shops:", coffeeShops);
      // Do something with the fetched coffee shops
    } else {
      console.log('Failed to fetch data:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error fetching coffee shops:', error);
  }
}

// Call the function
fetchCoffeeShops();

// source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz
const AIR_PORTS =
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson';

const INITIAL_VIEW_STATE = {
  latitude: 51.47,
  longitude: 0.45,
  zoom: 4,
  bearing: 0,
  pitch: 30
};

const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json';
const NAV_CONTROL_STYLE = {
  position: 'absolute',
  top: 10,
  left: 10
};

function Map() {
  const [year, setYear] = useState(2015);

  useEffect(() => {
    const accessToken="pk.eyJ1IjoiYXdhaGFiIiwiYSI6ImNrdjc3NW11aTJncmIzMXExcXRiNDNxZWYifQ.tqFU7uVd6mbhHtjYsjtvlg"
    const contours_minutes = 15;
    const longitude = -122.4;
    const latitude = 37.8;
    fetch(
      `https://api.mapbox.com/isochrone/v1/mapbox/driving-traffic/${longitude}%2C${latitude}?contours_minutes=${contours_minutes}&polygons=true&denoise=0&generalize=0&access_token=${accessToken}`    )
      .then(resp => resp.json())
      .then(json => setAllData(json))
      .catch(err => console.error('Could not load data', err)); // eslint-disable-line
  }, []);


  const [allData, setAllData] = useState(null);

  const onClick = () => {
    console.log('hello')
  }
  const layers = [
    new GeoJsonLayer({
      id: 'airports',
      data: AIR_PORTS,
      // Styles
      filled: true,
      pointRadiusMinPixels: 2,
      pointRadiusScale: 2000,
      getPointRadius: f => 11 - f.properties.scalerank,
      getFillColor: [200, 0, 80, 180],
      // Interactive props
      pickable: true,
      autoHighlight: true,
      onClick
    }),
    new ArcLayer({
      id: 'arcs',
      data: AIR_PORTS,
      dataTransform: d => d.features.filter(f => f.properties.scalerank < 4),
      // Styles
      getSourcePosition: f => [-0.4531566, 51.4709959], // London
      getTargetPosition: f => f.geometry.coordinates,
      getSourceColor: [0, 128, 200],
      getTargetColor: [200, 0, 80],
      getWidth: 1
    })
  ];
const mapboxAccessToken = ``

const mapRef = useRef();

const data = useMemo(() => {
  return allData
//  return allData && updatePercentiles(allData, f => f.properties.income[year]);
}, [allData, year]);

  return (
    <ReactMap
       ref={mapRef}
        mapboxAccessToken="pk.eyJ1IjoiYXdhaGFiIiwiYSI6ImNrdjc3NW11aTJncmIzMXExcXRiNDNxZWYifQ.tqFU7uVd6mbhHtjYsjtvlg"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 1000, height: 2000}}
      onClick={onClick}

      // mapStyle="mapbox://styles/mapbox/streets-v3"
      mapStyle="https://api.maptiler.com/maps/streets/style.json?key=D8xiby3LSvsdgkGzkOmN"
    >
    <Source type="geojson" data={data}>
          <Layer {...dataLayer} />
        </Source>


    </ReactMap>
  );
}
export default Map

