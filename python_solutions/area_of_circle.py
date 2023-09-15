from math import pi


def circle_area(r):
    if r < 1:
        raise ValueError
    else:
        return float(pi*r**2)
