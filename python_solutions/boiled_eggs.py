def cooking_time(eggs):
    if eggs == 0:
        return 0
    elif eggs <= 8:
        return 5
    elif eggs % 8 >= 1:
        return 5 * (int(eggs/8) + 1)
    else:
        return 5 * (eggs/8)
# alternative - from math import *

# def cooking_time(eggs):
#     return 5*ceil(eggs/8.0)
