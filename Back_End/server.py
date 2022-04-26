from flask import Flask
from flask_cors import CORS
from wordGenerator import get_daily_word

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

if __name__ == "__main__":
  app.run()
