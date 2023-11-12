# Replace alphabet characters with their number placement value. Ignore special characters and numbers.

import re


def alphabet_position(text):
    t = re.sub(r'[^a-zA-Z]', "", text)
    a_dict = {char: index + 1 for index,
              char in enumerate('abcdefghijklmnopqrstuvwxyz')}
    return " ".join([str(a_dict[i]) for i in t.lower()])
