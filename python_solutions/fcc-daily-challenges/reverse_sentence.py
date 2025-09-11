import re


def reverse_sentence(sentence):
    sentence = re.sub(' +', " ", sentence)
    array = sentence.split(" ")

    return " ".join(array[::-1])


print(reverse_sentence("npm  install   apt    sudo"))
