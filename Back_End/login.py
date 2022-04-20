import pymongo 
import datetime

def register(username, password):
    # mongoDB connection stuff to overall cluster
    cluster = pymongo.MongoClient("mongodb+srv://WebDev2022Default:ThisIsThePassword@wordlecluster.juzoh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    # select the WordleCloneDB database from the cluster
    db = cluster["WordleCloneDB"]
    # select the users table/colection
    usersCollection = db["users"]
    userExists = usersCollection.find_one({"username":username})
    if(userExists == ""):
        # user format
        newScore = {
        "username":username,
        "password":password
        }
        # insert score to database
        usersCollection.insert_one(newScore) 
        return True
    else:
        print("error User Exists")
        return False
        

    