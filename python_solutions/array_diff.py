def array_diff(a, b):
    x = []
    for i in a:
        if i not in b:
            x.append(i)
    return x

# Alternative - return [i for i in a if i not in b]
