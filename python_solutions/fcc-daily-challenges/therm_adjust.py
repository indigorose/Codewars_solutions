def adjust_thermostat(temp, target):
    if temp < target:
        return "heat"
    elif temp > target:
        return 'cool'
    else:
        return "hold"
    return temp
