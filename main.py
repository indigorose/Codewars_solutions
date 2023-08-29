def find_smallest_int(arr):
    # Code here
    return min(arr)


def century(year):
    return ((year-1)//100) + 1


def square_digits(num):
    return int("".join([str(int(i)**2)for i in str(num)]))


def basic_op(operator, value1, value2):
    if operator == "+":
        return value1 + value2
    elif operator == "-":
        return value1 - value2
    elif operator == "*":
        return value1 * value2
    else:
        return value1 / value2, value1, value2


def check(seq, elem):
    return elem in set(seq)


def other_angle(a, b):
    return 180-(a+b)


def solution(s):
    words = [[s[0]]]
    for c in s[1:]:
        if words[-1][1].islower() and c.isupper():
            words.append(list(c))
        else:
            words[-1].append(c)
    x = ["".join(word) for word in words]
    return " ".join(x)
