# Find Numbers which are divisible by a given number.

def divisible_by(numbers, divisor):
    return [i for i in numbers if i % divisor == 0]

# return masked string


def maskify(cc):
    lastFour = cc[-4:]
    if len(cc) <= 4:
        return cc
    else:
        return '#' * (len(cc)-4) + lastFour


def decode(message):
    code = 'abcdefghijklmnopqrstuvwxyz'
    ralpha = 'zyxwvutsrqponmlkjihgfedcba'
    result = ""
    for i in message:
        if i.isalpha():
            x = ralpha.index(i)
            result += i.replace(ralpha[x], code[x])
        else:
            result += " "
    return result
