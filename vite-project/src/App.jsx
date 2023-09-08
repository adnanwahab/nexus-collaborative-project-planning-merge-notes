import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@uwdata/mosaic-cross-filter-flights-10m";

function MosaicCrossFilterFlightsM() {
  const viewofFlightsRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "viewof flights") return new Inspector(viewofFlightsRef.current);
    });
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


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CodeEditor></CodeEditor>
    <MosaicCrossFilterFlightsM />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
