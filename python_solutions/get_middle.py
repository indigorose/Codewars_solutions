def get_middle(s):
    x = list(s)
    y = len(x)
    print(y)
    if y % 2 == 0:
        return str(x[(y//2)-1] + x[y//2])
    else:
        return str(x[y//2])


print(get_middle('test'))
