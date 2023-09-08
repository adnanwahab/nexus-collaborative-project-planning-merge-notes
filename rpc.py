import json
import random
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
import random

def clusterTwitchComments():
    with open('twitch_comments.json') as f:
        data = json.load(f)

def getSimilarity(sentences):
    #print('getSimilarity', sentences)
    corpus_embeddings = model.encode(sentences, convert_to_tensor=True, device='cpu')
    #print('corpus_embeddings', corpus_embeddings)
    #print(corpus_embeddings, sentences)
    clusters = util.community_detection(corpus_embeddings, min_community_size=1, threshold=0.55)
    def process(item): return [sentences[i] for i in item]
    result = [process(item) for item in clusters ]
    # print(clusters)
    #print('result,result,result',result)
    return result

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


def findNouns(string):
    return [noun for noun,tag in processTag(pos_tag(word_tokenize(string))) ]





def replaceIfInTags(string):
    for tag in tags:
        if tag in string:
            string = string.replace(tag, matchTags(string))
    return string






def crossReferenceAirbnb(airbnb, noise_complaints):
    return 10