import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Favicon from "react-favicon";
//npm install react-favicon --save
import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@uwdata/mosaic-cross-filter-flights-10m";

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

function CodeEditor() {
  let [code, setCode] = useState("hello world")
  return (<><textarea 
  class="w-full h-64 border border-gray-300 rounded-lg p-2"
  onKeyDown={(e) => setCode(e.target.value)}
  onKeyUp={_}> 
  </textarea
  > <div>{code}</div>
  </>)
}


function consoleLog(event) {
  return console.log(event.target.value)
}

let vote_titles = [
  'Astrophysics', 'Condensed Matter', 'Mathematical Physics', 'Mesoscale and Nanoscale Physics'
]
let votes = [0,0,0,0] //swap with 
// fetch('http://localhost:8000/.netlify/functions/run-rpc', {

// })


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
  console.log('fn', fn.fn)
}

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
    <div className="grid grid-cols-2">
    <CodeEditor></CodeEditor>
    {/* <MosaicCrossFilterFlightsM /> */}
      <div className="card">
    {voted ? graph : buttons}
      
      </div>
    </div>
  )
}

export default App


console.log(12312)

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