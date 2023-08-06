def bingo(array):
    y = [2, 9, 14, 7, 15]
    if set(y).issubset(set(array)):
        return "WIN"
    else:
        return "LOSE"


bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
