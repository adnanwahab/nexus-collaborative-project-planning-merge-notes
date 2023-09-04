import confetti from 'https://cdn.skypack.dev/canvas-confetti'; //https://github.com/catdad/canvas-confetti/blob/master/src/confetti.js  change to heart
import _ from 'https://underscorejs.org/underscore-esm-min.js'
let isDeployed =  window.location.host === `merge-sentences-todo.ngrok.io` || 
window.location.host === `coop-party.surge.sh`
let baseRoute = 'https://nexus-merge-sort-300-people.netlify.app/'
let baseName = 'https://nexus-merge-sort-300-people.netlify.app'
let state = {};
let poll_data = {
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
//https://ui.shadcn.com/docs/components/checkbox
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

How did Darth Vader know what luke was getting him for his birthday? He could sense his presence.

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

let lineNumberComponents = [

]

function compile(_, index) {
    console.log(_.indexOf(':poll'))

    //make parsing better -doesnt have to be first thing -> just remove whitespace
    //make dependent variable tracking without react
    //l
    if (_.indexOf(':if-poll-red') === 0) {
       return console.log(trackDependenentVariables)
    }
    //if (_.indexOf(':flight-search') === 0) return flightSearch()
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
    get('.chapters').innerHTML = [...Array(message.length)].map(_ =>'<div>*</div>').join('')
    let otherNexus = Object.entries(message).map(entry => {
        let [title, contents] = entry;
        contents = JSON.parse(contents)
        contents = contents.flat().filter(line => line.length > 2).sort((one, two) => one[1].length - two[1].length)
        let listView = contents.map(element => `<div class="bg-green-100">${element}</div>`).join('')
            return `<div class="bg-blue-100">${title}</div>${listView}`
        }).join('\n')
    get('.all-nexus').innerHTML = otherNexus   
}, 5000)
get('textarea').addEventListener('keyup', handleKeyDown)
setTimeout(handleKeyDown, 2000)

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

function  coCollaborateOnAlgaeDesign(traitsRequestedBasedOnPoll){ 
    return {
        fasta: `GATCATAC`, 
        sgrna: `GATAGACTACAT`,
        pdb: `<iframe width="2000" height="2000" src=\'http://localhost:5173/'>`,
        shipToLab: `<button>Ship to Lab And then Ship to you</button>`,
    }
}

console.log('123')
;setTimeout(function () {
    console.log(1231313)
    document.querySelector('textarea').value = `
:poll japan, london, shanghai
:poll food options in poll.11
:poll activity options in poll.11
:plant-trees find places to plant trees nearby 20418 autumn shore drive
    `;
    console.log(1231313)
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

//run client with llm+g + intermediate representation
// this is cool
// this makes sense
// make cool stuff
// make a cake that is cool
// make cool stuff
//try to make 5 really cool 50,000 word eassay or stories

// https://voyager.minedojo.org/

//play video games for me
//jump in mega man X 
//https://hannibunny.github.io/mlbook/transformer/intent_classification_with_bert.html
// window.location.hash === '#one' ? 
// `there are 500 cats in the neighborhood.
// there was a train being made from kansas to seattle.
// yesterday i ate popcorn.` : 
// `there are 300 cats in the neighborhood.
// there was a train being made from kansas to seattle.
// yesterday i ate toast.
// send instant pot to 440 west 34th street
// send ingredients weekly to 440 west 34th street
// send .140 satoshis to #121alsdfjasdfjaeofijas;ofjasd
// start instant pot
// add peppers, turkey, kabob, and tomatoes to pot
// saute onions until carmelized
// apply salt, spice and vinnegar
// then make soup
// `
//create bounties for improvements and solutions to problems within document
//:bitcoin .1 to person who can make a better version of this document
//build something that 100% of telepathy and lots of people would want to know about


//type a sentence -> just see cool shit happen on the right side instantly
//client side LLM -> .1 second instant feedback
//[does not compile] - really- really goood autocomplete
//10 different "llms" + modules -> figure out which one to use based on the sentence grammar -> problem "domain" -> use a classifier to predict which llm to use 
//:shader - write a shader to 
//autocomplete = most important part -> 8 hours a day -> 3 months ekeing 20% better prediction = different between unsuable to wow its exactly what i needed basd on the context of previous sentences in this nexus 

//make something anyone wouldnt have predicted 4 days ago
//make best possible thing -> use english to 
//make brwoser based LLM work -> spam on all possible subsets and substitutions 


//make a diagram of the 20 best tweets by time and humor
//write a function to split a string by colons and commas
// Determine whether the sentiment of text is positive
// Use a web service to determine the sentiment of text
//execute live repl in bottom pane
// let final = document.querySelector('.attempt-at-consolidation')
// document.querySelector('.nexus').addEventListener('click', function (e) {
//     console.log(123)
//     let text = e.target.textContent
//     final.textContent += text
// })
//switch to react later
//fetch george.txt
//https://stackoverflow.com/questions/74070505/how-to-run-fastapi-application-inside-jupyter

//simplify -> upload -> "nexus" to gcloud to excel
//use "sentene-transformers" to transform all documents into one document
//track the transformations at every step -> so the indices are always correct
//on keypress -> send edit to serverless function -> 
//changed document ideas get stored in 2nd spreadsheet tab
//use spreadsheet as a message queue
//Machine Learning Process = outgoing only -> requests to notebook cells with changed documents
//those changes then get added into the nexus
//dont need fastapi 
//serverless function updates spreadsheet
//pytorch server updates spreadsheet to cluster "chat" or "document" or "story" or "essay" or "book"
//make pytorch server a batch process -> do some kind of bayesian optimization to make it make sense
//suggest eddits and what not

//if the server goes down
//users can just manually assign topic to their message :snooze

//https://www.kaggle.com/datasets/marquis03/metal-organic-frame-materials-prediction

//all data in notebook is classified by the text that creates it 
//find intersection between all notebooks -> everyone writes their own constiution -> sort by mergability 
//give feedback based on which lines are not mergeable





//could put 900 hours of work 
//Given 3 peoples schedules, find a time to meet and a place to meet -> add 3 emails 
//writes to a spreadsheet and keeps track of your board games -> catan, chess and poker



//come up with all the data all the code gpt can make -> which will be lots of things
//problem -> chatGPT doesnt come up with perfect code every time 
  //fine tune gpt-4 to make it better at writing code -> export -> test -> 3 months to cool thing 


  //use a poll -> should executable text be :action
//how to execute -> one magic spell (not sure)

//https://ui.shadcn.com/docs/components/calendar
//everyone writes together -> becomes one document 
//a next generation constitution would have things like all 300 people should vote everyday and they get free piano lessons and -10% on taxes. It should have ammendments daily. It should have automatic daily taxes if you act negatively. It should ban walled gardens and things like imessage and sms should be in a database that has red, yellow and green tiers of access. 
//red = 100% anonymized, 
//yelow = semi-anonymous
//get -5% taxes for allowing your texts to be yellow
//300 million people have 1million more ideas and implementations and proofs than 1000 people. 
// Compute the difference, intersection, and join between n essays -> 
// add random data analysis and program executions in the middle (vscode, git, replit, observable, jupyter, retool, usemacro, excel, )

//choose your own adventure text game 
//categorize all the text in the nexus in buckets 

//changes baseroute to https://merge-sentences-todo.ngrok.io/ if you want to test locally


//list -> 
//for all cells -> get intersection of people who responded blue to poll_one and red to poll_two
//buy flights for them to go to vancouver and then back to their home town 
//just need lists and functions -> fn args -> infinite args for all functions 

//to test -> translate passage or page from books -> english -> french -> japanese -> english
//or intentionally rephrase using whatever 


//300 people typing per second -> how good can you make the draft without extra work
//collaboratively make story
//intersection is cool and is easier now but not really possible 5  ago
//use client side GPU w/ google sheets - no server + no login 
//tree is cool 

//extract meaning from text -> do pairwise matching
//sort by sum of encoding
//

//300 people typing - how fun can you make it to think together - cool diagram


//editing is lots of work -> how to make this take 50% less time





//db -> have to do a pairwise comparision with your version and canonical version
//also do a pairwise comparision with your set of sentences and everyone elses set of sentences


//nexus = intersection of 300 million circles 

// 300 million circles -> render by similarity, humor, 
// show some way over in the corners -> margin vs center
//try to get your circle to overlap with everyone elss but also have useful, funny or relevant 'tangents'

//300 people will work together to type up a "draft,plan,story"
//300 circles - venn diagram -> 
//try on the client -> no server -> 7 billion people -> 10 years from now 
//for each pair -> ast, encoding = latent representation -> 32 columns 
//as you edit -> "suggest -> this sentence is malformed, please make it like this "
//if you want someone to do great work, why would you put stupid shit in their head ? poll audience
// document.onpaste = function (event) {
//     var items = (event.clipboardData || event.originalEvent.clipboardData).items;
//     console.log(JSON.stringify(items)); // might give you mime types
//     for (var index in items) {
//         var item = items[index];
//         if (item.kind === 'file') {
//             var blob = item.getAsFile();
//             var reader = new FileReader();
//             reader.onload = function (event) {
//                 console.log(event.target.result); // data url!
//             }; 
//             let img = document.createElement('img')
//             let base64Data = reader.readAsDataURL(blob)
//             console.log(base64Data)
//             img.src = base64Data
//             // console.log(reader.readAsDataURL(blob))
//             document.querySelector('body').appendChild(img)
//         }
//     }
// };
//keep all the useful stuff out of scope beyond basic live queries
//make it daily
//but also a scratch pad you can post memes and opinion polls and favorite quotes 
//natural language interface to as many apis as possible with gpt in between
//augment data that user types
//90 min timer -> compile then 2nd line 
//client Side LLM -> tomororw
//build soemthing that is worth knowing about -> 
//what would telepathy want to build
//components - UI, AI, ML, NLP,
//webgpu custom graphics -> simulate a wind field 
//publish button -> wikipedia page -> wikipedia integrates exported pages ?????
//find all houses in houston 
//email me them
//set a watcher for new houses that match my criteria
//dont use a broker
//make a comic books about the wizards saving the word
//request for features
//use a function to categorize ->
//solve all leetcode difficult using english 
//make a list from 1 to 500
//make cool functions that can be used to solve problems
//telepathy is unhappy with this code base and their experience of me
//figure out a problem 

//english language notebook/editor to make it easier to solve data analysis problems
//also let english language speakers execute code in a more structured way on servers they know ntohing about using custom appliocatons 
//cooperation - cluster notebooks by topic ->
//one nexus -> write a 'constitution' or an operating system for a country/city in english so everyone can read and write to it
//this is cool so that everyone can see what is going on and participate in the process of making decisions
//also it is cool because everyone can focus on a different part and improve it as it pertains to them ro someone they know or just soemthing they think is cool 
//https://docs.chain.link/
//brooklyn near yoga studio and quiet 
//get list of yoga studios
//get list of airbnbs
//get list of noise complaints 
//near_studio_apt = list(set([for apt in airbnbs:
//for studio in yoga_studio
//if distance(studio, apt) < 1.5 return true]))
//quiet= [apt for apt in airbns if 5 < len(noise_complaints.filter({location} => distance(location, apt) < 1.5))]
//get average of noise complaints in radius of each apt 
//find weather forecast
//plan hike on 3rd dray
//if weather is good, send notification to all people who voted yes
//if weather is rainy -> send notification that it is postponed 
//
//make hello world take a different set of parameters -> post / get
//get content 
//faster than searching -> travel planning in 5 minutes instead of 4 hours 

//work on parser use peg
//https://pegjs.org/documentation
//
//make something like neopets
//100 people draft a document
//document says there are 100 parks in city
//document then generates code for generating invoice for adding park maintenance to city budget
//document also generates code for other applications to support parks
//document also 

//I would like there to be 100 parks in houston
//snapshot city before parks
//snapshot city after parks
//make cities more data driven -> 311 service requests are 

//go to phily
//why are all corporation dellaware c corp? 
//i like leslie knope
//make it easier for congresspeople to implement new initiatives 
//track them
//10,000 cities in the world - 50% of people live in cities, 30% in rural areas, 20% in suburbs


//statically analyze generated code
//automatically provision data and servers for it
//automatically make ui widgets to interact with it -> scheduling, debug output and logs, etc
//anomaly detection, capacity planning, crisis diagnosis, system design 
//

//make a living constitution that updates every day -> according to votes from the audience 
//audience can make suggestions for changes to the constitution ->
//these changes can be discussed and scrutinized and this discussion is kept on record
//this constution can also creates procedures that can be executed 10^15 times a second
    //exectue subprocedures and track logs in excel 
    //everyone can see and debug the data about each procedure 
    //people can also propose edits for each procedure and
    //get a new passport = one button press
    //doing taxes = one button press
    //figure out more details that make sense

    //question? how to reorganize code that is generated ?? -> one namespace and thats fine no one cares


//goal: write a 5 page essay collaboratively
//then see if it can have all the functions fall out of it 

//this way citizens can be like 

//we want 4 new houses in quadrant z42 -> 
//they can see the progress daily till its complete 

//excel based persistence
//write procudures that mutate pixels in spreadsheet like reddit.com/r/place

//start with this
//let 300 people in editor type shit
//i want a picture of a dinosaur wearing sunglasses in the top right or z51 that says "cool beans"


//:actions => eval to value / results
//english => provides data for actions


//makes up a server -> provisions resources, data
//get/make input/outputs for all science courses + books + research ppaers 
//browserify does it - static analysis + observable does it too
//find the variables that are important in lots of code that they know nothing about
//generated code from gpt, internet, whatever -> 
//one you know the variables for any code that matches with a user's query
//ask the user for those variables 
//try that out

//type a bunch of text
//issue a command using above context

//me and my chess club are meeting at the cafe every thursday
//sometimes the coffee shop is too loud
//find a cafe that is quiet and has a chess board
//find a cafe that is quiet and has a chess board and is less than 1.5 miles from my house
//write some code that does this task
//if "computers" suggestion is not precisely what you want, tell it what you wanted -> with a poll -> with a tree of optiosn 
//make database+ui+gpu_script super ez - make a faucet-handle-cover for 'intelligence is now part of the plumbing / water supply'

//i want to talk to gpt collaboratively
//but also i want to run the code in a more structured way


//find a list of every hiking place in the world
//return a table


//
//make hello world take a different set of parameters -> post / get
//get content 
//faster than searching -> travel planning in 5 minutes instead of 4 hours 

//work on parser use peg
//https://pegjs.org/documentation
//
//make something like neopets
//100 people draft a document
//document says there are 100 parks in city
//document then generates code for generating invoice for adding park maintenance to city budget
//document also generates code for other applications to support parks
//document also 

//I would like there to be 100 parks in houston
//snapshot city before parks
//snapshot city after parks
//make cities more data driven -> 311 service requests are 

//go to phily
//why are all corporation dellaware c corp? 
//i like leslie knope
//make it easier for congresspeople to implement new initiatives 
//track them
//10,000 cities in the world - 50% of people live in cities, 30% in rural areas, 20% in suburbs


//statically analyze generated code
//automatically provision data and servers for it
//automatically make ui widgets to interact with it -> scheduling, debug output and logs, etc
//anomaly detection, capacity planning, crisis diagnosis, system design 
//

//make a living constitution that updates every day -> according to votes from the audience 
//audience can make suggestions for changes to the constitution ->
//these changes can be discussed and scrutinized and this discussion is kept on record
//this constution can also creates procedures that can be executed 10^15 times a second
    //exectue subprocedures and track logs in excel 
    //everyone can see and debug the data about each procedure 
    //people can also propose edits for each procedure and
    //get a new passport = one button press
    //doing taxes = one button press
    //figure out more details that make sense

    //question? how to reorganize code that is generated ?? -> one namespace and thats fine no one cares


//goal: write a 5 page essay collaboratively
//then see if it can have all the functions fall out of it 

//this way citizens can be like 

//we want 4 new houses in quadrant z42 -> 
//they can see the progress daily till its complete 

//excel based persistence
//write procudures that mutate pixels in spreadsheet like reddit.com/r/place

//start with this
//let 300 people in editor type shit
//i want a picture of a dinosaur wearing sunglasses in the top right or z51 that says "cool beans"


//:actions => eval to value / results
//english => provides data for actions


//makes up a server -> provisions resources, data
//get/make input/outputs for all science courses + books + research ppaers 
//browserify does it - static analysis + observable does it too
//find the variables that are important in lots of code that they know nothing about
//generated code from gpt, internet, whatever -> 
//one you know the variables for any code that matches with a user's query
//ask the user for those variables 
//try that out

//type a bunch of text
//issue a command using above context

//me and my chess club are meeting at the cafe every thursday
//sometimes the coffee shop is too loud
//find a cafe that is quiet and has a chess board
//find a cafe that is quiet and has a chess board and is less than 1.5 miles from my house
//write some code that does this task
//if "computers" suggestion is not precisely what you want, tell it what you wanted -> with a poll -> with a tree of optiosn 
//make database+ui+gpu_script super ez - make a faucet-handle-cover for 'intelligence is now part of the plumbing / water supply'

//i want to talk to gpt collaboratively
//but also i want to run the code in a more structured way


//find a list of every hiking place in the world
//return a table
//what problems can data analysis not solve s

//1. dependency - live updates (weather, stock price, population , use another cell(use a generator))
//get list of dependencies by calling walk on the acorn tree
//render the component by creating a div and setting the html
//2. 
//humor sort the quotes -> render a video player for all of the quotes
//make a canvas that reads all the quote sequences from all the video tags into one and makes it saveable
//make it easys to remix video using searched for quotes
//that time when jerry said "hello" and then kramer said "hello" and then george said "hello" and then elaine said "hello"
//make flames, blinks and sparkles, 
//switch to react
//

//poll maybe doesnt need to be an action/function, instead it exists outside the editor and in the toolbar

//deploy today and send to people you know


//steps to turn existing app into lien 29-38

//draft a new version of the constituion
//0 every line or two gets a poll to check if everyone thinks its a good idea
//if they dont then they say why
//then each why must be resolved by peers -> everyone in the country approves each line.
//each edit proposal comes with a reasoning and a list of substitutions
    //each edit requires approval from multiple people to be bubble up to next level of approval

//ususally a congressman drafts a bill - according to stephen colbert, most of them dont even read it 

//what is best place to put road, theres lots of congestion on route 66 and i10
//poll the residents -> should put it here or there -> show pros and cons of each road

//https://maps.googleapis.com/maps/api/place/details/json
// ?place_id=ChIJrTLr-GyuEmsRBfy61i59si0
// &fields=address_components
// &key=YOUR_API_KEY
    //get the concentration / frequency of noise complaints for each appartment -> filter out all above mean -> heatmap
//use h3 and count within buckets 
//list all common tasks that community organizers tend to have 
//go on remote year and study what the  community managers do
//ask them if they think this tool is cool
//help them with common tasks -> convert to automation 
//remote year is hard to scale beyond like 3-4 trips 
//make it easier for 1000s of remote years -> 30,000 people per year
//make it easy to predict things in the future -> prevent problems before they happen
//anomaly detection, capacity planning, crisis diagnosis,system design https://bost.ocks.org/mike/cubism/intro/#2
//try to find all jupyter notebooks
//find all excel worksheets -> all data science courses -> get list of queries
//make sure these queries are all backed by apis 
//manually curate 100 APIs that can be used to solve problems -> natural language + lots of data 
//allow user to boot a server -> download a dataset and then run a model on it if needed 
//do all kinds of common data "science" for users -> 
//:add-action 
//this app is a useful tool that can make lots of cool tasks easier -> add widgets that run scripts in the 
//browser or on a server -> write serverless functions with natural language -> execute them -> 
//serverless function takes a string and then calls eval on it -> loads the dependent data

//government has 10 choices
//there are dependencies between choices
//so if you choose one, you can't choose another
//a bill can be drafted in 10 billion ways
//the text in the document should change based on the choices
//theres no way a person can hold that many permutations in their head
//this is why these documents get so long and we need armies of lawyers and accountants for simpel things
//since simple things are so difficult, it makes difficult things impossible
//if we just simplified the process, we could get so much more done.

//10% of all people work in the governmetn 

//const baseRoute = isDeployed ? 'https://merge-sentences-todo.ngrok.io/' : `http://localhost:8000/`
//1.needs focus -> write code with english
//2.write english for simultaneous collaboration with multiple people 
//discussion place as a place to do 1+2 
//multiple actions ? -> :blink :media-quote -> is this a consistent syntax mental model
//setInterval(function () {}, 500) re-render
//make a cell that reads data from the poll
//get consensus from 300m people