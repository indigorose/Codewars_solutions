def well(x):
    # your code here
    if 1 <= x.count('good') <= 2:
        return 'Publish!'
    elif x.count('good') > 2:
        return 'I smell a series!'
    else:
        return 'Fail!'
