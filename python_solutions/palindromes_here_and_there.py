def convert_palindromes(numbers):
    return [1 if str(i) == str(i)[::-1] else 0 for i in numbers]