def nb_dig(n, d):
    count = 0
    for i in range(0, n+1):
        if str(d) in str(i ** 2):
            x = list(map(int, str(i**2)))
            count += (x.count(d))
    return count

# return sum(str(i*i).count(str(d)) for i in range(n+1))
