""" Implement a function that accepts 3 integer values a, b, c. 
The function should return true if a triangle can be built with the sides of given length 
and false in any other case."""
def is_triangle(a, b, c):
    if ((a + b) > c) and ((b + c) > a) and ((c + a) > b):
        return True
    else:
        return False
#  one line answer - return True if ((a + b) > c) and ((b + c) > a) and ((c + a) > b) else False