import math


def square_root(sq):
    s = math.sqrt(sq)
    ssq = (s + 1) ** 2
    if ssq > sq and (math.floor(ssq) == ssq):
        return int(ssq)
    else:
        return -1


# alternative solution - using ternary operators
# return (math.sqrt(sq) + 1) ** 2 if (math.sqrt(sq)).is_integer() else -1
