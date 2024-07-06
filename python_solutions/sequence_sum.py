def sequence_sum(begin_number, end_number, step):
    result = 0
    i = begin_number
    while i <= end_number:
        result += i
        i += step

    return result
