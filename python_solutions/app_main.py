import time
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


def lovefunc(flower1, flower2):
    if (flower1 % 2 == 0 and flower2 % 2 == 1) or (flower1 % 2 == 1 and flower2 % 2 == 0):
        return True
    else:
        return False


def nth_even(n):
    return (n*2)-2


# def add(s1, s2):
#     s1 = s1.encode()
#     s2 = s2.encode()
#     s1 = sum(s1)
#     s2 = sum(s1)
#     return s1+s2

def add(s1, s2):
    r1 = [ord(c) for c in s1]
    r2 = [ord(d) for d in s2]
    return sum(r1) + sum(r2)


def is_loch_ness_monster(string):
    return any(x in string for x in ['3.50', 'three fifty', 'tree fiddy'])


class Ball():
    ball_type = 'regular'

    def __init__(self, ball_type=None):
        if ball_type is not None:
            self.ball_type = ball_type


def testit(string):
    if string == '':
        return ''
    else:
        words = string.split()
        modified_words = []
        for i, word in enumerate(words):
            if len(word) > 1:
                modified_words.append(word[:-1] + word[-1].upper())
            else:
                modified_words.append(word[0].upper())
        return ' '.join(modified_words)

# def testit(s):
#     return s[::-1].title()[::-1]


def whatday(num):
    match num:
        case 1:
            return 'Sunday'
        case 2:
            return 'Monday'
        case 3:
            return 'Tuesday'
        case 4:
            return 'Wednesday'
        case 5:
            return 'Thursday'
        case 6:
            return 'Friday'
        case 7:
            return 'Saturday'
        case _:
            return 'Wrong, please enter a number between 1 and 7'


def encode(st):
    word = ([*st])
    e_list = {"a": "1", "e": "2", "i": "3", "o": "4", "u": "5"}
    result = []
    for i in word:
        if i in e_list:
            result.append(e_list[i])
        else:
            result.append(i)

    return "".join(result)


def decode(st):
    word = ([*st])
    e_list = {"1": "a", "2": "e", "3": "i",  "4": "o", "5": "u"}
    result = []
    for i in word:
        if i in e_list:
            result.append(e_list[i])
        else:
            result.append(i)

    return "".join(result)


# def encode(s, t=str.maketrans("aeiou", "12345")):
#     return s.translate(t)


# def decode(s, t=str.maketrans("12345", "aeiou")):
#     return s.translate(t)


def digits(n):
    l = str(n)
    return len([*l])


# def greet(name):
#     return f"Hello {name.title()}!"


# Check integer question

def arrow_area(a, b):
    c = 0.5 * (0.5 * a) * (0.5 * b)
    return c*2


# def arrow_area(a, b):
#     return a * b / 4.0
def multiply(n):
    return n*(pow(5, len(str(abs(n)))))


def usdcny(usd):
    return f'{format(usd * 6.75, ".2f")} Chinese Yuan'


def name_shuffler(str_):
    s = str_.split(" ")
    s.reverse()
    return " ".join(s)


database = [("english", "Welcome"), ("czech", "Vitejte"), ("danish", "Velkomst"), ("dutch", "Welkom"), ("estonian", "Tere tulemast"), ("finnish", "Tervetuloa"), ("flemish", "Welgekomen"), ("french", "Bienvenue"), ("german", "Willkommen"), ("irish", "Failte"), ("italian", "Benvenuto"), ("latvian", "Gaidits"), ("lithuanian", "Laukiamas"), ("polish", "Witamy"), ("spanish", "Bienvenido"), ("swedish", "Valkommen"), ("welsh", "Croeso")
            ]


def greet_(language):
    return next((i[1] for i in database if i[0] == language), 'Welcome')


def sale_hotdogs(n):
    return 100*n if n < 5 else n*95 if 5 <= n < 10 else 90*n


def largest_pair_sum(numbers):
    numbers.sort()
    return numbers[-2] + numbers[-1]


def monkey_count(n):
    return [x for x in range(1, n+1)]


def solution(nums):
    if nums is None:
        return []
    else:
        nums.sort()
        return nums


def bin_to_decimal(inp):
    return int(inp, 2)


def reverse_letter(st):
    return "".join(filter(lambda x: (x.isalpha()), [a for a in st[::-1]]))


class Sleigh(object):
    def authenticate(self, name, password):
        return [name, password] == ["Santa Claus", "Ho Ho Ho!"]


def past(h, m, s):
    return ((h*3600) + (m * 60) + s) * 1000


def is_it_letter(s):
    return s.isupper() or s.islower()


def sort_gift_code(code):
    x = [c for c in code]
    x.sort()
    return "".join(x)


def merge_arrays(arr1, arr2):
    return list(dict.fromkeys(sorted(arr1+arr2)))


def nearest_square(n):
    return round(n**0.5)**2


def sum_cubes(n):
    result = 0
    for i in range(0, n+1):
        result += pow(i, 3)
    return result


def div_con(x):
    return sum([i for i in x if isinstance(i, int)]) - sum([int(i) for i in x if isinstance(i, str)])


def float_to_array(arr):
    return [float(i) for i in arr]


def two_are_positive(a, b, c):
    return len([i for i in [a, b, c] if i > 0]) == 2


def leo(oscar):
    if oscar > 88:
        return "Leo got one already!"
    elif oscar == 88:
        return "Leo finally won the oscar! Leo is happy"
    elif oscar == 86:
        return "Not even for Wolf of wallstreet?!"
    else:
        return "When will you give Leo an Oscar?"


def billboard(name, price=30):
    cost = 0
    for i in name:
        cost += price
    return cost


def get_number_from_string(st):
    return int("".join([i for i in st if i.isdigit()]))


def even_numbers(arr, n):
    x = [i for i in arr if i % 2 == 0]
    y = len(x)-n
    return x[y:]


def print_array(arr):
    return ",".join([str(i) for i in arr])


def power_of_two(x):
    if (x == 0):
        return False
    while (x != 1):
        if (x % 2 != 0):
            return False
        x = x // 2
    return True


def define_suit(card):
    match card[-1]:
        case 'S':
            return 'spades'
        case 'D':
            return 'diamonds'
        case 'H':
            return 'hearts'
        case 'C':
            return 'clubs'


def multiple_of_index(arr):
    return [arr[i] for i in range(len(arr)) if arr[i] == 0 or (i != 0 and arr[i] % i == 0)]


def make_me_slow():
    # This function is too fast!
    x = 0
    for i in range(1000000):
        x += i
    time.sleep(7)
    return x


def without_last(lst):
    # Fix it
    x = lst[:-1]  # removes the last element
    return x


def find_uniq(arr):
    from collections import Counter
    counts = Counter(arr)
    for key, count in counts.items():
        if count == 1:
            return key


def find_missing(arr1, arr2):
    for i in arr1:
        if arr1.count(i) != arr2.count(i):
            return i


def highest_rank(arr):
    from collections import Counter
    lst = Counter(arr)
    temp = max(lst.values())
    result = [key for key in lst if lst[key] == temp]
    if len(result) == 1:
        return result[0]
    else:
        result.sort(reverse=True)
        return result[0]


def only_duplicates(st):
    lst = [char for char in st if st.count(char) >= 2]
    return "".join(lst)


def lowercase_count(strng):
    # Your code here
    x = re.findall('[a-z]', strng)
    return len(x)


def domain_name(url):
    return url.split("//")[-1].split("www.")[-1].split(".")[0]


def delete_nth(order, max_e):
    x = []
    for i in order:
        if x.count(i) < max_e:
            x.append(i)
    return x

# def str_count(strng, letter):
#     return strng.count(letter)


def invert(lst):
    return [abs(i) if i < 0 else i*-1 for i in lst]

# def get_age(age):
#     return int(age.split(" ")[0])


class Solution:
    def main(self, *args):
        print("Hello World!")


def spot_diff(s1, s2):
    result = [i for i in range(0, len(s1)) if s1[i] != s2[i]]
    return result if len(result) >= 1 else []


def number_to_pwr(number, p):
    result = 1
    x = []
    i = 1
    while i <= p:
        x.append(number)
        i += 1
    for i in x:
        result = result * number
    return result


def count_red_beads(n):
    return 0 if n < 1 else (n-1) * 2


def str_count(strng, letter):
    return strng.count(letter)


def get_age(age):
    return int(age.split(" ")[0])


def trees(height):
    length = height * 2 - 1
    stars = 1
    for i in range(1, height + 1):
        print(("*" * stars).center(length))
        stars += 2
    print("*".center(length))


def problem(a):
    return (a * 50) + 6 if type(a) != str else "Error"


class Ship:
    def __init__(self, draft, crew):
        self.draft = draft
        self.crew = crew
    # Your code here

    def is_worth_it(self):
        return self.draft - self.crew * 1.5 > 20

# ASCII to character


def get_char(c):
    # Your code goes here ^_^
    return chr(c)

# return missing element


def get_missing_element(seq):
    # your code here
    for i in range(0, 10):
        if i not in seq:
            return i

# Concise function


def find(arr, el): return 'Not found'if el not in arr else arr.index(el)


def my_languages(results):
    # your fantastic code here
    x = sorted(results.items(), key=lambda x: x[1], reverse=True)
    y = dict(x)

    return [key for key, value in y.items() if value >= 60]


#   return sorted((l for l,r in results.items() if r>=60), reverse=True, key=results.get)
# Grader


def grader(score):
    if 0.9 <= score <= 1:
        return "A"
    elif 0.8 <= score < 0.9:
        return "B"
    elif 0.7 <= score < 0.8:
        return "C"
    elif 0.6 <= score < 0.7:
        return "D"
    else:
        return 'F'


def _if(bool, func1, func2):
    if bool != True:
        return func2()
    else:
        return func1()


string = 'help me'


def upperCaseString(string):
    result = ''
    for i in range(0, len(string)):
        if i % 2 == 0 and string[i] != " ":
            result += string[i].upper()
        else:
            result += string[i]
    return result


print(upperCaseString(string))


def high(x):
    letters = 'abcdefghijklmnopqrstuvwxyz'
    words = x.split(" ")
    highScore = 0
    finalWord = ""
    for word in words:
        score = 0
        for i in word:
            score += (letters.index(i)+1)
        if score > highScore:
            highScore = score
            finalWord = word
    return finalWord


def odd_one(arr):
    for i in arr:
        if abs(i) % 2 != 0:
            return arr.index(i)
    return -1


def multiples(m, n):
    # Implement me!
    return [i*n for i in range(1, m+1)]


def divisors(integer):
    result = [i for i in range(2, integer) if integer % i == 0]
    if len(result) != 0:
        return result
    else:
        return f'{integer} is prime'


def reverse_words(s):
    words = s.split(" ")
    words.reverse()
    return " ".join(words)

# def sum_average(arr):
#     result = 0
#     for i in arr:
#         result += (sum(i)/len(i))
#     return math.floor(result)


def min_value(digits):
    myList = list(dict.fromkeys(digits))
    myList.sort()
    return int(''.join(str(y) for y in myList))
# return int("".join(map(str,sorted(set(digits)))))


def vowel_indices(word):
    # your code here
    return [ele+1 for ele in range(len(word)) if word[ele].lower() in 'aeiouy']


def zipvalidate(postcode):
    pattern = r'^[12346][0-9]{5}$'
    return bool(re.match(pattern, postcode) and postcode.isdigit())

def round_to_next5(n):  
    x = n
    while x%5 !=0:
        x+=1
            
    return x

def include(arr, item):
    return item in arr
    
def hello(name="World"):
    return f"Hello, {name.title() if name else 'World'}!"

def polygon_area(a, b, c, d):
    return (a*b)+((b*(c-a))/2)


