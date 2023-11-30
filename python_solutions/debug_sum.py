def get_sum_of_digits(num):
    # sum = None
    # digits = list(num)
    # for x in digits:
    #     sum + x
    # return sum
    sum = 0
    digits = list(str(num))
    for x in digits:
        sum += int(x)
    return sum
