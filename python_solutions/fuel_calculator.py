def fuel_price(litres, price_per_litre):
    if litres < 2:
        return round((litres * price_per_litre), 2)
    elif 2 <= litres < 4:
        return round((litres * (price_per_litre - 0.05)), 2)
    elif 4 <= litres < 6:
        return round((litres * (price_per_litre - 0.10)), 2)
    elif 6 <= litres < 8:
        return round((litres * (price_per_litre - 0.15)), 2)
    elif 8 <= litres < 10:
        return round((litres * (price_per_litre - 0.20)), 2)
    else:
        return round((litres * (price_per_litre - 0.25)), 2)


''' alternative def fuel_price(litres, price_per_liter):
    discount = int(min(litres, 10)/2) * 5 / 100
    return round((price_per_liter - discount) * litres, 2)
    '''
