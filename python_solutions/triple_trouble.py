def triple_trouble(one, two, three):
    # your code here
    x = ""
    for i in range(len(one)):
        x += (one[i] + two[i] + three[i])
    return x

# return ''.join(''.join(a) for a in zip(one, two, three))
