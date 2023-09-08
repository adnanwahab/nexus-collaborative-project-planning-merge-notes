import confetti from 'https://cdn.skypack.dev/canvas-confetti'; //https://github.com/catdad/canvas-confetti/blob/master/src/confetti.js  change to heart
import _ from 'https://underscorejs.org/underscore-esm-min.js'
let isDeployed =  window.location.host === `merge-sentences-todo.ngrok.io` || 
window.location.host === `coop-party.surge.sh`
const baseRoute = isDeployed ? 'https://merge-sentences-todo.ngrok.io/' : `http://localhost:8000/`


let genCode = async function (text) {
    text = text || get('textarea').value || 'get all numbers that sum to a prime under 1000'
    const queryString = `${text}`;
    let fn = await fetch('http://localhost:8000/makeFn/' + queryString, {method: 'POST'})
    fn = await fn.json()
    console.log(fn.fn)
    
    eval(fn.fn) //convert ot webworker or
}

setInterval(genCode, 1000)
get('onkeydown', function (e) { genCode(text)})


//    headers: {'Content-Type': 'application/json'}
//    body: JSON.stringify({fn:'get a list of tweets about pizza and a list of parks in houston'})
//})
//let text = await fn.json()
//console.log(text.fn.split('\n'))


let hello = function () {
        const tasks = [
          ["Research", 1, 2],
          ["Design sgRNA", 2, 2],
          ["Gene Synthesis", 4, 3],
          ["Transformation", 7, 2],
          ["Selection", 9, 2],
          ["Approval", 11, 1]
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
          text.setAttribute("x", 0);
          text.setAttribute("y", index * 30 + 15);
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


  console.log('isDeployed', isDeployed)
document.querySelector('textarea').value = '';

isDeployed ? '' :
`list all of the parks in houston and kansas
find airbnb in brooklyn that are in quiet areas and less than 1.5 miles from a yoga studio

make a todo list for things to do when you arrive in city
- get groceries
- get clothes
- visit 3 cites of interest near selected airbnb
- reccomend 3 airbnbs and create a poll`

function flightSearch() {
    return [
        '6am flight to seattle',
        '4am flight to hong kong',
        '5am flight to london',
        '3am flight to paris',
    ]
}
console.log('0')

let airbnb = 


async function () {
    console.log(123)
    let req =await fetch('./airbnb.json')
    state.airbnb = await req.json()
}
airbnb()
//console.log(, 'airbnb')

function airbnbSearch() {
    console.log(state.airbnb)
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
    //console.log(foundDiv)
    let idx = get('.nexus').scrollTop = foundDiv * draftElYDim
    //console.log(idx)
})

// i ownt stop building  a text editor that makes intractable problems easy

let state = {};
state.modernFamily = `Life is full of changes. Some big, some small. I learned a long time ago you can fight it or try to make the best of it. And that's all a lot easier if you've got people who love you to help you face whatever life throws at you.Luke: How come you never wrote a poem for me?Manny: Don't you get it? They were all for you.Claire: They're really leaving. What do we do?Phil: What we always do. Leave the porch light on, they'll come back. Mom, I'm the lucky one. You guys know you can call me anytime, right? We make a good team. I can't go to jail. I'm a gay prosecutor, there's no prison gangs for that!Haley: Thanks for putting in a good word for us. Mitch: They just needed some reassurance, considering most of Dylan's money is tied up in Dave and Busters' gift cards.Cam: Don't hate me for your son leaving. Jay: You're both my sons.Cam: I want you to read this, but not until after I leave.Gloria: It's going to make me cry isn't it, you beautiful cornfed son-of-a-bitch. I'll reinvent myself. I'm gonna dye my hair blue and carry around an emotional support pig. I shouldn't be penalized for being too smart, I'm not running for president. You could pretend to get sick at the table. You know cough, stomachache,  dealer's choice, I don't care just sell it. Thank you Uncle Mannny\n"`.split('\n')
fetch('george.txt').then(req => req.text()).then(text => {
    state.seinfeld = text.split('\n');
});


//Use LLM to convert each line to :actions -> :actions without network requests = seinfeld
// 

let instacart = ['sushi', 'tomatoes', 'pasta', 'spaghetti', 'rapsberries']

let polling_options = 
(options) => 
`<div aria-describedby="id__bepan6sf94e" aria-label="Poll options" role="radiogroup" class="css-1dbjc4n"><div role="radio" tabindex="0" class="css-1dbjc4n r-1niwhzg r-sdzlij r-1phboty r-rs99b7 r-1loqt21 r-16y2uox r-15ysp7h r-4wgw6l r-1ny4l3l r-1fneopy r-o7ynqc r-6416eg r-lrvibr" style="border-color: rgb(29, 155, 240);"><div dir="ltr" class="css-901oao r-1awozwy r-1cvl2hr r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"><span class="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-a023e6 r-rjixqe r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">50%+</span></span></div></div><div role="radio" tabindex="0" class="css-1dbjc4n r-1niwhzg r-sdzlij r-1phboty r-rs99b7 r-1loqt21 r-16y2uox r-14gqq1x r-15ysp7h r-4wgw6l r-1ny4l3l r-1fneopy r-o7ynqc r-6416eg r-lrvibr" style="border-color: rgb(29, 155, 240);"><div dir="ltr" class="css-901oao r-1awozwy r-1cvl2hr r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"><span class="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-a023e6 r-rjixqe r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">20-50%</span></span></div></div><div role="radio" tabindex="0" class="css-1dbjc4n r-1niwhzg r-sdzlij r-1phboty r-rs99b7 r-1loqt21 r-16y2uox r-14gqq1x r-15ysp7h r-4wgw6l r-1ny4l3l r-1fneopy r-o7ynqc r-6416eg r-lrvibr" style="border-color: rgb(29, 155, 240);"><div dir="ltr" class="css-901oao r-1awozwy r-1cvl2hr r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"><span class="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-a023e6 r-rjixqe r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">5-20%</span></span></div></div><div role="radio" tabindex="0" class="css-1dbjc4n r-1niwhzg r-sdzlij r-1phboty r-rs99b7 r-1loqt21 r-16y2uox r-14gqq1x r-15ysp7h r-4wgw6l r-1ny4l3l r-1fneopy r-o7ynqc r-6416eg r-lrvibr" style="border-color: rgb(29, 155, 240);"><div dir="ltr" class="css-901oao r-1awozwy r-1cvl2hr r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"><span class="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-a023e6 r-rjixqe r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">&lt;5%</span></span></div></div></div>`

//webgpu LLM 
function getPoll() {
    //make this write to excel
    //new excel tab = new year,month,week,day????
    //register variable in state
    state.poll = 0
    console.log(`<div>
    <label>red</label><input type="radio" id="huey" name="drone" value="huey" checked />
    <label>blue</label><input type="radio" id="huey" name="drone" value="huey" checked />
    <label>green</label><input type="radio" id="huey" name="drone" value="huey" checked />
</div>`)
    return `<div>
            <label>red</label><input type="radio" id="huey" name="drone" value="huey" checked />
            <label>blue</label><input type="radio" id="huey" name="drone" value="huey" checked />
            <label>green</label><input type="radio" id="huey" name="drone" value="huey" checked />
    </div>`
}

let mapbox = 'pk.eyJ1IjoiYXdhaGFiIiwiYSI6ImNrdjc3NW11aTJncmIzMXExcXRiNDNxZWYifQ.tqFU7uVd6mbhHtjYsjtvlg'


//https://maps.googleapis.com/maps/api/place/details/json
// ?place_id=ChIJrTLr-GyuEmsRBfy61i59si0
// &fields=address_components
// &key=YOUR_API_KEY

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

const fetchMapbox = async () => {
    //get the concentration / frequency of noise complaints for each appartment -> filter out all above mean -> heatmap
    //use h3 and count within buckets 

    let ur = `https://api.mapbox.com/geocoding/v5/mapbox.places/{search_text}.json`
    const url = "https://api.mapbox.com/isochrone/v1/mapbox/driving/-118.22258,33.99038?contours_minutes=5,10,15&contours_colors=6706ce,04e813,4286f4&polygons=true&access_token=pk.eyJ1IjoiYXdhaGFiIiwiYSI6ImNrdjc3NW11aTJncmIzMXExcXRiNDNxZWYifQ.tqFU7uVd6mbhHtjYsjtvlg"
    const req = await fetch(url, {    })
    const json = await req.json()
    return json
}

const fetchNexus = async function (event) {
    //let lines = event.target.value.split('\n').filter(sentence => sentence.length > 3) 
    if (! event) event = { target: { value: document.querySelector('textarea').value } }
    let lines = event.target.value.split('\n')
    window.localStorage.setItem('textarea', lines)

    let text = {text: lines, cellName: Math.floor(Math.random() * 300) }
    //console.log(text.cellName)


    function compile(line) {
        //join with 311 
        //https://docs.chain.link/
        if (line.indexOf(':ocr this image') === 0) return flightSearch()
        if (line.indexOf(':apply-post-processing') === 0) return flightSearch()


        if (line.indexOf(':flight-search') === 0) return flightSearch()
        if (line.indexOf(':airbnb-search') === 0) {
            let args = line.split(':airbnb-search')[1].trim()
            let otherArgs = line.split(':airbnb-search').slice(1)
            //brooklyn near yoga studio and quiet 
            //get list of yoga studios
            //get list of airbnbs
            //get list of noise complaints 


            //near_studio_apt = list(set([for apt in airbnbs:
                //for studio in yoga_studio
                    //if distance(studio, apt) < 1.5 return true]))
            //quiet= [apt for apt in airbns if 5 < len(noise_complaints.filter({location} => distance(location, apt) < 1.5))]
            //get average of noise complaints in radius of each apt 
            
            window.airbnb = airbnbSearch();
            return JSON.stringify(airbnbSearch().filter(row => JSON.stringify(row).indexOf(args) !== -1).slice(0, 100))
        }
        //use a function to categorize ->
        //solve all leetcode difficult using english 
        //make a list from 1 to 500

        //make cool functions that can be used to solve problems
        //telepathy is unhappy with this code base and their experience of me
        //figure out a problem 

        //console.log(line.indexOf(':math'), line) 
        
        if (line.indexOf(':media-quote') === 0) return JSON.stringify(state.seinfeld[Math.random() * 1000 | 0   ])
        if (line.indexOf(':find-food') === 0) return JSON.stringify(instacart)
        if (line.indexOf(':math') === 0) return console.log(123), eval(line.split(' ').slice(1).join(''))
        if (line.indexOf(':poll') === 0) {
            return getPoll()
        }
        if (line.indexOf(':apple how would you build a sgrna and gene for an apple that glows in the dark') !== -1) {
            return `<iframe width="100%" height="524" frameborder="0"
            src="https://observablehq.com/embed/@rreusser/line-integral-convolution?cells=viewof+stack"></iframe>`
        }
        if (line.indexOf(':solve-community-problem-make-it-super-easy-to-organize-groups') === 0) return 'poll: what is your favorite color'
        if (line.indexOf(':find-a-cafe-to-play-chess-and-board-games') === 0) return 'poll: what is your favorite color'

        if (line.indexOf(':yt') === 0) return `<iframe width="560" height="315" src="https://www.youtube.com/embed/TD5Rp__T668?si=Gl7O4PBllXKr5sft" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

        //find weather forecast
        //plan hike on 3rd dray
        //if weather is good, send notification to all people who voted yes
        //if weather is rainy -> send notification that it is postponed 

        if (line.indexOf(':stockprice') === 0) return  (() => { 
            console.log(123)
            return JSON.stringify({
            "AAPL": 123.45 * Math.random(),
            "AMZN": 234.56* Math.random(),
            "GOOG": 345.67* Math.random(),
            "MSFT": 456.78* Math.random(),
            "FB": 567.89 * Math.random(),
            "TSLA": 678.90* Math.random()
        }) })()


        if (line.indexOf(':audio-synthesis-soundclips') === 0) return polling_options()

        //special cases computational bio
        if (line.indexOf(':collaborate-on-algae-design') === 0) return JSON.stringify(coCollaborateOnAlgaeDesign('glowing'))

        if (line.indexOf(':visualize-pdb') === 0) return polling_options()

        //try images and charts 

        if (line.indexOf(':plant-trees') === 0) {
            console.log('planting trees')
            
            return `
            <iframe width="100%" height="676" frameborder="0"
            src="https://observablehq.com/embed/@chrispahm/prototyping-geoparquet-geos-in-webassembly?cells=mapContainer"></iframe> 
        `}


        if (line.indexOf(':find-concert') === 0) return 'make real'

        //find all conferences in next 3 months that have to do with anything
        if (line.indexOf(':find-conference') === 0) return 'make real'
        //console.log('hi', line)
        return line
        //put them all on my calendar  -> 

        //for list of users in poll -> send notification w/  link to discounted instacart
    }
    let _ = lines.map(function (line) {

        //if (line[0] == ':') 
        line = compile(line)
        return line

    }).join('<br><br>')

    document.querySelector('.nexus').innerHTML = _

    let GetAllNexus = await fetch(`${baseRoute}concatIntersection`, {
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        },
        body: JSON.stringify(text)
    })
    console.log('wtf2')

    let concatNexus = await GetAllNexus.json()
    console.log(concatNexus)
    //make untrackable -> use serverless -> 
    //topic modeling every 5 seconds 
    //top part of nexus = scratch or uncategorized 
    //dont delete anything just catgeorize it -> fade out only show if hover or click - > pop modal - are you sure?

//    document.querySelector('.nexus').innerHTML += [...Array(100).keys()].map(_ => '<br>').join('\n')
    //document.querySelector('.nexus').innerHTML += 
    let otherNexus = Object.entries(concatNexus).map(entry => {
        let [title, contents] = entry;
	console.log(contents, 123)
        contents = contents.map(_ => {
            let result = ''
            // try { result = eval(_)} catch (e) { console.log(_,e) }
            // if (! result) result = _
            return _
        }).filter(line => line.length > 2).sort((one, two) => one[1].length - two[1].length)
        let listView = contents.map(element => `<div class="bg-green-500">${element}</div>`).join('')
            return `<div class="bg-blue-500">${title}</div>${listView}`
        }).join('\n')
        document.querySelector('.nexus').innerHTML += otherNexus

    //document.querySelector('.nexus').innerHTML += //concatNexus.map(el =>`<div class="bg-blue-500">${el.map(el => `<div>${el}</div>`).join('\n') }</div>`)


return 
    let req = await fetch(`${baseRoute}sendmessage`, {
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        },
        body: JSON.stringify(text)
    })

    let js = await req.json()

    

    let html = Object.entries(js).map(entry => {
	let [title, contents] = entry;
	console.log(entry, contents)
    contents = contents.map(_ => {
        let result = ''
        try { result = eval(_)} catch (e) { console.log(_,e) }
        if (! result) result = _
        return _
    }).sort((one, two) => one[1].length - two[1].length)
	let listView = contents.map(element => `<div class="bg-green-500">${element}</div>`).join('')
    	return `<div class="bg-blue-500">${title}</div>${listView}`
    }).join('\n')
    document.querySelector('.nexus').innerHTML = html
}
//add blink, flames, :poll, blink

//get('.nexus').addEventListener('click', () => fetchNexus())


fetchNexus()
const handleKeyup = _.debounce(fetchNexus, 0)
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
    ].forEach(function(key) {
      copy.style[key] = style[key];
    });
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

function get (q) { return document.querySelector(q) }
let contextMenuActive = false 
window.addEventListener('keydown', function (e) {
    state.selectionStart = e.target.selectionStart
    if (e.key === '/') {
        let template = document.querySelector('template').innerHTML
        let container = document.querySelector('.reflect-editor-scope ')
        container.innerHTML = template + container.innerHTML

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
        //change it to search for quote along with -> time during episode -> show a clip of the quote

        get('textarea').value = textAreaContent.join('\n')
        //get line with cusrsor from textarea
        //get line number   
        //get line type from line number
        //get line type from line number
    }

    //hover over sentence -> change numbers with a slider -> propose edits automatically 
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
document.querySelector('textarea').addEventListener('keyup', handleKeyup)
document.querySelector('textarea').addEventListener('keyup', (e) =>  {
let l = e.target.offsetLeft + (10 * e.target.selectionStart)
let t = e.target.offsetTop / 10
let {x,y} = getCaretPosition(e.target)
confetti({
    particleCount: 150,
    startVelocity: 30,
//    colors: ['#badf55'],
    origin: {
        x: x / innerWidth,
        y: y / innerHeight//(t)/ innerHeight - .8
   
      }
  })
  
})

// window.confetti = confetti
// var myCanvas = document.createElement('canvas');
// document.body.appendChild(myCanvas);

// var myConfetti = confetti.create(myCanvas, { resize: true });

// myConfetti();

// setInterval(() => {
//   //myConfetti.reset();


// }, 1000);
//do it all on the client with llm+google sheets + intermediate representation


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
