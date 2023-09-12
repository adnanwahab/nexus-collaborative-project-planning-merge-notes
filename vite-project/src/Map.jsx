import * as React from 'react';
import Map from 'react-map-gl';
import {useState, useMemo} from 'react';
import {createRoot} from 'react-dom/client';
import {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';

const accessToken = "pk.eyJ1IjoiYXdhaGFiIiwiYSI6ImNrdjc3NW11aTJncmIzMXExcXRiNDNxZWYifQ.tqFU7uVd6mbhHtjYsjtvlg" 

function MapComponent(CITIES) {
  console.log(12312312)

  const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;
//https://github.com/visgl/react-map-gl/blob/7.1-release/examples/controls/src/app.tsx
const pinStyle = {
  cursor: 'pointer',
  fill: '#d00',
  stroke: 'none'
};

function Pin({size = 20}) {
  return (
    <svg height={size} viewBox="0 0 24 24" style={pinStyle}>
      <path d={ICON} />
    </svg>
  );
}
const pins = CITIES.map((city, index) => (
  <Marker
    key={`marker-${index}`}
    longitude={city.longitude}
    latitude={city.latitude}
    anchor="bottom"
    onClick={e => {
      // If we let the click event propagates to the map, it will immediately close the popup
      // with `closeOnClick: true`
      e.originalEvent.stopPropagation();
      setPopupInfo(city);
    }}
  >
    <Pin />
  </Marker>
))

function setPopupInfo () {}


  return (
    <Map
      mapboxAccessToken={accessToken}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
        {/* {pins} */}
    </Map>
  );
}

export default MapComponent

// import React from 'react';
// import {createRoot} from 'react-dom/client';
// import {Map} from 'react-map-gl';
// import maplibregl from 'maplibre-gl';
// import DeckGL from '@deck.gl/react';
// import {ScatterplotLayer} from '@deck.gl/layers';

// const MALE_COLOR = [0, 128, 255];
// const FEMALE_COLOR = [255, 0, 128];

// // Source data CSV
// const DATA_URL =
//   'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/scatterplot/manhattan.json'; // eslint-disable-line

// const INITIAL_VIEW_STATE = {
//   longitude: -74,
//   latitude: 40.7,
//   zoom: 11,
//   maxZoom: 16,
//   pitch: 0,
//   bearing: 0
// };

// export default function MapComponent({
//   data = DATA_URL,
//   radius = 30,
//   maleColor = MALE_COLOR,
//   femaleColor = FEMALE_COLOR,
//   mapStyle = 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json'
// }) {
//   const layers = [
//     new ScatterplotLayer({
//       id: 'scatter-plot',
//       data,
//       radiusScale: radius,
//       radiusMinPixels: 0.25,
//       getPosition: d => [d[0], d[1], 0],
//       getFillColor: d => (d[2] === 1 ? maleColor : femaleColor),
//       getRadius: 1,
//       updateTriggers: {
//         getFillColor: [maleColor, femaleColor]
//       }
//     })
//   ];

//   return (
//     <DeckGL layers={layers} initialViewState={INITIAL_VIEW_STATE} controller={true}>
//       <Map reuseMaps mapLib={maplibregl} mapStyle={mapStyle} preventStyleDiffing={true} />
//     </DeckGL>
//   );
// }
