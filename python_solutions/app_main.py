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
        
        
def greet (name, owner):
    return 'Hello boss' if name == owner else 'Hello guest'

def sum_two_smallest_numbers(numbers):
    numbers.sort()
    return numbers[0] + numbers[1]

def check_for_factor(base, factor):
    return base % factor == 0


