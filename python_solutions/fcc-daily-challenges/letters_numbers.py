import re


def separate_letters_and_numbers(s):
    split = re.findall(r'\d+|[A-Za-z]+', s)

    return "-".join(split)
