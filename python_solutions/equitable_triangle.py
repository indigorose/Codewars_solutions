def equable_triangle(a, b, c):
    x = a + b + c
    s = (a + b + c) / 2
    y = (s*(s-a)*(s-b)*(s-c)) ** 0.5
    return x == y
