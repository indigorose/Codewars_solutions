import re


def get_words(paragraph):
    words = re.findall(r'\b\w+\b', paragraph.lower())
    count = {word: words.count(word) for word in words}
    rev_count = {k: v for k, v in sorted(
        count.items(), key=lambda item: item[1], reverse=True)}
    keys = list(rev_count.keys())
    return keys[0:3]
