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


def number(bus_stops):
    pass


# loop through nested array and add to bus variable. array[i] adds to the bus, array[j] subtracts

#
# print(number([[10, 0], [3, 5], [5, 8]]))
# print(square_root(121))


def pipe_fix(nums):
    # x = min(nums)
    # y = max(nums)
    # z = []
    # for i in range(min(nums), max(nums)+1):
    #     z.append(i)
    return [i for i in range(min(nums), max(nums) + 1)]


# print(pipe_fix([1, 2, 4, 7, 8]))

def xor(a, b):
    # if (a is True and b is False) or (a is False and b is True):
    #     return True
    # else:
    #     return False
    return a != b


#  != is the equivalent of is not


# print(xor(False, True))


def high_and_low(numbers):
    # n = list(numbers.split())
    # print(n)
    x = [int(i) for i in list(numbers.split())]
    return f'{max(x)}, {min(x)}'


# print(high_and_low("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))


def stray(arr):
    least_common = min(set(arr), key=arr.count)
    return least_common


# print(stray([1, 1, 1, 1, 1, 1, 2]))


def to_jaden_case(string):
    # result = ""
    # x = string.split()
    # for i in x:
    #     if len(result) > 0:
    #         result = result + " " + i.strip().capitalize()
    #     else:
    #         result = i.capitalize()
    # if not result:
    #     return string
    # else:
    #     return result

    return " ".join(word.capitalize() for word in string.split())


# print(to_jaden_case("How can mirrors be real if our eyes aren't real"))


def boolean_to_string(b):
    return str(b)







