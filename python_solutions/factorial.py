def factorial(n):
    result = n
    i = n-1
    if n == 0:
        return 1
    elif n > 12 or n < 0:
        raise ValueError
    else:
        while i > 0:
            result = i*result
            i -= 1
    return result


# def factorial(n):
#     if n < 0 or n > 12:
#         raise ValueError
#     return 1 if n <= 1 else n*factorial(n-1)
