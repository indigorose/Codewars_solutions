def lcm(a, b):
    al = [a*i for i in range(1, a*b)]
    bl = [b*i for i in range(1, a*b)]
    for p in al:
        if p in bl:
            return p
