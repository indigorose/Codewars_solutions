def difference_in_ages(ages):
    # your code here
    x = list(ages)
    x.sort()
    y = x[-1]-x[0]
    return (x[0], x[-1], y)
