def parts_sums(ls):
    total = sum(ls)
    result = [total]

    for i in ls:
        total -= i
        result.append(total)
    return result
