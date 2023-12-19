# Sum of the first nth term of Series

def series_sum(n):
    x = 1
    result = 0
    i = 1
    while i < n+1:
        result += 1/x
        x += 3
        i += 1
    return str('{:.2f}'.format(result))
