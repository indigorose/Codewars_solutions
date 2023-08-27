def calculate_years(principal, interest, tax, desired):
    y = 0
    while principal < desired:
        y += 1
        i = interest * principal
        t = i * tax
        principal += (i-t)
    return y


print(calculate_years(1000, 0.05, 0.18, 1100))
