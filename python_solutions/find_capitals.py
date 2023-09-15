def capitals(word):
    # x = []
    # for idx, value in enumerate(word):
    #     if value.isupper():
    #         x.append(idx)
    return [idx for idx, value in enumerate(word) if value.isupper()]

    # return [word.index(i) for i in word if i.isupper()]


print(capitals("gxCEvudJDFjRIfpHquiWoPnnMZrUhIb"))
