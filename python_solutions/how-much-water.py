def how_much_water(water, load, clothes):
    # Good luck!
    formula = water * 1.1 ** (clothes - load)
    if clothes > load * 2:
        return 'Too much clothes'
    elif clothes < load:
        return 'Not enough clothes'
    else:
        return round(formula, 2)
