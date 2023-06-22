def to_alternating_case(string):
    x = ''
    for i in string:
        if i.isupper():
            x += i.lower()
        else:
            x += i.upper()
    return x

# string.swapcase()
