# You're a square!

import math


def is_square(n):
    if n >= 0:
        x = math.sqrt(n)
        return x % 1 == 0
    else:
        return False
