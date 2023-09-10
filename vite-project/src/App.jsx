import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Favicon from "react-favicon";
//npm install react-favicon --save
import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@uwdata/mosaic-cross-filter-flights-10m";

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

function CodeEditor() {
  let [code, setCode] = useState("hello world")
  return (<><textarea 
  onKeyDown={(e) => setCode(e.target.value)}
  onKeyUp={consoleLog}> 
  </textarea> <div>{code}</div>
  </>)
}


function consoleLog(event) {
  return console.log("hello world", event.target.value)
}

let vote_titles = [
  'Astrophysics', 'Condensed Matter', 'Mathematical Physics', 'Mesoscale and Nanoscale Physics'
]
let votes = [0,0,0,0] //swap with 
fetch('http://localhost:8080/.netlify/functions/run-rpc', {

})

function App() {
  const [count, setCount] = useState(0)
  const [voted, setHasVoted] = useState(false)


  function vote ( ){
    setHasVoted(true)
  }

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

  return (
    <>
    <CodeEditor></CodeEditor>
    {/* <MosaicCrossFilterFlightsM /> */}
      <div className="card">
    {voted ? graph : buttons}
      
      </div>
    </>
  )
}

export default App




function Poll() {

}
const List = (list) => list.map(item => <div key="item">{item}</div>)


const components = {
  'poll': Poll,
  'List': List
}


const json = [
  {component: 'poll', data: {}}
]