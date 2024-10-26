# Find Numbers which are divisible by a given number.

def divisible_by(numbers, divisor):
    return [i for i in numbers if i % divisor == 0]
