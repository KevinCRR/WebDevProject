import pymongo 
import datetime

def addUser(username,password):
    # mongoDB connection stuff to overall cluster
    cluster = pymongo.MongoClient("mongodb+srv://WebDev2022Default:ThisIsThePassword@wordlecluster.juzoh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    # select the WordleCloneDB database from the cluster
    db = cluster["WordleCloneDB"]
    # select the users table/colection
    usersCollection = db["users"]
    # score format
    newScore = {
                "username":username,
                "password":password
                }
    # insert score to database
    usersCollection.insert_one(newScore)

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
                "date":datetime.datetime.utcnow() #date format should be in UTC time since unix epoch
                }

    scoresCollection.insert_one(newScore)

cluster = pymongo.MongoClient("mongodb+srv://WebDev2022Default:ThisIsThePassword@wordlecluster.juzoh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = cluster["WordleCloneDB"]


# examples
# addScore("testUser1",123)
# addUser("testUser2", "password")
