//use an actual database -> 
//convert to react+vite
//add 20 components
//webgpu based llm -> auto  complete
//parts of speech tagging -> happens at lambda function 
//save source data -> compile data to code on client
//just use firebase
let baseRoute = 'https://nexus-merge-sort-300-people.netlify.app/'
let baseName = 'https://nexus-merge-sort-300-people.netlify.app'
async function saveDocument() {
    let document = get('.your-nexus').value

    let hello_world = await fetch(baseRoute + '.netlify/functions/documentSave', {})

    return document
}

async function fetchTwitch() {
    
    let hello_world = await fetch(baseRoute + '.netlify/functions/getHTML', {})
    hello_world = await hello_world.json()
    console.log(hello_world)
}

fetchTwitch()
async function mockFlights () {

    const url = 'https://flight-fare-search.p.rapidapi.com/v2/flights/?from=LHR&to=DXB&date=%3CREQUIRED%3E&adult=1&type=economy&currency=USD';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '462e34fcb4msha4f8c9c42043c3cp1e73dcjsn85634fe3e2a7',
            'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        return JSON.stringify(result)

    } catch (error) {
        console.error(error);
    }
}

import confetti from 'https://cdn.skypack.dev/canvas-confetti'; //https://github.com/catdad/canvas-confetti/blob/master/src/confetti.js  change to heart
import _ from 'https://underscorejs.org/underscore-esm-min.js'
let isDeployed =  window.location.host === `merge-sentences-todo.ngrok.io` || 
window.location.host === `coop-party.surge.sh`

let state = {};
let poll_data = {
      stuff_to_do: {
        japan: [
          "karaoke",
          "anime-convention",
          "7/11",
          "train",
          "mueseum",
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
const handleKeyDown =     async function (e) {
        let _ = e.target.value.split('\n')
        let your_nexus = get('.your-nexus')
        your_nexus.innerHTML = ''
         let beforeRender = _.map(compile)
         console.log(beforeRender)
              beforeRender.forEach(function (elOrString) {
            //data is the rest of the parameters after the action/first parameter.
            //todo //make a hash of each render function keyed by action_name
            //track the dependencies
            //when any dependency changes -> 
            //replace with a more structured render method -> input = data -> output => element
            if (typeof elOrString === 'string') {
                let div = document.createElement('divs')
                div.innerHTML = elOrString
                your_nexus.appendChild(div)
            }
            else your_nexus.appendChild(elOrString)
         })
    
        // let hello_world = await fetch(baseRoute +'.netlify/functions/columns', {
        //     method: 'POST',
        //     body: JSON.stringify({message: e.target.value})
        // });
        // hello_world = await hello_world.json()
        // console.log(hello_world)
        //this method should write to database
        //on interval -> update database every 5 seconds
    }
//import {getLineInfo, TokContext, tokTypes as tt, Parser} from "acorn";
// import defaultGlobals from "./globals.js";
// import findReferences from "./references.js";
// import findFeatures from "./features.js";https://github.com/observablehq/parser/blob/09901d06904ec2277baa56eca74efe7aedc2720a/src/parse.js#L367-L369
//https://github.com/estree/estree
//mad lib generator -> text adventure game -> 
//track components not just by row but by type -> if the sequene order changes, then "code" no longer works  

//data anaalysis
//for every tv show on this week -> find the funniest jokes and save them to a database
const humor =[]
const puns = `
I'm reading a book about anti-gravity, and it's impossible to put down.

A bicycle can't stand on its own because it's two-tired.

I told my friend 10 jokes to make him laugh, but no pun in ten did.

Did you hear about the guy who lost his left side? He's all right now.

I used to be a baker, but I couldn't make enough dough.

When a clock is hungry, it goes back four seconds.

I got a job at a bakery because I kneaded the dough.

I'm friends with all electricians. We have good current connections.`.split('\n')

const jokes = `
How do you throw a space party? You planet.

How was Rome split in two? With a pair of Ceasars.

Nope. Unintended.

The shovel was a ground breaking invention, but everyone was blow away by the leaf blower.

A scarecrow says, "This job isn't for everyone, but hay, it's in my jeans."

A Buddhist walks up to a hot dog stand and says "Make me one with everything."

Did you hear about the guy who lost the left side of his body? He's alright now.

What do you call a girl with one leg that's shorter than the other? Ilene.

The broom swept the nation away.

I did a theatrical performance on puns. It was a play on words.

What does a clock do when it's hungry? It goes back for seconds.

What do you do with a dead chemist? You barium.

I bet the person who created the door knocker won a Nobel prize.

Towels can’t tell jokes. They have a dry sense of humor.

Two birds are sitting on a perch and one says “Do you smell fish?”

Did you hear about the cheese factory that exploded in france? There was nothing but des brie.

Do you know sign language? You should learn it, it’s pretty handy.

What do you call a beautiful pumpkin? GOURDgeous.

Why did one banana spy on the other? Because she was appealing.

A cross eyed teacher couldn’t control his pupils.

After the accident, the juggler didn’t have the balls to do it.

I used to be afraid of hurdles, but I got over it.

To write with a broken pencil is pointless.

I read a book on anti-gravity. I couldn’t put it down.

I couldn’t remember how to throw a boomerang but it came back to me.

What did the buffalo say to his son? Bison.

What should you do if you’re cold? Stand in the corner. It’s 90 degrees.

How does Moses make coffee? Hebrews it.

The energizer bunny went to jail. He was charged with battery.

What did the alien say to the pitcher of water? Take me to your liter.

What happens when you eat too many spaghettiOs? You have a vowel movement.

The soldier who survived mustard gas and pepper spray was a seasoned veteran.

Sausage puns are the wurst.

What do you call a bear with no teeth? A gummy bear.

Why shouldn’t you trust atoms? They make up everything.

What’s the difference between a bench, a fish, and a bucket of glue? You can’t tune a bench but you can tuna fish. I bet you got stuck on the bucket of glue part.

What’s it called when you have too many aliens? Extraterrestrials.

Want to hear a pizza joke? Nevermind, it’s too cheesy.

What do you call a fake noodle? An impasta.

What do cows tell each other at bedtime? Dairy tales.

Why can’t you take inventory in Afghanistan? Because of the tally ban.

Why didn’t the lion win the race? Because he was racing a cheetah.

Why did the man dig a hole in his neighbor’s backyard and fill it with water? Because he meant well.

What happens to nitrogen when the sun comes up? It becomes daytrogen.

What’s it called when you put a cow in an elevator? Raising the steaks.

What’s america’s favorite soda? Mini soda.

Why did the tomato turn red? Because it saw the salad dressing.

What kind of car does a sheep drive? A lamborghini, but if that breaks down they drive their SuBAHHru.

What do you call a spanish pig? Porque.

What do you call a line of rabbits marching backwards? A receding hairline.

Why don’t vampires go to barbecues? They don’t like steak.

A cabbage and celery walk into a bar and the cabbage gets served first because he was a head.

How do trees access the internet? They log on.

Why should you never trust a train? They have loco motives.

`.split('\n')

let txt = await fetch(`jokes-all-clean.txt`)
let conan_o_brien = (await txt.text()).split('\n')
for (let i = 0; i < conan_o_brien.length; i++) {
    jokes.push(conan_o_brien[i])
    puns.push(conan_o_brien[i])
    humor.push(conan_o_brien[i])
}

const fns = {
    ':find': function (args) {
        let div = document.createElement('div')
        return div
    }
}
function get (q) { return document.querySelector(q) }
let trackDependenentVariables = {}
Object.entries(trackDependenentVariables).forEach(function (pair) {
    let [componentRow, [component, dependencies]] = pair;
    watch(dependencies, function (newDependencies) {
        Array.from(get('.your-nexus').children).forEach(function (el, i, list) {
            list[i] = component.rerender(newDependencies)
        })
    })
})
function staticallyAnalyzeSentence() {
    //get AST -> parser gramar -> CMU
}
get('.all-nexus').addEventListener('click', function (e) {
    if (e.target.className.indexOf('bg-green-100') === -1) return;
    let editProposal = document.createElement('input')
    e.target.appendChild(editProposal)
})

function scheduledScraper (url) {
    fetch(`/scheduled-function/getChatFromTwitch?channel=${url}`)
}

function cluster(data){
    fetch('/cluster/getChatFromTwitch', {
        body: JSON.stringify(data)
    })


    //just render the clusters - dont hardcode
}


function compile(_, index) {
    //console.log(_.indexOf(':poll'))

    //make parsing better -doesnt have to be first thing -> just remove whitespace
    //make dependent variable tracking without react
    //l
    //make streaming apis that you can pipe line unix 
    // if (_.indexOf(':stream') === 0) {

    //     return stream
    // }


    //


    if (_.indexOf(':simulate-reaction') === 0) {
        let args = _.match(/:simulate-reaction (a-z)* (a-z)*/)
        
        let div = document.createElement('div')

        let select = document.createElement('select')
        let select2 = document.createElement('select')
        div.appendChild(select2)
        div.appendChild(select)
        div.addEventListener('change', function (e) {
            console.log(e.target.value)
        })
        let compounds = [
            "https://www.kegg.jp/entry/RC00090",
            "https://www.kegg.jp/entry/RC00096",
            "https://www.kegg.jp/entry/RC02896",
            "https://www.kegg.jp/entry/6.3.4.10",
            "https://www.kegg.jp/entry/RC00043",
            "https://www.kegg.jp/entry/RC00070",
            "https://www.kegg.jp/entry/RC00090",
            "https://www.kegg.jp/entry/RC00096",
            "https://www.kegg.jp/entry/RC02896",
            "https://www.kegg.jp/entry/6.3.4.11",
            "https://www.kegg.jp/entry/RC00043",
            "https://www.kegg.jp/entry/RC00070",
            "https://www.kegg.jp/entry/RC00090",
            "https://www.kegg.jp/entry/RC00096",
            "https://www.kegg.jp/entry/RC02896",
            "https://www.kegg.jp/entry/6.3.4.12",
            "https://www.kegg.jp/entry/RC00090",
            "https://www.kegg.jp/entry/RC00555",
            "https://www.kegg.jp/entry/6.3.4.13",
            "https://www.kegg.jp/entry/RC00090",
            "https://www.kegg.jp/entry/RC00166",
            "https://www.kegg.jp/entry/6.3.4.14",
            "https://www.kegg.jp/entry/RC00253",
            "https://www.kegg.jp/entry/6.3.4.15",
            "https://www.kegg.jp/entry/RC00043",
            "https://www.kegg.jp/entry/RC00070",
            "https://www.kegg.jp/entry/RC00090",
            "https://www.kegg.jp/entry/RC00096",
            "https://www.kegg.jp/entry/RC02896",
            "https://www.kegg.jp/entry/6.3.4.16",
            "https://www.kegg.jp/entry/RC00002",
            "https://www.kegg.jp/entry/RC02804",
            "https://www.kegg.jp/entry/6.3.4.17",
            "https://www.kegg.jp/entry/RC00026",
            "https://www.kegg.jp/entry/RC00111",
            "https://www.kegg.jp/entry/6.3.4.18",
            "https://www.kegg.jp/entry/RC01927",
            "https://www.kegg.jp/entry/6.3.4.19",
            "https://www.kegg.jp/entry/RC02633",
            "https://www.kegg.jp/entry/RC02634",
            "https://www.kegg.jp/entry/6.3.4.20",
            "https://www.kegg.jp/entry/RC00959",
            "https://www.kegg.jp/entry/6.3.4.21",
            "https://www.kegg.jp/entry/RC00033",
            "https://www.kegg.jp/entry/6.3.4.22",
            "https://www.kegg.jp/entry/RC01421",
            "https://www.kegg.jp/entry/RC03167",
            "https://www.kegg.jp/entry/6.3.4.23",
            "https://www.kegg.jp/entry/RC00263",
            "https://www.kegg.jp/entry/RC00323",
            "https://www.kegg.jp/entry/6.3.4.24",
            "https://www.kegg.jp/entry/RC00090",
            "https://www.kegg.jp/entry/RC00096",
            "https://www.kegg.jp/entry/6.3.4.25",
            "https://www.kegg.jp/entry/6.3.5.1",
            "https://www.kegg.jp/entry/RC00010",
            "https://www.kegg.jp/entry/RC00100",
            "https://www.kegg.jp/entry/6.3.5.2",
            "https://www.kegg.jp/entry/RC00010",
            "https://www.kegg.jp/entry/RC00204",
            "https://www.kegg.jp/entry/RC02798",
            "https://www.kegg.jp/entry/6.3.5.3",
            "https://www.kegg.jp/entry/RC00010",
            "https://www.kegg.jp/entry/RC01160",
            "https://www.kegg.jp/entry/6.3.5.4",
            "https://www.kegg.jp/entry/RC00010",
            "https://www.kegg.jp/entry/RC02798",
            "https://www.kegg.jp/entry/6.3.5.5",
            "https://www.kegg.jp/entry/RC00002",
            "https://www.kegg.jp/entry/RC00010",
            "https://www.kegg.jp/entry/RC00043",
            "https://www.kegg.jp/entry/RC02750",
            "https://www.kegg.jp/entry/RC02798",
            "https://www.kegg.jp/entry/RC03314",
            "https://www.kegg.jp/entry/6.3.5.6",
            "https://www.kegg.jp/entry/RC00010",
            "https://www.kegg.jp/entry/6.3.5.7",
            "https://www.kegg.jp/entry/RC00010",
            "https://www.kegg.jp/entry/6.3.5.9",
            "https://www.kegg.jp/entry/RC00010",
            "https://www.kegg.jp/entry/RC01301",
            "https://www.kegg.jp/entry/6.3.5.10",
            "https://www.kegg.jp/entry/RC00010",
            "https://www.kegg.jp/entry/RC01302",
            "https://www.kegg.jp/entry/6.3.5.11",
            "https://www.kegg.jp/entry/RC00010",
            "https://www.kegg.jp/entry/RC01301",
            "https://www.kegg.jp/entry/6.3.5.12",
            "https://www.kegg.jp/entry/RC01301",
            "https://www.kegg.jp/entry/6.3.5.13",
            "https://www.kegg.jp/entry/RC00010",
            "https://www.kegg.jp/entry/RC00043",
            "https://www.kegg.jp/entry/RC00358",
            "https://www.kegg.jp/entry/RC02798",
            "https://www.kegg.jp/entry/6.3.5.-",
            "https://www.kegg.jp/entry/RC00010",
            "https://www.kegg.jp/entry/RC00358",
            "https://www.kegg.jp/entry/RC00950",
            "https://www.kegg.jp/entry/RC02596",
            "https://www.kegg.jp/entry/6.3.-.-",
            "https://www.kegg.jp/entry/6.4.1.1",
            "https://www.kegg.jp/entry/RC00040",
            "https://www.kegg.jp/entry/RC00367",
            "https://www.kegg.jp/entry/6.4.1.2",
            "https://www.kegg.jp/entry/RC00040",
            "https://www.kegg.jp/entry/RC00367",
            "https://www.kegg.jp/entry/6.4.1.3",
            "https://www.kegg.jp/entry/RC00097",
            "https://www.kegg.jp/entry/RC00609",
            "https://www.kegg.jp/entry/RC00626",
            "https://www.kegg.jp/entry/6.4.1.4",
            "https://www.kegg.jp/entry/RC00367",
            "https://www.kegg.jp/entry/RC00942",
            "https://www.kegg.jp/entry/6.4.1.5",
            "https://www.kegg.jp/entry/RC00367",
            "https://www.kegg.jp/entry/RC00942",
            "https://www.kegg.jp/entry/6.4.1.6",
            "https://www.kegg.jp/entry/RC00040",
            "https://www.kegg.jp/entry/RC00367",
            "https://www.kegg.jp/entry/6.4.1.7",
            "https://www.kegg.jp/entry/RC00626",
            "https://www.kegg.jp/entry/6.4.1.8",
            "https://www.kegg.jp/entry/RC00040",
            "https://www.kegg.jp/entry/6.4.1.9",
            "https://www.kegg.jp/entry/6.4.1.-",
            "https://www.kegg.jp/entry/6.5.1.1",
            "https://www.kegg.jp/entry/RC00005",
            "https://www.kegg.jp/entry/6.5.1.2",
            "https://www.kegg.jp/entry/RC00005",
            "https://www.kegg.jp/entry/6.5.1.3",
            "https://www.kegg.jp/entry/RC00296",
            "https://www.kegg.jp/entry/6.5.1.4",
            "https://www.kegg.jp/entry/RC00296",
            "https://www.kegg.jp/entry/6.5.1.5",
            "https://www.kegg.jp/entry/RC00296",
            "https://www.kegg.jp/entry/6.5.1.6",
            "https://www.kegg.jp/entry/RC00005",
            "https://www.kegg.jp/entry/6.5.1.7",
            "https://www.kegg.jp/entry/RC00005",
            "https://www.kegg.jp/entry/6.5.1.8",
            "https://www.kegg.jp/entry/6.5.1.9",
            "https://www.kegg.jp/entry/RC00900",
            "https://www.kegg.jp/entry/6.5.1.-",
            "https://www.kegg.jp/entry/6.6.1.1",
            "https://www.kegg.jp/entry/RC01012",
            "https://www.kegg.jp/entry/6.6.1.2",
            "https://www.kegg.jp/entry/RC02000",
            "https://www.kegg.jp/entry/6.7.1.1",
            "https://www.kegg.jp/entry/7.1.1.1",
            "https://www.kegg.jp/entry/RC00001",
            "https://www.kegg.jp/entry/7.1.1.2",
            "https://www.kegg.jp/entry/RC00061",
            "https://www.kegg.jp/entry/7.1.1.3",
            "https://www.kegg.jp/entry/RC00061",
            "https://www.kegg.jp/entry/7.1.1.4",
            "https://www.kegg.jp/entry/RC00819",
            "https://www.kegg.jp/entry/7.1.1.5",
            "https://www.kegg.jp/entry/RC00819",
            "https://www.kegg.jp/entry/7.1.1.6",
            "https://www.kegg.jp/entry/RC01002",
            "https://www.kegg.jp/entry/7.1.1.7",
            "https://www.kegg.jp/entry/RC00061",
            "https://www.kegg.jp/entry/7.1.1.8",
            "https://www.kegg.jp/entry/7.1.1.9",
            "https://www.kegg.jp/entry/RC00016",
            "https://www.kegg.jp/entry/7.1.1.10",
            "https://www.kegg.jp/entry/7.1.1.11",
            "https://www.kegg.jp/entry/7.1.1.12",
            "https://www.kegg.jp/entry/7.1.2.1",
            "https://www.kegg.jp/entry/7.1.2.2",
            "https://www.kegg.jp/entry/7.1.3.1",
            "https://www.kegg.jp/entry/7.2.1.1",
            "https://www.kegg.jp/entry/7.2.1.2",
            "https://www.kegg.jp/entry/7.2.1.3",
            "https://www.kegg.jp/entry/7.2.2.1",
            "https://www.kegg.jp/entry/7.2.2.2",
            "https://www.kegg.jp/entry/7.2.2.3",
            "https://www.kegg.jp/entry/7.2.2.4",
            "https://www.kegg.jp/entry/7.2.2.5",
            "https://www.kegg.jp/entry/7.2.2.6",
            "https://www.kegg.jp/entry/7.2.2.7",
            "https://www.kegg.jp/entry/7.2.2.8",
            "https://www.kegg.jp/entry/7.2.2.9",
            "https://www.kegg.jp/entry/7.2.2.10",
            "https://www.kegg.jp/entry/7.2.2.11",
            "https://www.kegg.jp/entry/6.3.2.40",
            "https://www.kegg.jp/entry/RC00003",
            "https://www.kegg.jp/entry/RC03165",
            "https://www.kegg.jp/entry/RC03166",
            "https://www.kegg.jp/entry/6.3.2.41",
            "https://www.kegg.jp/entry/RC00064",
            "https://www.kegg.jp/entry/RC00141",
            "https://www.kegg.jp/entry/6.3.2.42",
            "https://www.kegg.jp/entry/RC00064",
            "https://www.kegg.jp/entry/RC00141",
            "https://www.kegg.jp/entry/RC01227",
            "https://www.kegg.jp/entry/6.3.2.43",
            "https://www.kegg.jp/entry/RC00064",
            "https://www.kegg.jp/entry/RC00090",
            "https://www.kegg.jp/entry/6.3.2.44",
            "https://www.kegg.jp/entry/RC00096",
            "https://www.kegg.jp/entry/RC00141",
            "https://www.kegg.jp/entry/6.3.2.45",
            "https://www.kegg.jp/entry/RC00064",
            "https://www.kegg.jp/entry/RC00141",
            "https://www.kegg.jp/entry/6.3.2.46",
            "https://www.kegg.jp/entry/RC00096",
            "https://www.kegg.jp/entry/RC00957",
            "https://www.kegg.jp/entry/6.3.2.47",
            "https://www.kegg.jp/entry/RC00064",
            "https://www.kegg.jp/entry/RC00141",
            "https://www.kegg.jp/entry/6.3.2.48",
            "https://www.kegg.jp/entry/RC00064",
            "https://www.kegg.jp/entry/RC00141",
            "https://www.kegg.jp/entry/6.3.2.49",
            "https://www.kegg.jp/entry/RC00064",
            "https://www.kegg.jp/entry/RC00141",
            "https://www.kegg.jp/entry/6.3.2.50",
            "https://www.kegg.jp/entry/6.3.2.51",
            "https://www.kegg.jp/entry/RC00064",
            "https://www.kegg.jp/entry/RC00090",
            "https://www.kegg.jp/entry/6.3.2.52",
            "https://www.kegg.jp/entry/RC00064",
            "https://www.kegg.jp/entry/RC00090",
            "https://www.kegg.jp/entry/6.3.2.53",
            "https://www.kegg.jp/entry/RC00064",
            "https://www.kegg.jp/entry/RC00141",
            "https://www.kegg.jp/entry/6.3.2.54",
            "https://www.kegg.jp/entry/RC00090",
            "https://www.kegg.jp/entry/RC00096",
            "https://www.kegg.jp/entry/6.3.2.55",
            "https://www.kegg.jp/entry/6.3.2.56",
            "https://www.kegg.jp/entry/6.3.2.57",
            "https://www.kegg.jp/entry/RC00064",
            "https://www.kegg.jp/entry/RC00090",
            "https://www.kegg.jp/entry/6.3.2.58",
            "https://www.kegg.jp/entry/RC00090",
            "https://www.kegg.jp/entry/RC00096",
            "https://www.kegg.jp/entry/6.3.2.59",
            "https://www.kegg.jp/entry/RC00096",
            "https://www.kegg.jp/entry/RC00141",
            "https://www.kegg.jp/entry/6.3.2.60",
            "https://www.kegg.jp/entry/RC00064",
            "https://www.kegg.jp/entry/RC00090",
            "https://www.kegg.jp/entry/6.3.2.61",
            "https://www.kegg.jp/entry/6.3.2.62",
            "https://www.kegg.jp/entry/6.3.2.-",
            "https://www.kegg.jp/entry/RC00064",
            "https://www.kegg.jp/entry/RC00090",
            "https://www.kegg.jp/entry/RC00141",
            "https://www.kegg.jp/entry/6.3.3.1",
            "https://www.kegg.jp/entry/RC01100",
            "https://www.kegg.jp/entry/6.3.3.2",
            "https://www.kegg.jp/entry/RC00183",
            "https://www.kegg.jp/entry/6.3.3.3",
            "https://www.kegg.jp/entry/RC00868",
            "https://www.kegg.jp/entry/6.3.3.4",
            "https://www.kegg.jp/entry/RC01389",
            "https://www.kegg.jp/entry/6.3.3.5",
            "https://www.kegg.jp/entry/RC03170",
            "https://www.kegg.jp/entry/6.3.3.6",
            "https://www.kegg.jp/entry/RC03195",
            "https://www.kegg.jp/entry/6.3.3.7",
            "https://www.kegg.jp/entry/6.3.4.2",
            "https://www.kegg.jp/entry/RC00010",
            "https://www.kegg.jp/entry/RC00074",
            "https://www.kegg.jp/entry/RC02798",
            "https://www.kegg.jp/entry/6.3.4.3",
            "https://www.kegg.jp/entry/RC00026",
            "https://www.kegg.jp/entry/RC00111",
            "https://www.kegg.jp/entry/6.3.4.4",
            "https://www.kegg.jp/entry/RC00458",
            "https://www.kegg.jp/entry/RC00459",
            "https://www.kegg.jp/entry/6.3.4.5",
            "https://www.kegg.jp/entry/RC00380",
            "https://www.kegg.jp/entry/RC00629",
            "https://www.kegg.jp/entry/6.3.4.6",
            "https://www.kegg.jp/entry/RC00378",
            "https://www.kegg.jp/entry/6.3.4.7",
            "https://www.kegg.jp/entry/RC00431",
            "https://www.kegg.jp/entry/6.3.4.8",
            "https://www.kegg.jp/entry/RC01067",
            "https://www.kegg.jp/entry/6.3.4.9",
            "https://www.kegg.jp/entry/RC00043",
            "https://www.kegg.jp/entry/RC00070"
        ]
        for (let i = 0; i < 100; i++) {
            select.appendChild(Object.assign(document.createElement('option'), {
                value: compounds[i],
                textContent: compounds[i],
            }))
            select2.appendChild(Object.assign(document.createElement('option'), {
                value: compounds[i],
                textContent: compounds[i],
            }))
        }
        return div
    }




    if (_.indexOf(':stream') === 0) {
        let div = document.createElement('div')
            div.innerHTML = Math.random()
        return div
    }







    if (_.indexOf(':') === 0) {
    }
























//figure out something that can impress the whole stream
//realtalk + observable + replit + lighttable + wolfram + gpt + retool + usemacro + airtable + notion + airbnb + google maps + google flights + google search + google translate + google docs + google sheets + google slides + google drive + google calendar + google photos + google keep + google news + google books + google scholar + google finance + google trends + google alerts + google analytics + google ads + google adsense + google adwords + google ad manager + google ad exchange + google
//+ 



//frequent travel - automate searches -> weekly

//make a deepfake of obama and biden sword fighting and then singing the declaration of independence so i can get out of school
//
//make ai edited photos
//make a voice clip of my mom and call school to ask them if i can have a week off to go to cancun 
//
//make a pipeline from one ai model to the next -> 
//figure out how to figure out how to 
//
//
//i have 5 errands to do -> batch them into one trip with least amount of time -> cant do easily with gmaps
//:airbnb-search less noisy + more pizza places 
//:stream find comments with sentiment greater than .8 and list their subjects - find strongest opinions and resolve/adress them

    if (_.indexOf(':find-shortest-path-errands') === 0) {
        let routes = [
            [[123,123], [123,456], [789, 101213]]
        ]
        _.shuffle(routes).map(path => distance(path))
        //given a list of 10 errands -> find the shortest path between all of them 
        //so that there are no backtracks or limited 
        //scenic route
        //plot two routes and diff any differences between them
    }



    //:when theres a meteor shower -> send an alert to local astronomy club
    if (_.indexOf(':stream') === 0) {
        let args = _.split(':stream')[1].trim()
        let otherArgs = _.split(':stream').slice(1)
        let stream = document.createElement('div')
        stream.className = 'stream'
        console.log(123)
        stream.innerHTML = 'clusters = humor, requests_for_demo, win trading, food ban, walk?'
        setInterval(function () {
            let comments = scheduledScraper(args)
            let topics = cluster(comments)
        }, 1000)
        //think of something more cool than stream
        //1 might use it, and can use the same code for 100s of other tasks 
        //fix the demo so the stream can sleep tonight 
       return stream
    }
    //if (_.indexOf(':flight-search') === 0) return mockFlights()
    if (_.indexOf(':blink') === 0) {
        return `<div class="blink">${_.slice(5)}</div>`
    }
    if (_.indexOf(':airbnb-search') === 0) {
        let args = _.split(':airbnb-search')[1].trim()
        let otherArgs = _.split(':airbnb-search').slice(1)
        window.airbnb = airbnbSearch();
        return JSON.stringify(airbnbSearch().filter(row => JSON.stringify(row).indexOf(args) !== -1).slice(0, 100))
    }
    if (_.indexOf(':find') === 0) {
        console.log(_.split(' ')[1])
        if (_.split(' ')[1] === 'flights') return flightSearch()
//        let _ = _.slice(1,).trim()
        //find all ___  
        //parts of speech grammar -> if word2 === noun then search registry of all db for noun
        //if not found, find synonyms of noun and search for those
        //if not found, find related terms and then connect user with domain experts 
        return JSON.stringify(state.seinfeld[Math.random() * 1000 | 0   ])
    }
    if (_.indexOf(':media-quote') === 0) return JSON.stringify(state.seinfeld[Math.random() * 1000 | 0   ])
    let instacart = ['sushi', 'tomatoes', 'pasta', 'spaghetti', 'rapsberries'] //TODO replace  w/ API requset
    if (_.indexOf(':find-food') === 0) return JSON.stringify(instacart)
    if (_.indexOf(':math') === 0) return console.log(123), eval(_.split(' ').slice(1).join(''))
    if (_.indexOf(':poll') === 0) { 
        let args = _.split(':poll').join('').split(' ')
        if (args.find((s) => s === 'poll.11')) {
            let foodOrActivity = args.find((s) => s =='food') ? 'food' : 'stuff_to_do'
            args = poll_data[foodOrActivity][state.poll1 || 'japan']
        }
        trackDependenentVariables[index] = getPoll(args)
        trackDependenentVariables[index].addEventListener('click', function (e) {
            state.poll1 = e.target.value
            if (e.target.tagName === 'input') return
            handleKeyDown({target: {value: get('textarea').value}})
        })
        return trackDependenentVariables[index]
    }
    if (_.indexOf(':pun') === 0) { 
        //filter out by targeted audienece
        //diff the timing of different tv shows
        //cateogirze the humor
        return puns[Math.random() * puns.length | 0]
    }
    if (_.indexOf(':joke') === 0) { 
        return jokes[Math.random() * jokes.length | 0]
    }
    if (_.indexOf(':apple how would you build a sgrna and gene for an apple that glows in the dark') !== -1) {
        return `<iframe width="100%" height="524" frameborder="0"
        src="https://observablehq.com/embed/@rreusser/line-integral-convolution?cells=viewof+stack"></iframe>`
    }
    if (_.indexOf(':solve-community-problem-make-it-super-easy-to-organize-groups') === 0) return 'poll: what is your favorite color'
    if (_.indexOf(':find-a-cafe-to-play-chess-and-board-games') === 0) return 'poll: what is your favorite color'
    if (_.indexOf(':yt') === 0) return `<iframe width="560" height="315" src="https://www.youtube.com/embed/TD5Rp__T668?si=Gl7O4PBllXKr5sft" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

    //special cases computational bio
    if (_.indexOf(':collaborate-on-algae-design') === 0) return JSON.stringify(coCollaborateOnAlgaeDesign('glowing'))
    if (_.indexOf(':visualize-pdb') === 0) return polling_options()
    //try images and charts 
    if (_.indexOf(':plant-trees') === 0) {
        let iframe = document.createElement('iframe')
        iframe.width = '100%'
        iframe.height = 670
        iframe.src = 'https://observablehq.com/embed/@chrispahm/prototyping-geoparquet-geos-in-webassembly?cells=mapContainer'
        return iframe
    }
    if (_.indexOf(':plan-dinner') === 0) {
        return renderGantChart()
    }
    if (_.indexOf(':') === 0) {return ''}
    return  _
}
setInterval(async function () {
    const response = (await fetch(baseName +'/.netlify/functions/columns').then(response => response.json()))
    let message = response.message
    if (!message) {
        console.log(response)
        message = ''
    }
    // renable database
    // get('.chapters').innerHTML = [...Array(message.length)].map(_ =>'<div>*</div>').join('')
    // let otherNexus = Object.entries(message).map(entry => {
    //     let [title, contents] = entry;
    //     contents = JSON.parse(contents)
    //     contents = contents.flat().filter(line => line.length > 2).sort((one, two) => one[1].length - two[1].length)
    //     let listView = contents.map(element => `<div class="bg-green-100">${element}</div>`).join('')
    //         return `<div class="bg-blue-100">${title}</div>${listView}`
    //     }).join('\n')
    // get('.all-nexus').innerHTML = otherNexus   
}, 5000)
get('textarea').addEventListener('keyup', handleKeyDown)

let renderGantChart = function () {
        const tasks = [
          ["boil water", 1, 2],
          ["microwave zuchini", 2, 2],
          ["wash vegetables", 4, 3],
          ["peel potatoes", 7, 2],
          ["broil carrots", 9, 2],
          ["simmer reduction", 11, 1]
        ];
      
        // Create SVG Element
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "800");
        svg.setAttribute("height", "200");
        // Loop through each task and draw it
        tasks.forEach((task, index) => {
          const [name, start, duration] = task;
          // Create a group for each task
          const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
          // Draw rectangle for the task duration
          const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          rect.setAttribute("x", start * 40);
          rect.setAttribute("y", index * 30);
          rect.setAttribute("width", duration * 40);
          rect.setAttribute("height", "20");
          rect.setAttribute("fill", "blue");
          // Add task label
          const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
          text.setAttribute("x", start * 40);
          text.setAttribute("y", index * 30 + 15);
          text.setAttribute("fill", "aliceblue");
          text.textContent = name;
          // Add to group and then add the group to SVG
          g.appendChild(rect);
          g.appendChild(text);
          svg.appendChild(g);
        });
        // Insert SVG into HTML
        return svg;
}

let actions = {
    ':poll': function() {},
}

function parseSentence(sentence) {
    return sentence.split(' ')
}

function  coCollaborateOnAlgaeDesign(traitsRequestedBasedOnPoll){ 
    return {
        fasta: `GATCATAC`, 
        sgrna: `GATAGACTACAT`,
        pdb: `<iframe width="2000" height="2000" src=\'http://localhost:5173/'>`,
        shipToLab: `<button>Ship to Lab And then Ship to you</button>`,
    }
}

setTimeout(function () {
    document.querySelector('textarea').value = `:plan-dinner
:twitch-comments find all relating to food
:order-instacart
:poll japan, london, shanghai
:poll food options in poll.11
:poll activity options in poll.11
:plant-trees find places to plant trees nearby 20418 autumn shore drive
    `;
    setTimeout(() => {
        handleKeyDown({target: {value: get('textarea').value}})

    }, 1000)
}, 1000);

function flightSearch() {
    return [
        '6am flight to seattle',
        '4am flight to hong kong',
        '5am flight to london',
        '3am flight to paris',
    ]
}
let airbnb = async function () {
    let req = await fetch('./airbnb.json')
    state.airbnb = await req.json()
}
airbnb()
function airbnbSearch() {
    return state.airbnb
}
get('textarea').addEventListener('mousemove', function (e) {
    let width = e.target.clientWidth
    let height = e.target.clientHeight
    //get the position of the cursor within the textarea
    let y = e.offsetY
    let rows = getTextAreaRows(e.target)
    let row = Math.floor(y / height * rows.length)
    let line = rows[row]
    let draftElYDim = get('.nexus').children[0]?.clientHeight
    let foundDiv = Array.from(get('.nexus').children).findIndex((el) => {
        return el.textContent.indexOf(line) !== -1
    })
    let idx = get('.nexus').scrollTop = foundDiv * draftElYDim
})
fetch('george.txt').then(req => req.text()).then(text => {
    state.seinfeld = text.split('\n');
                                                            state.modernFamily = `I learned a long time ago you can fight it or try to make the best of it. And that's all a lot easier if you've got people who love you to help you face whatever life throws at you.Luke: How come you never wrote a poem for me?Manny: Don't you get it? They were all for you.Claire: They're really leaving. What do we do?Phil: What we always do. Leave the porch light on, they'll come back. Mom, I'm the lucky one. You guys know you can call me anytime, right? We make a good team. I can't go to jail. I'm a gay prosecutor, there's no prison gangs for that!Haley: Thanks for putting in a good word for us. Mitch: They just needed some reassurance, considering most of Dylan's money is tied up in Dave and Busters' gift cards.Cam: Don't hate me for your son leaving. Jay: You're both my sons.Cam: I want you to read this, but not until after I leave.Gloria: It's going to make me cry isn't it, you beautiful cornfed son-of-a-bitch. I'll reinvent myself. I'm gonna dye my hair blue and carry around an emotional support pig. I shouldn't be penalized for being too smart, I'm not running for president. You could pretend to get sick at the table. You know cough, stomachache,  dealer's choice, I don't care just sell it. Thank you Uncle Mannny\n"`.split('\n')
});

let polling_options =  (options) => 
`<div aria-describedby="id__bepan6sf94e" aria-label="Poll options" role="radiogroup" class="css-1dbjc4n"><div role="radio" tabindex="0" class="css-1dbjc4n r-1niwhzg r-sdzlij r-1phboty r-rs99b7 r-1loqt21 r-16y2uox r-15ysp7h r-4wgw6l r-1ny4l3l r-1fneopy r-o7ynqc r-6416eg r-lrvibr" style="border-color: rgb(29, 155, 240);"><div dir="ltr" class="css-901oao r-1awozwy r-1cvl2hr r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"><span class="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-a023e6 r-rjixqe r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">50%+</span></span></div></div><div role="radio" tabindex="0" class="css-1dbjc4n r-1niwhzg r-sdzlij r-1phboty r-rs99b7 r-1loqt21 r-16y2uox r-14gqq1x r-15ysp7h r-4wgw6l r-1ny4l3l r-1fneopy r-o7ynqc r-6416eg r-lrvibr" style="border-color: rgb(29, 155, 240);"><div dir="ltr" class="css-901oao r-1awozwy r-1cvl2hr r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"><span class="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-a023e6 r-rjixqe r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">20-50%</span></span></div></div><div role="radio" tabindex="0" class="css-1dbjc4n r-1niwhzg r-sdzlij r-1phboty r-rs99b7 r-1loqt21 r-16y2uox r-14gqq1x r-15ysp7h r-4wgw6l r-1ny4l3l r-1fneopy r-o7ynqc r-6416eg r-lrvibr" style="border-color: rgb(29, 155, 240);"><div dir="ltr" class="css-901oao r-1awozwy r-1cvl2hr r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"><span class="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-a023e6 r-rjixqe r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">5-20%</span></span></div></div><div role="radio" tabindex="0" class="css-1dbjc4n r-1niwhzg r-sdzlij r-1phboty r-rs99b7 r-1loqt21 r-16y2uox r-14gqq1x r-15ysp7h r-4wgw6l r-1ny4l3l r-1fneopy r-o7ynqc r-6416eg r-lrvibr" style="border-color: rgb(29, 155, 240);"><div dir="ltr" class="css-901oao r-1awozwy r-1cvl2hr r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"><span class="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-a023e6 r-rjixqe r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">&lt;5%</span></span></div></div></div>`
function getPoll(options=['red', 'blue', 'green']) {
    //make this write to excel
    //new excel tab = new year,month,week,day????
    //register variable in state
    options = options.filter(_ => _.length > 0)
    state.poll = 0
    let container = document.createElement('div')

    options = options.map(str => str === ':custom' ? '<input type="text" />' : str)

    container.innerHTML  = 
    `<div>${(options.map((op) => op.indexOf('input') > -1 ? op : 
        `<label>${op}</label><input type="radio" id="huey" name="drone" value="${op.replace(',','')}"  />`)).join('\n')
    }</div>`
    container.addEventListener('click', function (e) {
        console.log(e.target.value)
        state.poll = e.target.value
    })
    container.innerHTML += '▁▂▃▅▂▇'
    return container
}
let mapbox = 'pk.eyJ1IjoiYXdhaGFiIiwiYSI6ImNrdjc3NW11aTJncmIzMXExcXRiNDNxZWYifQ.tqFU7uVd6mbhHtjYsjtvlg'
const fetchMapbox = async () => {
    let ur = `https://api.mapbox.com/geocoding/v5/mapbox.places/{search_text}.json`
    const url = "https://api.mapbox.com/isochrone/v1/mapbox/driving/-118.22258,33.99038?contours_minutes=5,10,15&contours_colors=6706ce,04e813,4286f4&polygons=true&access_token=pk.eyJ1IjoiYXdhaGFiIiwiYSI6ImNrdjc3NW11aTJncmIzMXExcXRiNDNxZWYifQ.tqFU7uVd6mbhHtjYsjtvlg"
    const req = await fetch(url, {    })
    const json = await req.json()
    return json
}

let lineTypes = {
    1:'media-quote', //comes from text "modern family phil " - type whatever -> client side validation,
    2: 'poll', //comes from text "poll: what is your favorite color" - purple, blue, red -> client side validation,
    3: 'live-query', // poll.0.results.0 -> send _ roses to white-house
    4: 'live-query', // poll.0.results.1 -> re-eval infomration in cell z51 -> Free Piano Lessons for all kids who live in _
    5: 'live-query', // poll.1.results.most -> when 300 people edit this -> save snapshot of nexus to s3
    6: 'live-query', // send this request to GPT to convert to code -> _1 = cell z0, _2 = z4 => send (_1 + _2) roses to white-house
}
function ___() {

}

let coolLineTypes = {
    'Live-Query': ':live-query',
    'Blink-Tag': ':blink',
    'Poll': ':poll _', //easiest ui for fill in the blank
    'Flaming': ':flaming  _',
    'Media-Quote': ':media-quote _',
    'Sparkles': ':sparkles _',
    'Paste-Image': ':img',
}
function createCopy(textArea) {
    var copy = document.createElement('div');
    copy.textContent = textArea.value;
    var style = getComputedStyle(textArea);
    [
     'fontFamily',
     'fontSize',
     'fontWeight',
     'wordWrap', 
     'whiteSpace',
     'borderLeftWidth',
     'borderTopWidth',
     'borderRightWidth',
     'borderBottomWidth',
    ].forEach(function(key) { copy.style[key] = style[key]; });
    copy.style.overflow = 'auto';
    copy.style.width = textArea.offsetWidth + 'px';
    copy.style.height = textArea.offsetHeight + 'px';
    copy.style.position = 'absolute';
    copy.style.left = textArea.offsetLeft + 'px';
    copy.style.top = textArea.offsetTop + 'px';
    copy.style.pointerEvents = 'none'
    document.body.appendChild(copy);
    return copy;
  }

function getCaretPosition(textArea) {
    var start = textArea.selectionStart;
    var end = textArea.selectionEnd;
    var copy = createCopy(textArea);
    var range = document.createRange();
    if (! copy.firstChild) return {x:0, y:0}
    range.setStart(copy.firstChild, start);
    range.setEnd(copy.firstChild, end);
    var selection = document.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    var rect = range.getBoundingClientRect();
    document.body.removeChild(copy);
    textArea.selectionStart = start;
    textArea.selectionEnd = end;
    textArea.focus();
    return {
      x: rect.left - textArea.scrollLeft,
      y: rect.top - textArea.scrollTop
    };
  }
  
document.body.addEventListener('click', function (e) {
    if (! (e.target.title in coolLineTypes)) return;
    let textArea = document.querySelector('textarea')
    let rows = getTextAreaRows(textArea, e.target.selectionStart) 
    const row = contentBeforeCursor(textArea, state.selectionStart).split("\n").length -1;
    rows[row] = coolLineTypes[e.target.title] + rows[row]
    textArea.value = rows.join('\n')
    if (document.querySelector('.slash-picker-menu'))
    document.querySelector('.slash-picker-menu').style.display = 'none'
    textArea.focus()	
    textArea.selectionStart = state.selectionStart + coolLineTypes[e.target.title].length
})

function getTextAreaRows(target) {
    return target.value.split('\n')
}

function contentBeforeCursor(target, selectionIndex) {
    let position = selectionIndex || target.selectionStart
    const contentBeforeCursor = target.value.substring(0, position);
    return contentBeforeCursor
}

let contextMenuActive = false 
window.addEventListener('keydown', function (e) {
    state.selectionStart = e.target.selectionStart
    if (e.key === '/') {
        let template = document.querySelector('template').innerHTML
        let container = document.querySelector('.reflect-editor-scope ')
        //container.innerHTML = template + container.innerHTML
        let el = document.createElement('div')
        el.innerHTML = template
        container.appendChild(el, container.firstChild)   
        contextMenuActive = true
    }
    if (e.key === 'Enter' && e.metaKey) {
        let textAreaContent =e .target.value.split('\n')
        const row = contentBeforeCursor(e.target, e.target.selectionStart).split("\n").length -1;
        let query = textAreaContent[row].split(' '); //fix malformed input, bear, reflect, medium, 
        let [action, show, character] = query
        let showContent = state[show]
        let filteredShowContent = showContent.filter(row => row.toLowerCase().indexOf(character) !== -1)
        let funniestChoice = filteredShowContent[Math.floor(Math.random() * filteredShowContent.length)] //sort by most humorous to that individual
        textAreaContent[row] = funniestChoice
        get('textarea').value = textAreaContent.join('\n')
    }
    if (! contextMenuActive)  return
    let isSelected = Array.from(document.querySelector('.slash-picker-menu').children).indexOf(document.querySelector('.slash-picker-item-highlighted'))
    if (e.key.toLowerCase() === 'up') {
        isSelected  -= 1
    }
    if (e.key.toLowerCase() === 'down') {
        isSelected  += 1
    }
    get('.slash-picker-menu').children[isSelected].classList.add('slash-picker-item-highlighted')
})

document.addEventListener("paste", (event) => {
    let original = event.clipboardData.getData('text/plain');
    let transformed = original.toUpperCase();
    const selection = window.getSelection();
    //if (!selection.rangeCount) return false;
    //selection.deleteFromDocument();
    //selection.getRangeAt(0).insertNode(document.createTextNode(paste));
    //window.selection = selection
    event.clipboardData.setData('text/plain', transformed);
    //event.preventDefault()
    window.selection = selection
    //TODO - make this work
    //selection.textContent.replace(original, augmented)
    // event.clipboardData.files[0].arrayBuffer().then(req => console.log(req))
    // console.log(event.clipboardData.getData('text/plain'))
});
document.addEventListener('paste', async function(e) {
    // Access clipboard items
    const clipboardItems = e.clipboardData.items;
    for (const item of clipboardItems) {
        // Check if the clipboard item is an image
        if (item.type.startsWith('image/')) {
            // Convert image to blob
            const blob = item.getAsFile();
            //var blob = await item.getType('image/png');
            // Create an Image element
            const img = new Image();
            // Create an object URL for the blob
            const url = 'https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/370246016_849098373544268_4018830734355722473_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=49d041&_nc_ohc=ThzXrbRD3xgAX_ZwdR6&_nc_ht=scontent-hou1-1.xx&oh=00_AfDhbdlmfF_RDBBYcGdj5FPfTgf07BiLsw1eYEIr7q_iWw&oe=64F6D387'
            //URL.createObjectURL(blob);
            // Set the src of the image
            img.src = url;
            // Append the image to the document
            document.querySelector('.media-folder').appendChild(img);
            // Release the object URL
            URL.revokeObjectURL(url);
            // Prevent the default paste action
            e.preventDefault();
            break;
        }
    }
});
window.localStorage.getItem('textarea')

document.querySelector('textarea').addEventListener('keyup', (e) =>  {
let l = e.target.offsetLeft + (10 * e.target.selectionStart)
let t = e.target.offsetTop / 10
let {x,y} = getCaretPosition(e.target)
confetti({
    particleCount: 150,
    startVelocity: 30,
    origin: {
        x: x / innerWidth,
        y: y / innerHeight//(t)/ innerHeight - .8
      }
  })
})

