from random_word import RandomWords


def word_of_the_day():
    r = RandomWords()
    while(True):
        word = r.get_random_word()
        print(word)
        if (len(word) == 5 and word.isalpha()):
            break
        

    return word


print(word_of_the_day())