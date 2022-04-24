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

    
Register("peter1","123")
Register("peter2","Abc123")
Login("peter","123")
Login("peter2","Abc123")