def unique_in_order(sequence):
    x = []
    result = []
    for i in sequence:
        if i not in result:
            result.append(i)
        elif i != result[-1]:
            result.append(i)
        else:
            x.append(i)

    return result


'''
def unique_in_order(sequence):
    x = []
    if len(sequence) >= 2:
        for i in sequence:
            if i not in x or i != x[-1]:
                x.append(i)
        return x
    else: 
        return list(sequence)
'''
