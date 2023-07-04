def get_real_floor(n):
    if n < 0:
        return n
    elif n == 0:
        return 0
    elif n == 1:
        return 0
    elif n >= 13:
        return n - 2
    else:
        return n - 1
