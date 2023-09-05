import logo from './logo.svg';
import './App.css';

import React, {useRef, useEffect, useState} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@asuozzo/april-flight-paths-to-and-from-btv";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import * as LabelPrimitive from "@radix-ui/react-label"
import * as CheckIcon from "@radix-ui/react-icons"
function cn(string, string2) {
  return string + string2
}
function cva(string, string2) {
  return string + string2
}


const labelVariants = () => cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          {/* <CheckIcon className="h-3.5 w-3.5 fill-primary" /> */}
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    )
  }
)
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName


const data = {
  places: ['japan', 'london', 'shanghai'],
    stuff_to_do: {
      japan: [
        "karaoke",
        "anime-convention",
        "7/11",
        "train",
        "mueseum",
        "hiroshima"
      ],
      london: ["castle windsor", "subway", "stone henge", "prehistoric lake"],
      shanghai: [
        "great wall of china",
        "mongolia border",
        "port",
        "farmers market"
      ]
    },
    food: {
      japan: ["sushi", "octopus", "kelp", "boba"],
      london: ["fish and chips", "bangers and mash", "crumpet", "hamburger"],
      shanghai: [
        "Peking Duck.",
        "Zongzi (Sticky Rice Dumplings)",
        "Jianbing (Egg Crepe)",
        "Cong You Bing (Scallion Pancakes)",
        "Tanghulu (Candied Hawthorn)"
      ]
    }
  };


function PollAllTheThings(props) {  
  let options = props.options
  let setOptions = props.setOptions
  let getOptions = props.getOptions
  let clickers = options.map(string => {
    return <div class="">
    <div class="flex h-6 items-center">
      <input id="small" aria-describedby="small-description" name="plan" type="radio" checked class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
    </div>
    <div class="ml-3 text-sm leading-6">
      <label 
      
      checked={getOptions === string}
      for="small" class="font-medium text-gray-900" onchange={() => setOptions(string)}>{string}</label>
      {/* <span id="small-description" class="text-gray-500">{string}</span> */}
    </div>
  </div>
  }) 

  return (<>
  <fieldset>
  <legend class="sr-only">Plan</legend>
  <div class="space-y-5 relative flex items-start flex-col">
    {clickers}
  </div>
</fieldset>
    </>
  )
}

function AllPolls() {
  let [getPlace, setPlace] = useState(data.places[0])
  console.log(getPlace)
  let [getStuffToDo, setStuffToDo]  = useState(data.stuff_to_do[getPlace])
  let [getFood, setFood] =  useState(data.food[getPlace])

  return <>
    <PollAllTheThings options={data.places} setOptions={setPlace} getOptions={getPlace}/>
    <PollAllTheThings options={data.food['japan']} setOptions={setStuffToDo} getOptions={getStuffToDo}/>
    <PollAllTheThings options={data.stuff_to_do['japan']} setOptions={setFood} getOptions={getFood}/>
  </>
}



function AprilFlightPathsToAndFromBtv(pollResults) {
  const mapRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "map") return new Inspector(mapRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <h1>{JSON.stringify(pollResults)}</h1>
      <div ref={mapRef} />
      <p>Credit: <a href="https://observablehq.com/@asuozzo/april-flight-paths-to-and-from-btv">April Flight Paths To and From BTV by Andrea Suozzo</a></p>
    </>
  );
}

//export default AprilFlightPathsToAndFromBtv;

function App() {
  let pollResults = {
    red: 123,
    blue: 456, 
    green: 478
  }
  return (
    
    <div className="">
      <div>hello world!</div>

      <header className=" bg-red-500">
      <AllPolls />

        {/* <AprilFlightPathsToAndFromBtv pollResults={pollResults}/> */}
      </header>
    </div>
  );
}

export default App;
