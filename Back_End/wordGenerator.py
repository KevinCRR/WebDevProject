from asyncio.windows_events import NULL
from random_word import RandomWords
from datetime import datetime


dailyWord = ""
previousTimeCheck = NULL


def word_of_the_day():
    """
    word_of_the_day produces a random 5 letter word

    return: The 5 letter word that was generated
    """

    r = RandomWords()
    while(True):
        word = r.get_random_word()
        word = str(word)
        if (len(word) == 5 and word.isalpha()):
            break
        

    return word


def get_daily_word():
    """
    get_daily_word will get a new word if it's a new day or get the same word that was previously generated

    return: the word of the day
    """
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

