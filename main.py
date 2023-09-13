from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline
import torch
# To use a different branch, change revision
# For example: revision="gptq-4bit-32g-actorder_True"

#get business ideas -> get most cool problems to work on that most people complain about.

__ = {}
def initAlgae():
    from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline
    import torch

    model_name_or_path = "TheBloke/CodeLlama-7B-Python-GPTQ"
    __['___'] = AutoModelForCausalLM.from_pretrained(model_name_or_path,
                                                torch_dtype=torch.float16,
                                                device_map="auto",
                                                revision="main")
    __['____'] = AutoTokenizer.from_pretrained(model_name_or_path, use_fast=True)
    
import re
def makeFunctionFromText(text):
    if text == '': return ''
    if '___' not in  __: initAlgae()
    prompt = "sum all numbers from 1 to 10,000"
    prompt_template=f'''[INST] Write a code in javascript to sum fibonacci from 1 to 100```:
    {prompt}
    [/INST]
    '''
    input_ids = __['____'](prompt_template, return_tensors='pt').input_ids.cuda()
    output = __['___'].generate(inputs=input_ids, temperature=0.7, max_new_tokens=512)
    return re.match(r'[SOL](.*)[/SOL]', __['____'].decode(output[0]))

def makeFnFromEnglish(english):
    fnText = makeFunctionFromText(english)
    print('fnText', fnText)
    return fnText
    return eval(fnText)
    
#print(makeFunctionFromText('get all the comments on my twitch page and list the ones that have popcorn in them')[0]['generated_text'])
#train it on all glsl
#convert glsl to wgsl
#check if it works for text-> wgsl
#try for svg+canvas diagrams
#try for jupyter demos
#try for 

from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse, FileResponse
from collections import defaultdict
import uvicorn
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer,util
model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')
import torch
import json
import os.path
import nltk
from nltk.tag import pos_tag
from nltk.tokenize import word_tokenize
nltk.download('punkt')
nltk.download('universal_tagset')
nltk.download('words')

from nltk.corpus import words
def is_real_word(word):
    word_list = words.words()
    return word.lower() in word_list

classifications = """Retraction
Explanation
Query
Suggestion
Ammendment
Expletive
Answer
Recitation
stament 
observation
Commentary
Conclusion
Mockery
Qualification 
Objection
Theory
Continuation
Evaluation
Clarification
""".split('\n')

import random

tag_map = {
  "CC": "Coordinating conjunction",
  "CD": "Cardinal number",
  "DT": "Determiner",
  "EX": "Existential there",
  "FW": "Foreign word",
  "IN": "Preposition or subordinating conjunction",
  "JJ": "Adjective",
  "JJR": "Adjective, comparative",
  "JJS": "Adjective, superlative",
  "LS": "List item marker",
  "MD": "Modal",
  "NN": "Noun, singular or mass",
  "NNS": "Noun, plural",
  "NNP": "Proper noun, singular",
  "NNPS": "Proper noun, plural",
  "PDT": "Predeterminer",
  "POS": "Possessive ending",
  "PRP": "Personal pronoun",
  "PRP$": "Possessive pronoun",
  "RB": "Adverb",
  "RBR": "Adverb, comparative",
  "RBS": "Adverb, superlative",
  "RP": "Particle",
  "SYM": "Symbol",
  "TO": "to",
  "UH": "Interjection",
  "VB": "Verb, base form",
  "VBD": "Verb, past tense",
  "VBG": "Verb, gerund or present participle",
  "VBN": "Verb, past participle",
  "VBP": "Verb, non-3rd person singular present",
  "VBZ": "Verb, 3rd person singular present",
  "WDT": "Wh-determiner",
  "WP": "Wh-pronoun",
  "WP$": "Possessive wh-pronoun",
  "WRB": "Wh-adverb",
    ".": 'unknown_variable',
    ",": '',
    ':': '',
    '``': '',
    "''": ''
}
def getEncodings(sentences):
    return model.encode(sentences, convert_to_tensor=True, device='cpu')

def computeSimilarity(s1, s2):
    if (s1 == s2): return False
    embedding_1= model.encode(s1, convert_to_tensor=True)
    embedding_2 = model.encode(s2, convert_to_tensor=True)
    sim = util.pytorch_cos_sim(embedding_1, embedding_2)
    return sim < .75
def getSimilarity(sentences):
    #print('getSimilarity', sentences)
    encodings = getEncodings(sentences)
    #print('corpus_embeddings', corpus_embeddings)
    #print(corpus_embeddings, sentences)
    clusters = util.community_detection(encodings, min_community_size=1, threshold=0.55)
    def process(item): return [sentences[i] for i in item]
    result = [process(item) for item in clusters ]
    # print(clusters)
    #print('result,result,result',result)
    return result

tags = {
     'Live-Query': ':live-query',
    'Blink-Tag': ':blink',
    'Poll': ':poll _', #easiest ui for fill in the blank
    'Flaming': ':flaming  _',
    'Media-Quote': ':media-quote _',
    'Sparkles': ':sparkles _',
    'Paste-Image': ':img',
}

def matchTags(string):
    return lambda s: f'<div class="{string}">{s}</div>'

tags = {
     ':live-query': matchTags('live-query'),
     ':blink': matchTags('blink'),
    ':poll _': matchTags('poll'),
    ':flaming  _': lambda s: f'<div class="flaming">{s}</div>',
    ':media-quote _': lambda s: f'<div class="media-quote">{s}</div>',
    ':sparkles _':lambda s: f'<div class="sparkles">{s}</div>',
    ':img':lambda s: f'<img src="{s}">',
}

#replace = list(a.values())

def replaceIfInTags(string):
    for tag in tags:
        if tag in string:
            string = string.replace(tag, matchTags(string))
    return string

def processMessages(content):
    
    content = [replaceIfInTags(item) for sublist in content for item in sublist]
    content = [getClassification(string) for string in content 
               if len([w for w in word_tokenize(string) if is_real_word(w)]) > 0]
    misc = [string for string in content
            if len([w for w in word_tokenize(string) if is_real_word(w)]) == 0
    ]
    result = getSimilarity(content)

    returnValue = {}
    for grouping in result:
        title = grouping[0].split(':')[1]
        if len(title) < 1: title = 'unknown'
        returnValue[title] = grouping
    return returnValue


def getClassification(string):
    p = int(random.random() * 5)
    nouns = findNouns(string)
    verb_most_acted_on = nouns #findNouns(string)[0] if len(nouns) > 0 else ''
    return f'{classifications[p]}:  {" ".join(verb_most_acted_on)}'

def processTag(tagged_sentence):
    return [(orig,tag_map[actual_tag]) for (orig,actual_tag) in tagged_sentence if actual_tag in tag_map]

def findNouns(string):
    return [noun for noun,tag in processTag(pos_tag(word_tokenize(string))) ]   

import random
person1 = 'i want the government to add a railroad between montreal and kansas'
person5 = 'i want the government to add a railroad between kansas and montreal'
person2 = 'i want to build a registry for synthetic plants'
messages = [person1, person2, person5]
nexusContent = []

for i in range(100):
    materials = ['bricks', 'clay', 'sod', 'glass']
    messages.append('i want to build an app that lets users design houses made from ' + materials[i % 2])


from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
        "http://merge-sentences-todo.ngrok.io/",

"https://merge-sentences-todo.ngrok.io/",
    "*",
    "pypypy.ngrok.io",
]
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

messages = []
cells = {}
count = 0
locks_mutexes = defaultdict(bool)

class MessageInput(BaseModel):
    text: list[str]
    cellName: int

@app.post("/sendmessage")
async def receive_message(message: MessageInput):
    text = message.text
    cellName = message.cellName
    cells[cellName] = [text for text in text if len(text) > 0]
    messages = [cell for cell in list(cells.values()) if len(cell) > 0]
    print(cells)
    if (len(messages) < 1): return JSONResponse(content=[])
    #result = processMessages(messages)
    print('processMessages', result)
    with open('database.txt', 'w') as db: json.dump(result, db)
    return JSONResponse(content=message)


@app.post('/concatIntersection')
async def concat_messages(message: MessageInput):
    cellName = message.cellName
    text = message.text
    cells[cellName] = [text for text in text if len(text) > 0]
    messages = [cell for cell in list(cells.values()) if len(cell) > 0]
    if (len(messages) < 1): return JSONResponse(content=[])
    #result = processMessages(messages)
    return content
    return JSONResponse(content=messages)


class RPCBlahBlah(BaseModel):
    text: str
@app.post("/rpc")
async def rpc(message: RPCBlahBlah):
    print(message.text)
    return {'demo': exec(message.text)}

@app.get("/nexus")
async def index():
    return JSONResponse(content={'456':123})

class FnText(BaseModel):
    fn: list[str]

import json 


#each sentence is a search for a progrma that exists in database
#if no program is close enough -> generate one
#allow user to edit program using UI+natural language
#make structured syntax rules like reflect academy to encourage good human->machine communication
#make more computer functions to assist with human-computer text-based interaction
#end result = human use english+chinese to talk to computer and then computer talks tto other computer that is talking to person
#need 7 billion computer in between people talking to each other because maybe its possble to do data analysis on the text of other human beings
#for example if 50% of population picks ballot Z for poll
#choose that direction for next paragraph
#else choose this direction
#keep choosing directions till 100% of people are happy 
#if poll.get('ballotZ') > 50%: regenerate pargraph z until 100% of people agree

# deps store deps that are parsed from program definition
def getProgram(_, sentence):
    encodings = getEncodings(sentence)
    program_generator_cache = json.load(open('encodings.json', 'w'))
    if encodings in program_generator_cache: return program_generator_cache[encodings]

    json.dump(program_generator_cache, open('encodings.json', 'w'))
    return {'fn': program_generator_cache[encodings]}

def generateWinningTeam():
    from ipynb.fs.defs.geospatial import getCounter
    return getCounter('celebi')

def findAirbnb(previous, sentence):
    from ipynb.fs.defs.geospatial import getAllAirbnbInCityThatAreNotNoisy
    GTorLT = 'not noisy' in sentence
    #use sentence to genreate function that call on the data of other functions to map filter
    #convert clauses to functions
    #look for clause 
    #write sentence in 5 ways
    #find airbnbs in city that are not noisy
    #find airbnbs in city that are noisy
    #find airbnbs in city that are noisy
    #find airbnbs in city that are noisy
    data = getAllAirbnbInCityThatAreNotNoisy(GTorLT) #todo make reactive live query
    return data


def poll(_, second):
    return 'lots of cool polling data'
    return open('./poll.json', 'r').read()

hasRendered = False
hasRenderedContent = False
def arxiv (_, sentence):
    global hasRendered, hasRenderedContent  # Declare as global to modify
    print('ARXIV')
    # from ipynb.fs.defs.Untitled import getAllArxiv
    # return getAllArxiv()
    import pdfplumber
    # Open the PDF file
    import glob
    fileList = glob.glob('./*.pdf')[:3]
    print(fileList)
    content = []
    if hasRendered: return hasRenderedContent
    for f in fileList:
        print(f)
        with pdfplumber.open(f) as pdf:
            # Loop through each page
            for i, page in enumerate(pdf.pages):
            # Extract text from the page
                text = page.extract_text()
                content.append(text)
            #print(f'Content from page {i + 1}:\n{text}')
    print(content)
    hasRendered = True
    hasRenderedContent = content
    return content

def trees_map(_, sentence):
    from ipynb.fs.defs.geospatial import trees_map
    return trees_map()[:100000]

def trees_histogram(_, sentence):
    from ipynb.fs.defs.geospatial import trees_histogram
    print('trees histogram')
    return trees_histogram()

def twitch_comments(_, sentence):
    return json.load(open('./data/twitch.json', 'r'))

def getTopics(sentences, sentence):
    counts = defaultdict(int)
    for sentence in sentences:
        for word in sentence.split(' '):
            counts[word] += 1
    topics = []
    for k in counts:
        if counts[k] > 2:
            topics.append(k)
    return topics

jupyter_functions = {'airbnb': findAirbnb, 
                     'poll': poll,
                     'plant-trees': lambda _,__: 'put map here',
                     'arxiv': arxiv,
                     'trees_histogram' : trees_histogram,
                     'twitch_comments' : twitch_comments,
                     'getTopics': getTopics, 
                     'trees_map': trees_map
}

#on client if colon -> substitute on client 

def substitute(name):
    #search, encodings + similarity + who knows
    #find most important word in the sentence and use that for component 
    #sort words by relevance / importance 
    print(name)
    for k in jupyter_functions:
        print('k---name',   k,name)
        if k in name:
            return jupyter_functions[k]
            return {'data':jupyter_functions[k](name),
                    'name': k,
            }
    return name
    # for k, v in jupyter_functions:
    #     if computeSimilarity(k, encode(name)) > .75:
    #         return v
    # if 'airbnb' in name:
    #     return findAirbnb(l)
    # if 'twitch' in name:
    #     return open('./RPC/fetch-twitch.js', 'r').read()

@app.post("/makeFn")
async def makeFn(FnText:FnText):
    print('FnText', FnText)
    functions = [substitute(fn) for fn in FnText.fn]
    val = False
    args = []
    for i, fn in enumerate(functions): 
        if type(fn) == type(lambda _:_):
            print(fn.__name__)
            val = fn(val, FnText.fn[i] )
        else:
            val = fn 
            #val = makeFunctionFromText(val)
            #print(val)
            #val = fn return the sentence ? (comment)
        args.append(val)
    return {'fn': args}
    # print(Fn)
    # fn = makeFunctionFromText(Fn)[0]['generated_text']
    # print('something else')
    # return {'fn': fn}
    sentences = FnText.fn.split('\n')
    print('senteces', sentences)
    fn = [makeFnFromEnglish(sentence) for sentence in sentences if len(sentence) > 5]
    result = False
    print('isFN', fn)
    # for f in fn:
    #     result = fn(result) #TODO - instead of one parameter each from previous function, make it work for anything
    first = fn[0]
    print(first)
    second = first['generated_text']
    print(second)
    return {'fn': eval(fn[0]['generated_text'])}
    #result = [eval(fn[i]['generated_text']) for i in range(len(fn)) ]
    #return {'fn': result}
    #return JSONResponse(content=)

# @app.get("/makeFn/<document>")
# async def makeFn(document):
#     #result = processMessages(messages)
#     fn = makeFunctionFromText('get all the comments on my twitch page and list the ones that have popcorn in them')[0]['generated_text']
#     print('something else')
#     return fn

@app.get("/admin")
async def admin():
    cells.clear()
    print('CLERAING ! !!')
    return FileResponse('admin.html')

@app.get("/")
async def metrics():
    return FileResponse('index.html')

@app.get("client.js")
async def js():
    return FileResponse('client.js', media_type="application/javascript")

@app.get("/data/george.txt")
async def george():
    return FileResponse('/data/george.txt', media_type="text/plain")



#uvicorn.run(app,host="0.0.0.0",port="8080")
#for os.listdir('./')
#app.mount("/static", StaticFiles(directory="./"), name="static")
# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8000)
#when client refreshes -> assign a cell from server or serverless 
#onkeyPress -> messages = tagged by cell
#onkKeyPress -> refresh nexus ->
#find a way to always see input in nexus but categorized in correct 'topic'
#when topic updates -> animate in with css ->
#300 edits to document per second
# count = 0
# 
# locks_mutexes = defaultdict(bool)
# def getCell():
#     count += 1
#     return count 
# @app.route('/nexus')
# def index():
#     result = processMessages(messages)
#     print(result)
#     return jsonify({'shit': 1})
#     #return jsonify({'nexus': result, 'cell': getCell})
# @app.route('/admin')
# def admin():
#     cells.clear()
#     return Response(get_file('admin.html'), mimetype="text/html")
# def root_dir(): return os.path.abspath(os.path.dirname(__file__))
# def get_file(filename): return open(os.path.join(root_dir(), filename)).read()
# @app.route('/', methods=['GET'])
# def metrics(): return Response(get_file('index.html'), mimetype="text/html")
# @app.route('/client.js', methods=['GET'])
# def js(): return Response(get_file('client.js'), mimetype="text/javascript")
# @app.route('/george.txt', methods=['GET'])
# def george(): return Response(get_file('george.txt'), mimetype="text/javascript")
# if __name__ == "__main__":
#     app.run(debug=True, port=8001, use_debugger=True)
#if cosine similairy of two sentences is same -> show text blurb with both options
    #use google sheeets
# for i,m in enumerate(messages):
#     messages[i] = m
# for message in request.json['text']: 
#     for m2 in messages:
#     messages.append(message)
# pdb.set_trace()
#features
#database for persistence -> 
#   [] server-side 
#   [] client side
#make a another demo
#add affordances to make it more fun to type and more obvious what everyone in the world wants to say
#lines between your statements and the nexus display 
#add tree or dropdown for nexus display -> add inline comments
#we want more demos 
#we want serverless functions using google sheets - 
#automate 300 million people communicating sychronously - once a day for 5 minutes
#convert this to a serverless function that is untrackable
#[done] make this fun to type in -> add particles when you type
#{} given two messages of similar content -> convert to intermediate representation -> tag each note by statements that matter -> transportation, canada, kansas
#cluster by tags -> at the top - use tabs to show clusters by different column values (government, stream, ideas-for-implementation, actions, fun)
#subject of sentence = non-person verb acted upon
#each classification has key structures that 

#theory -> i think
#mockery = save scumming ? 

#use sentiment to categorize 
#use feature vector to categorize
#use tags to categorize 
#see which one is more accurate
#just one day of optimal work environment and you'll get something more than what you wanted 
#https://developer.apple.com/documentation/mapkitjs
#https://location.foursquare.com/developer/reference/local-search-map
#https://wiki.openstreetmap.org/wiki/Overpass_API
#https://developer.here.com/documentation

#audience writes the story

#make twitch plays pokemon but for automating reality 
#get like 1 million non paying MAUs
#just get like 1000 customers
#cooperation.party
#working name get more official .com name 

#get a robot -> make it so the chat can issue requests to the robot 
# one good day

#finish demo by 6am 
#just make it so when you type _ asdlkfjasldfk _ it shows up in the nexus
#figure out how copilto works -> make it work with natural language
#make it so copilot has access to fetch requests that are cached collaboratively
#so that users can send 500k network requests and parse all combinations -> only 6 network requests possible simulatenously -> network request will always take 100ms at least -> slowest part 


#flight search is kinda like that


#ITA made cool flight search -> find me the best flight to find the antenna to download the database 
#list all contractors in the area -> 
#list all grocery stores near me -> check their api if they have my favorite sweet potato brand that is purple
#if they do -> buy all of them -> send it to my neighbor

#define rules that everyone agrees on -> 
#only buy flights that go eastward 
    #to get to austrailia, go all the way to moscow then shanghai then antarctica then sydney


#write down a note -> approve it with others 



#also -> commandline program -> vudu find all flights to kansas on 12/25
#predictive caching for network requests -> 
#load app -> while chatting nonsense 
#start every meeting with 5 minutes of pleasantries 
#hello id like to start this meeting by /quote ron swanson 



#one good day
#book z flights for _ people to _ locations based on _'s answer to poll 
#where would you like to go cairo, honk kong, prague, paris, montreal, nyc, chicago, seattle, 

#make right side instantly update -> use sheets for collaboration
#just poll sheets every 1 second 
#remove serverside AI stuff -> move to client 
# maek 

#travel planning -fetch data -> display it 
#intersection of thoughts between 100s of people 
#math application 

# plan a month of flights collaboratively
# plan a month of groceries collaboratively
# plan a month of projects collaboratively

#10 cool things

#memes + natural language -> create databawse for people who dont want excel
#something faster than excel
#get a list of all flights from houston from 2pm to 4pm

#multiply a triangle matrix by an upper triangle matrix and then get the cosine similarity of a persepctive matrix and a view matrix and then the cosine similarity of two gene expression matrices and then show me the differences
#execute math fast in browser -> mathLLMwizardLLM
#llm + autocomplete + copilot + interactive charts 

#suggestion box = poll that allows write-in ballots 
#poll -> either pick 3 options or write in ballot 
#poll -> favorite food pizza,sushi, or tacos, or write in ballot
#add good autocomplete using llm or just 

#fly to the city 3 days before every football game
#every time theres a footbal game
#if they win, buy a pizza and send to the winner of suggesstion box

#natural language repl -> jupyter 
#do a flight search 
# get best flight to kansas on 12/25
# after that get best flight to 

# graph flight prices over time -> find a jupyter



#let before now go 5ever