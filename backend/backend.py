from flask import Flask, abort
from flask import request
import json
from flask_cors import CORS, cross_origin
import peewee
from peewee import *

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


with open("perepiski.json", "r") as f:
    perepiski = json.load(f)


subscriptions={}

@app.route("/api")
@cross_origin()
def hello_world():
    global perepiski
    return perepiski

@app.route("/api/thread/<int:thread_id>", methods = ['GET'])
@cross_origin()
def get_thread(thread_id):
    global perepiski
    for thread in perepiski["content"]:
        if thread["thread_id"] == thread_id:
            return thread
    abort(404)

@app.route("/api/threads", methods = ['POST', 'GET'])
def get_threads():
    global perepiski
    if request.method == 'POST':
        perepiski["content"].append(request.values.get('thread'))
        with open("perepiski.json", "w") as f:
            f.write(json.dumps(perepiski))
        return {"OK": 200}
    elif request.method == 'GET':
        return perepiski

@app.route("/api/thread/comment", methods = ['POST'])
@cross_origin()
def comment_thread():
    global perepiski

    if request.method == 'POST':
        thread_id = request.args.get('thread_id', default = 1, type = int)
        for thread in perepiski["content"]:
            if thread["thread_id"] == thread_id:
                thread["thread_content"].append(request.values.get('comment'))
        with open("perepiski.json", "w") as f:
            f.write(json.dumps(perepiski))
        return {"OK": 200}



@app.route("/api/thread/subscribe", methods = ['POST'])
@cross_origin()
def subscribe_to_thread():
    if request.method == 'POST':
        thread_id = request.args.get('thread_id', default = 1, type = int)
        email = request.get_json(force=True)
        subs = subscriptions.get(thread_id, [])
        subs.append(email)
        subscriptions[thread_id] = subs
        return {"OK": 200}



