def switcheroo(s):
    x = []
    for i in s:
        if i == "b":
            x.append("a")
        elif i == "a":
            x.append("b")
        else:
            x.append(i)
    return "".join(x)
