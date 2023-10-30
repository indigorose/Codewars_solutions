def sum_mul(n, m):
    count = 0
    if (n >= m) and (n == 0):
        return 'INVALID'
    elif (n == m) and (n == 0):
        return 0
    elif (m <= 0) or (n <= 0):
        return 'INVALID'
    else:
        for i in range(n, m):
            if (i % n == 0):
                count += i
    return count


'''def sum_mul(n, m):
    if m>0 and n>0:
        return sum(range(n, m, n))
    else:
        return 'INVALID'''
