import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Favicon from "react-favicon";
//npm install react-favicon --save
import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@uwdata/mosaic-cross-filter-flights-10m";

import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@rithwikanand/histogram";

function Histogram() {
  const chartRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
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


import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "1420c244c74cb1bb";

function Notebook() {
  const lineChartRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "lineChart") return new Inspector(lineChartRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={lineChartRef} />
      <p>Credit: <a href="https://observablehq.com/d/1420c244c74cb1bb">GNSS Position Timeseries by Yang</a></p>
    </>
  );
}




diagrams = {
  'histogram': iframeHistogram,
  'timeSeries': Notebook
}

iframeHistogram = Histogram

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
    data = compile(data);
    setComponents(data)
  }

  return (<><textarea 
  className="bg-blue-200 w-full h-64 border border-gray-300 rounded-lg p-2"
  onKeyDown={(e) => setCode(e.target.value)}
  onKeyUp={apply_}> 
  </textarea> 
  </>)
}

const List = (list) => list.map(item => <div key="item">{item}</div>)

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

function compile (dataList) {
  return dataList.fn.map(function (datum) {
    if (Array.isArray(datum)) return List(datum)
    if (datum === 'lots of cool polling data') return Poll()
    return datum
  })
}
let templateContent = [
    `find all airbnb that are not noisy and are near a coworking space
:poll russia australia antarctica
:poll food options in poll.11
:poll activity options in poll.11
:plant-trees find places to plant trees nearby 20418 autumn shore drive`,
`:poll astronomy, physics, infoTheory
    find all papers on arxiv relating to astornomy`,
    `find all books on wikipedia and them chart the by date and theme
        make clickable charts that send you to the wikipedia page`,
]

let templateNames = [
  'Group Travel Planning 4 Conferences - Remote Year',
  'arxiv - find papers which are good but not highly cited and find papers that may be highly cited in future ',
  'Gant Chart for Dinner'
]

function App() {
  const [count, setCount] = useState(0)
  const [components, setComponents] = useState([])


  One = diagrams['histogram']
  two = diagrams['timeSeries']

  
  return (
    <div className="grid grid-cols-2">
      <div>
        <label>pick a template</label>
          <select 
          onChange={(e) => 
          get('textarea').value = templateContent[e.target.selectedIndex]
          }
          className="w-64 m-5 border border-bluegray-800 border-dashed">
          {templateNames.map(key => <option value={key}>{key}</option>)}
        </select>
        <CodeEditor setComponents={setComponents}></CodeEditor>
        <One></One>
        <Two></Two>

      </div>

      <div className="card">{components}</div>
    </div>
  )
}

export default App



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
    setHasVoted(true)
  }

  return  <> {voted ? graph : buttons}</>

}


