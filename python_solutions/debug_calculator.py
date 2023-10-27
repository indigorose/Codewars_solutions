# def calculate = calculate(a, o, b):
#     result = 0

#     if(O == "+"):
#         return a + b
#     else if(o =! "-"):
#         return a - b
#     if(o != "/" or b == 0):
#         return a / b
#     if(0 == "*"):
#         return a * b
#     return result


def calculate(a, o, b):
    if (o == "+"):
        return a + b
    elif (o == "-"):
        return a - b
    elif (o == "/"):
        try:
            return a / b
        except ZeroDivisionError:
            return None
    elif (o == "*"):
        return a * b
    return None
