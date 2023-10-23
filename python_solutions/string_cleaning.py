import re


def string_clean(s):
    return re.sub(r'[0-9]', "", s)
