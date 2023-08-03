def stringy(size):
    x = ""
    for i in range(1, size+1):
        if i % 2 != 0:
            x += "1"
        else:
            x += "0"
    return x
# return ('10' * size)[:size]
