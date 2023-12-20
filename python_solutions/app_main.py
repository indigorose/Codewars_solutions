import re


def minimum(arr):
    return min(arr)


def maximum(arr):
    return max(arr)


def zero_fuel(distance_to_pump, mpg, fuel_left):
    # Happy Coding! ;)
    return True if fuel_left >= (distance_to_pump / mpg) else False


def return_five():
    return len('hello')


def get_planet_name(id):
    # This doesn't work; Fix it!
    match id:
        case 1:
            return "Mercury"
        case 2:
            return "Venus"
        case 3:
            return "Earth"
        case 4:
            return "Mars"
        case 5:
            return "Jupiter"
        case 6:
            return "Saturn"
        case 7:
            return "Uranus"
        case 8:
            return "Neptune"


def small_enough(array, limit):
    for i in array:
        if i > limit:
            return False
    return True


# alternative max(arr) <= limit
def capitals(word):
    return [word.index(i) for i in word if i.isupper()]


def hex_to_dec(s):
    return int(s, 16)


def update_light(current):
    match current:
        case "green":
            return "yellow"
        case 'yellow':
            return "red"
        case 'red':
            return 'green'


def combat(health, damage):
    if health - damage > 0:
        health -= damage
        return health
    else:
        return 0


def double_char(s):
    x = ''
    for i in s:
        x += (i*2)
    return x


def sum_digits(number):
    total = 0
    if number < 0:
        x = -1*number
        for i in str(x):
            total += int(i)
        return total
    else:
        for i in str(number):
            total += int(i)
        return total


def greet(name, owner):
    return 'Hello boss' if name == owner else 'Hello guest'


def sum_two_smallest_numbers(numbers):
    numbers.sort()
    return numbers[0] + numbers[1]


def check_for_factor(base, factor):
    return base % factor == 0


# def main [verb, noun]
    # return verb + noun

def main(verb, noun):
    return verb + noun


def find_short(s):
    # your code here
    x = sorted(s.split(" "), key=len)
    return len(x[0])


def replace_dots(str):
    return re.sub(r'\.', '-', str)
    # we must use r'\.' to ensure it picks up the dots


def open_or_senior(data):
    return [('Senior' if i[0] >= 55 and i[1] > 7 else 'Open') for i in data]


def two_highest(arg1):
    arg1.sort(reverse=True)
    if len(arg1) >= 2:
        x = []
        for i in arg1:
            if i not in x:
                x.append(i)
        return [x[0], x[1]]
    else:
        return arg1


def sum_mix(arr):
    return sum([int(i) for i in arr])


def apple(x):
    return 'It\'s hotter than the sun!!' if int(x)**2 > 1000 else 'Help yourself to a honeycomb Yorkie for the glovebox.'


def number(lines):
    x = []
    y = 1
    for i in lines:
        if i == "":
            x.append(f"{y}: {i}")
            y += 1
        else:
            x.append(f'{y}: {i}')
            y += 1
    return x


# def number(lines):
  # return ['%d: %s' % v for v in enumerate(lines, 1)]


def move(position, roll):
    return position + (roll * 2)

# def say_hello(name):
# "Hello"


def say_hello(name):
    return f"Hello, {name}"


def remove_smallest(numbers):
    if len(numbers) <= 1:
        return []
    else:
        for number in numbers[:len(numbers)]:
            if number == min(numbers):
                numbers.remove(number)
                break
        return numbers


def remove(s):
    return s[:-1] if len(s) >= 2 and s[-1] == "!" else s


def sum_of_minimums(numbers):
    x = []
    for i in numbers:
        x.append(min(i))
    return sum(x)


def find_average(nums):
    return sum(nums)/len(nums) if sum(nums) >= 1 else 0


def odd_or_even(arr):
    return 'even'if sum(arr) % 2 == 0 else 'odd'


def get_even_numbers(arr):
    return list(filter(lambda x: x % 2 == 0, arr))


def xo(s):
    x = 0
    o = 0
    for i in s.lower():
        if i == 'x':
            x += 1
        elif i == 'o':
            o += 1
    return x == o


def mouth_size(animal):
    if animal.lower() == 'alligator':
        return 'small'
    else:
        return 'wide'


def no_odds(values):
    x = []
    if len(values) >= 1:
        for i in values:
            if abs(i) % 2 == 0:
                x.append(i)
    return x


def summation(num):
    return sum([i for i in range(1, 1+num)])

# build_string(*args):
    # return "I like {1}!".format(",".join(args))


list = ["1abc2",
        "pqr3stu8vwx",
        "a1b2c3d4e5f",
        "treb7uchet"]


def sum_list(list):
    result = []
    y = ""
    count = 0
    for x in list:
        y = re.sub(r"[^\d]", "", x)
        result.append(y)
    print(result)
    for i in result:
        if len(i) <= 1:
            j = i+i
            print(j)
            count += int(j)
        else:
            k = (i[0]) + (i[-1])
            print(k)
            count += int(k)
    return count


print(sum_list(list))
