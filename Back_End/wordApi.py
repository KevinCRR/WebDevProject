from flask import Flask
from flask_restful import Resource, Api, reqparse
import pandas as pd
import ast
from wordGenerator import get_daily_word

app = Flask(__name__)
api = Api(app)

class Word(Resource):

    def get(self):
        """
        get will fetch the days word

        return: the daily word
        """
        word = get_daily_word()
        return word, 200
    

api.add_resource(Word, '/word')


if __name__ == '__main__':
    app.run()