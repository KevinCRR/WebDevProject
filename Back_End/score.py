import pymongo 
import datetime
from flask import Flask
import json
from bson.json_util import dumps

app = Flask(__name__)

@app.route('/addScore/<username>/<score>')
def addScore(username,score):
    # mongoDB connection stuff to overall cluster
    cluster = pymongo.MongoClient("mongodb+srv://WebDev2022Default:ThisIsThePassword@wordlecluster.juzoh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    # select the WordleCloneDB database from the cluster
    db = cluster["WordleCloneDB"]
    # select the scores table/colection
    scoresCollection = db["scores"]

    newScore = {
                "username":username,
                "score":score,
                "date":datetime.date.today().strftime("%d-%m-%Y") 
                }

    scoresCollection.insert_one(newScore)

@app.route('/scoreUser/<username>')
def fetchScoreUser(username):
    # mongoDB connection stuff to overall cluster
    cluster = pymongo.MongoClient("mongodb+srv://WebDev2022Default:ThisIsThePassword@wordlecluster.juzoh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    # select the WordleCloneDB database from the cluster
    db = cluster["WordleCloneDB"]
    # select the users table/colection
    usersCollection = db["users"]
    scoresCollection = db["scores"]
    userExists = usersCollection.find_one({"username":username})
    if(userExists):
        return dumps(list(scoresCollection.find({"username":username})))
    else:
        print('user does not exist')
        return ""

@app.route('/scoreDate/<date>')
def fetchScoreDate(date):
    # mongoDB connection stuff to overall cluster
    cluster = pymongo.MongoClient("mongodb+srv://WebDev2022Default:ThisIsThePassword@wordlecluster.juzoh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    # select the WordleCloneDB database from the cluster
    db = cluster["WordleCloneDB"]
    scoresCollection = db["scores"]

    return dumps(list(scoresCollection.find({"date":date})))

@app.route('/score')
def fetchScore():
    # mongoDB connection stuff to overall cluster
    cluster = pymongo.MongoClient("mongodb+srv://WebDev2022Default:ThisIsThePassword@wordlecluster.juzoh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    # select the WordleCloneDB database from the cluster
    db = cluster["WordleCloneDB"]
    scoresCollection = db["scores"]

    return dumps(list(scoresCollection.find()))
    
if __name__ == '__main__':
    app.run()
    
print(fetchScoreUser("peter")[1])
print(fetchScoreDate("26/04/2022")[0])
print(fetchScore())