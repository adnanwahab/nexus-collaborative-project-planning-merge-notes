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
#super simple premise -> English notebook for data analysis 
#make work super fast in next 3-4 hours

#dont rerender if no change
#add re-run button for actions


#meetup in one line of "english sentence"
#make a webpage about knitting and chess where people can collaborate on knitting and chess
#also make a mailing list and a appointment reminder and a youtube video
#also place an ad for it 
#also find the best place for it - gmaps
#also find the best time for it - calendly
#make a discussion forum where poeple can post funny memes and gifs and videos and pictures and text
#make a discussion board where we can post polls and suggestions and comments and questions and answers

#weekly buy my families favorite groceries 
#instacart signup if you dont have one 
#ask instacart to make a public api

#not just automation -> also storage + collaboration -> export and integrate with other services
#book me 30 flights in 30 days for examples -> actually do this 
#order me 30 groceries in 30 days for 30 neighbors -> actually do this

# every line gets a "rerun action button"
#how to show side effects, state of world vs values vs references
#how to develop a consistent mental model about data, how the world works and how computers work - using english and other languages
#how to do automatic i18n

#special case for gant chart -> project planning 
# -> everyone assigns each other work, estimates and deadlines
# -> everyone can tick off their own todo list -> updates group project plan
# -> when everyone finishes their todo list -> schedule a meeting to celebrate
#1 line of english to make trello
#1 line of english to make discord
#1 line of english to make wix, squarespace, meetup, etc
#1 line home owners association
#1 line of english to make remote year 
#webgpu based LLM should be super cool -> 1ms response time
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
def computeSimilarity(s1, s2):
    if (s1 == s2): return False
    embedding_1= model.encode(s1, convert_to_tensor=True)
    embedding_2 = model.encode(s2, convert_to_tensor=True)
    sim = util.pytorch_cos_sim(embedding_1, embedding_2)
    return sim < .75
def getSimilarity(sentences):
    print('getSimilarity', sentences)
    if (len(sentences) < 2): return []
    corpus_embeddings = model.encode(sentences, convert_to_tensor=True, device='cpu')
    #print('corpus_embeddings', corpus_embeddings)
    #print(corpus_embeddings, sentences)
    clusters = util.community_detection(corpus_embeddings, min_community_size=1, threshold=0.55)
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
    "*"
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
    result = processMessages(messages)
    print('processMessages', result)
    with open('database.txt', 'w') as db: json.dump(result, db)
    return JSONResponse(content=result)

#make wallstreet bets happy
# client write directly to sheets
# have nlp model read from sheets and write back to it every 5 seconds 
#soemeday -> think -> make appointment at dentist -> their api says ok thursday

@app.post('/concatIntersection')
async def concat_messages(message: MessageInput):
    cellName = message.cellName
    text = message.text
    cells[cellName] = [text for text in text if len(text) > 0]
    messages = [cell for cell in list(cells.values()) if len(cell) > 0]
    print('messages', messages)
    if (len(messages) < 1): return JSONResponse(content=[])
    result = processMessages(messages)
    print(result)
    return JSONResponse(content=result)

@app.get("/nexus")
async def index():
    result = processMessages(messages)
    return JSONResponse(content={'shit': 1})

@app.get("/admin")
async def admin():
    cells.clear()
    print('CLERAING ! !!')
    return FileResponse('admin.html')

@app.get("/")
async def metrics():
    return FileResponse('index.html')

@app.get("/client.js")
async def js():
    return FileResponse('client.js', media_type="application/javascript")

@app.get("/george.txt")
async def george():
    return FileResponse('george.txt', media_type="text/plain")

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
