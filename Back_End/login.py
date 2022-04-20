import pymongo 
import bcrypt

def Register(username, password):
    # mongoDB connection stuff to overall cluster
    cluster = pymongo.MongoClient("mongodb+srv://WebDev2022Default:ThisIsThePassword@wordlecluster.juzoh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    # select the WordleCloneDB database from the cluster
    db = cluster["WordleCloneDB"]
    # select the users table/colection
    usersCollection = db["users"]
    userExists = usersCollection.find_one({"username":username})
    if(userExists is None):
        # user format
        newUser = {
        "username":username,
        "password":bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        }
        # insert user into database
        usersCollection.insert_one(newUser) 
        return True
    else:
        print("error User Exists")
        return False
        
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
            return username
        else:
            print("wrong username/password")
            return ""
    else:
        print('user does not exist')
        return ""

    
Register("peter","123")
Login("peter","123")