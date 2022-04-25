from asyncio.windows_events import NULL
from random_word import RandomWords
from datetime import datetime


dailyWord = ""
previousTimeCheck = NULL


def word_of_the_day():
    r = RandomWords()
    while(True):
        word = r.get_random_word()
        word = str(word)
        if (len(word) == 5 and word.isalpha()):
            break
        

    return word


def get_daily_word():
    global previousTimeCheck
    global dailyWord
    if previousTimeCheck == NULL:
        now = datetime.now()
        previousTimeCheck = now.date()
        dailyWord = word_of_the_day()
    else:
        if previousTimeCheck < datetime.now().date():
            dailyWord = word_of_the_day()

    return dailyWord

