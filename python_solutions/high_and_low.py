# Find the minimum and maximum values in a list/string.

def high_and_low(numbers):
    # n = list(numbers.split())
    # print(n)
    x = [int(i) for i in list(numbers.split())]
    return f'{max(x)}, {min(x)}'


# print(high_and_low("8 3 -5 42 -1 0 0 -9 4 7 4 -4")
