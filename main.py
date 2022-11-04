import math


def square_root(sq):
    s = math.sqrt(sq)
    ssq = (s+1) ** 2
    if ssq > sq and (math.floor(ssq) == ssq):
        return int(ssq)
    else:
        return -1

# alternative solution - using
# return (math.sqrt(sq) + 1) ** 2 if (math.sqrt(sq)).is_integer() else -1


def number(bus_stops):
    pass

# loop through nested array and add to bus variable. array[i] adds to the bus, array[j] subtracts


print(number([[10, 0], [3, 5], [5, 8]]))
print(square_root(121))
