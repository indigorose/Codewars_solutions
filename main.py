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


LETTERS = {
    "A": "Alpha",  "B": "Bravo",   "C": "Charlie",
    "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
    "G": "Golf",   "H": "Hotel",   "I": "India",
    "J": "Juliet", "K": "Kilo",    "L": "Lima",
    "M": "Mike",   "N": "November", "O": "Oscar",
    "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
    "S": "Sierra", "T": "Tango",   "U": "Uniform",
    "V": "Victor", "W": "Whiskey", "X": "X-ray",
    "Y": "Yankee", "Z": "Zulu"}


def nato(word):
    return " ".join([LETTERS[i.upper()] for i in word])


def even_or_odd(number):
    return "Even" if number % 2 == 0 else "Odd"


def is_pangram(s):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    for char in alphabet:
        if char not in s.lower():
            return False
    return True


def add_five(num):
    total = num + 5
    return total


def is_uppercase(inp):
    return True if inp == inp.upper() else False


def pillars(num_pill, dist, width):
    pillar_width = (num_pill*width)  # centimeters
    first_last = width * 2 if num_pill >= 3 else width*num_pill
    total_distance = pillar_width + ((dist*100) * (num_pill-1))
    return (total_distance - first_last)
    
    
    

def tower_builder(n_floors):
    # build here
    tower=[]
    for i in range(n_floors):
        spaces = " " * (n_floors - i - 1)
        stars = "*" * (2 * i + 1)
        tower.append(spaces + stars + spaces)

    return tower