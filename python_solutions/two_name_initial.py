def abbrev_name(name):
    x = name.upper().split(" ")
    y = []
    for i in x:
        y.append(i[0])
    return ".".join(y)


print(abbrev_name("Sam Harris"))
