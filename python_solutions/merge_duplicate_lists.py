def merge_arrays(first, second):
    x = []
    y = first + second
    for i in y:
        if i not in x:
            x.append(i)
    x.sort()
    return x
