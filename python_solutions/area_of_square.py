# Find the area of a square based on the arc length of a circle within the square.

import math


def square_area(A):
    radius = (360 * A)/(180*math.pi)
    return float('{:.2f}'.format(radius*radius))
#  return round((2 * A / pi) ** 2, 2)


print(square_area(2))
