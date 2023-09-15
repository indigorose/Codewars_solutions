def valid_parentheses(paren_str):
    x = 0
    y = 0
    for i in paren_str:
        if i == "(":
            x += 1
        else:
            y += 1
    return x
