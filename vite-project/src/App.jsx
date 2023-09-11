import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Favicon from "react-favicon";
//npm install react-favicon --save
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@uwdata/mosaic-cross-filter-flights-10m";
//import notebook from "3f6e237936d0a0c7";

// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap } from 'react-leaflet/hooks'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'



function MapTrees(trees)  {
  trees = trees.slice(0, 1e3)
  const markers = trees.map((_, i) => (<Marker key={i} position={_}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>))

  return ( 
  <div className="w-48 h-64 relative">
  <MapContainer center={trees[0]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
{markers}

  </MapContainer>
  </div>
  )
}


function Notebook() {
  const ref = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, Inspector.into(ref.current));
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={ref} />
      <p>Credit: <a href="https://observablehq.com/d/3f6e237936d0a0c7">Collaborative Travel Schedule Generation for Conferences by awahab</a></p>
    </>
  );
}

// import notebook from "@sandraviz/animated-line-chart";
//import d3 from 'd3'

//import notebook from "@rithwikanand/histogram";

// const LASTDAY= function () {
//   console.log(LASTDAY)
//     return (
//      <>
//      <div id="observablehq-lineChart-c1e4ccc8"></div>
//       <p>Credit: <a href="https://observablehq.com/d/1420c244c74cb1bb">GNSS Position Timeseries by Yang</a></p>
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
//     <script type="module">
//   import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
//   import define from "https://api.observablehq.com/d/1420c244c74cb1bb.js?v=3";
//   new Runtime().module(define, name => {
//     if (name === "lineChart") return new Inspector(document.querySelector("#observablehq-lineChart-c1e4ccc8"));
//   });
//   </script>
//   </>)
// }

function vennDiagram() {
  return (<svg id="vennDiagram" width="500" height="500">
        <circle cx="150" cy="250" r="100" style="fill:rgba(255,0,0,0.5);" stroke="#333"></circle>
        <circle cx="300" cy="250" r="100" style="fill:rgba(0,0,255,0.5);" stroke="#333"></circle>
    </svg>)
}

function Histogram() {
  const chartRef = useRef();

  useEffect(() => {
    console.log('HISTOGRAM')
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      console.log('chart')
      if (name === "chart") return new Inspector(chartRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={chartRef} />
      <p>Credit: <a href="https://observablehq.com/@rithwikanand/histogram">Histogram by Rithwik Anand</a></p>
    </>
  );
}
//<iframe width="100%" height="1004" frameborder="0"
//src="https://observablehq.com/embed/@ankitak/stars?cells=chart"></iframe>

import React, {useRef, useEffect} from "react";
//import notebook from "1420c244c74cb1bb";

// function Notebook() {
//   const lineChartRef = useRef();

//   useEffect(() => {
//     console.log('TIMESERIES')

//     const runtime = new Runtime();
//     runtime.module(notebook, name => {
//       if (name === "lineChart") return new Inspector(lineChartRef.current);
//     });
//     return () => runtime.dispose();
//   }, []);

//   return (
//     <>
//       <div ref={lineChartRef} />
//       <p>Credit: <a href="https://observablehq.com/d/1420c244c74cb1bb">GNSS Position Timeseries by Yang</a></p>
//     </>
//   );
// }

const diagrams = {
  'histogram': Histogram,
  'timeSeries': Notebook
}

// `<iframe width="100%" height="584" frameborder="0"
//   src="https://observablehq.com/embed/@rithwikanand/histogram?cells=chart"></iframe>`

function get (query) {
  return document.querySelector(query)
}

function MosaicCrossFilterFlightsM() {
  const viewofFlightsRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    const module0 = runtime.module(notebook, name => {
      if (name === "viewof flights") return new Inspector(viewofFlightsRef.current);
    })
    module0.variable().define("foo", 42);
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={viewofFlightsRef} />
      <p>Credit: <a href="https://observablehq.com/@uwdata/mosaic-cross-filter-flights-10m">Mosaic Cross-Filter Flights 10M by UW Interactive Data Lab</a></p>
    </>
  );
}

async function _() {
  let text = get('textarea').value.split('\n')
  //text = ['asdfasd', 'asdfasdf', 'asdf']
  let port = 8000
  console.log(text)

  let fn = await fetch(`http://localhost:${port}/makeFn/`, {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
              body: JSON.stringify({fn:text})
  })
  fn = await fn.json()
  return fn
}

function CodeEditor({setComponents}) {
  async function apply_(){
    let data = await _()
    console.log(data)
    data = compile(data);

    setComponents(data)
  }

  return (<><textarea 
  className="bg-blue-200 w-full h-64 border border-gray-300 rounded-lg p-2"
  onKeyUp={apply_}> 
  </textarea> 
  </>)
}

const List = (list) => 
  (<ul class="overflow-scroll h-64">
    <li key="item font-white">{list.length}</li>
    {list.map((item, idx) => <li key={idx}>{item}</li>)}
  </ul>)

function consoleLog(event) {
  return console.log(event.target.value)
}

let vote_titles = [
  'Astrophysics', 'Condensed Matter', 'Mathematical Physics', 'Mesoscale and Nanoscale Physics'
]
let votes = [0,0,0,0] //swap with 
// fetch('http://localhost:8000/.netlify/functions/run-rpc', {

const components = {
  'poll': Poll,
  'List': List
}

import notebook2 from "35ca09d7f1457ad3";

function Notebook2() {
  const chartRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook2, name => {
      if (name === "chart") return new Inspector(chartRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={chartRef} />
      <p>Credit: <a href="https://observablehq.com/d/35ca09d7f1457ad3">Learn D3: Animation by awahab</a></p>
    </>
  );
}

const isGeoCoordinate = (pair) => {
  console.log(pair)
  return Array.isArray(pair) && parseFloat(pair[0][0]) && parseFloat(pair[0][1])
}

function compile (dataList) {
  if (! dataList.fn) return dataList
  return dataList.fn.map(function (datum) {
    if (isGeoCoordinate(datum)) {
      return MapTrees(datum)
    }


    if (Array.isArray(datum)) return List(datum)
    //if (datum === 'lots of cool polling data') return Poll()
    if (datum === 'timeseries') {
      return( <Notebook2 />)
    }


    if (typeof datum === 'object') { 
      return (
      <>
      <Histogram2 />
      
      {/* { List(Object.values()) } */}
      </>
      )
    }
    return datum
  })
}

let templateContent = [
    `find all airbnb that are not noisy
    find all airbnb that are noisy
:poll russia australia antarctica
:poll food options in poll.11
:poll activity options in poll.11
:plant-trees find places to plant trees nearby 20418 autumn shore drive`,
`:poll astronomy, physics, infoTheory
    find all papers on arxiv relating to astornomy`,
    `find all trees in nyc 
       plot on a map
      reccomend places to plant a tree based on h3
      visualize how many are of which species in a trees_histogram
    `,
    `find best time to visualize all the planets in the solar system`
]

let templateNames = [
  'Group Travel Planning 4 Conferences - Remote Year',
  'arxiv - find papers which are good but not highly cited and find papers that may be highly cited in future ',
  'Tree visualization - find best place to plant tree ',
  'Astronomy',
  '',
]




function App() {
  const [count, setCount] = useState(0)
  const [components, setComponents] = useState([])


  let One = diagrams['histogram']
  let Two = diagrams['timeSeries']


  useEffect(() => { 

    const fetchData = async () => {
      let data = await _()
      data = compile(data);
      setComponents(compile(data))    
    }

    fetchData()
    
  }, [count])
  
  return (
    <div className="grid grid-cols-2">
      <div>
        <label>pick a template</label>
          <select 
          onChange={(e) => {
          get('textarea').value = templateContent[e.target.selectedIndex]
            setCount(count + 1)
          }
          }
          className="w-64 m-5 border border-bluegray-800 border-dashed">
          {templateNames.map((key, index) => <option value={index}>{key}</option>)}
        </select>
        <CodeEditor setComponents={setComponents}></CodeEditor>        
        {/* <Histogram2 /> */}
        {/* <vennDiagram /> */}
        {/* <VisualizingTheNightSkyWorkingWithDCelestial /> */}
        {/* <Notebook /> */}
      </div>

      <div className="card">{components}</div>
    </div>
  )
}

export default App



//english  = glue language 
//javascript -> display + run queries on UI
//python -> automatically create services on infinte data streams 





















//choose your own adventure

//poll
//go to place -> geohashing 
//make pokemon go
///find a list of all pokemon
//for each pokemon -> list counters
//for each counter -> list all possible technique combinations 
//given 10 different teams of 6, estimate probability of them winning 
//do a "simulation" of 10 teams in a round robin and then find the best win rate


//twitter -> watch for pizza -> stream sentiment analyis 
//stream sentiment analysis for region
//if you see a spike or anomoly -> visit that region
//confirm whether bread or cheese supply has gone down 
//invest in new farm to produce better bread
//profit 

//make it so the python async functions return value with a generator 
//this generator steps through the tiem series paginates 1billion tweets 
//in a 10,000 item page so that the javascript component renders realtime 

//jupyter cant really do this -> cant server files from jupyter
//javascript cant exec on files that cant fit in browser which is lots 
//javascript max = 200mb -> python services can upload 200mb in chunks so it streams 40x faster so you can do proper analysis 





//what can you do with a mix of python and javascript that you cant do with one alone
//english -> generate javascript UI component -> generate python service that generates data and then ui co





















//program synthesis -> make that better 

//given two subjects on arxiv -> find cool papers that relate to both of them




//use a IDE to think of things you would not have thought of 
//from a sentence -> generate a program
//from a program -> generate an a comment
//from a program -> generate a data 
//from a data -> generate helper functions to prep that data for applying statistics
//from a statistics output, you can exectue a program in ways that affect stfuf
//exampel -> reccomendation engine -> generates links on page
//from a list of links -> generate intersection or pairwise stuff

//list of favorite authors -> find common themes
//from a theme -> reccomend movies 


//5 people take a quiz that comes from a document describing questions

//depending on their ansewr they plan a movie + game night w/ apple cider vinegar and popcorn
//ok watch this movie 


//the more you type -> the more the autocomplete assistant knows exactly what you mean -> or even things you might like -> things you might not know
//as you type it helps you think -> renders shit on the right hand panel

//write stuff -> computer tells you if it makes sense
//if it thinks it doesnt make sense it tell you why

//write a note that has live updating sentences
//and you have diagrams that are UI components that can change the sentences
//you have a list of sentences
//ask LLM is this statement true
//sentences which evaluate to 

//look up all git hub repos
//find all books on gutenberg project
//find all events on gdelt

//transcribe all audio on youtube

//is this idea good?
//poll people 
//if its good -> add tech specs

//create tech spec
//generate tests
//tests are assertions that run on previous lines of code


function Poll() {
  const [voted, setHasVoted] = useState(false)
  let buttons = <>
      <button onClick={() => vote(0)}>
           {vote_titles[0]}
        </button>
        <button onClick={() => vote(1)}>
        {vote_titles[1]}
        </button>
        <button onClick={() => vote(2)}>
        {vote_titles[2]}
        </button>
        <button onClick={() => vote(3)}>
        {vote_titles[3]}
        </button>
  </>
  let graph = (<iframe width="100%" height="584" frameborder="0"
  src="https://observablehq.com/embed/@d3/bar-chart?cells=chart"></iframe>)

  function vote ( ){
    // setHasVoted(true)
  }
  return  <> {voted ? graph : buttons}</>
}
