def converter(mpg):
    kilometers = mpg * 1.609344
    litres = 4.54609188
    return round((kilometers/litres), 2)
