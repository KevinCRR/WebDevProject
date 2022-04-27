from flask import Flask
from flask_cors import CORS
from wordGenerator import get_daily_word
import datetime
import json
import pymongo
from bson.json_util import dumps
import bcrypt

app = Flask(__name__)
CORS(app)

@app.route("/test")
def hello():
  return "Hello World!"
  
@app.route("/test2")
def hello2():
  return "Hello test2!"

@app.route("/dailyWord")
def dailyword():
  return get_daily_word()

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

    return dumps(scoresCollection.find({"date":date}))

@app.route('/score')
def fetchScore():
    # mongoDB connection stuff to overall cluster
    cluster = pymongo.MongoClient("mongodb+srv://WebDev2022Default:ThisIsThePassword@wordlecluster.juzoh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    # select the WordleCloneDB database from the cluster
    db = cluster["WordleCloneDB"]
    scoresCollection = db["scores"]

    return dumps(scoresCollection.find())

@app.route('/register/<username>/<password>')
def Register(username, password):
    # mongoDB connection stuff to overall cluster
    cluster = pymongo.MongoClient("mongodb+srv://WebDev2022Default:ThisIsThePassword@wordlecluster.juzoh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    # select the WordleCloneDB database from the cluster
    db = cluster["WordleCloneDB"]
    # select the users table/colection
    usersCollection = db["users"]
    userExists = usersCollection.find_one({"username":username})
    #user must not already exist and password must be between 4-21 characters and contain an upper case lower case and a number
    if(userExists is None and len(password) >= 5 and len(password) <= 20 and any(x.isupper() for x in password) and any(x.islower() for x in password) and any(x.isdigit() for x in password)):
        # user format
        newUser = {
        "username":username,
        "password":bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        }
        # insert user into database
        usersCollection.insert_one(newUser) 
        return True
    if(userExists):
        print("error User Exists")
        return False
    else:
        print("password does not meet requirments")
        return False
    
@app.route('/login/<username>/<password>')    
def Login(username, password):
    # mongoDB connection stuff to overall cluster
    cluster = pymongo.MongoClient("mongodb+srv://WebDev2022Default:ThisIsThePassword@wordlecluster.juzoh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    # select the WordleCloneDB database from the cluster
    db = cluster["WordleCloneDB"]
    # select the users table/colection
    usersCollection = db["users"]
    userExists = usersCollection.find_one({"username":username})
    if(userExists):
        if(bcrypt.hashpw(password.encode('utf-8'), userExists['password']) == userExists['password']):
            print("logged in")
            return fetchScoreUser(username)
        else:
            print("wrong username/password")
            return ""
    else:
        print('user does not exist')
        return ""
if __name__ == "__main__":
  app.run()