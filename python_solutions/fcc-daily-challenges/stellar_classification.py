def classification(temp):
    if temp >= 30000:
        return "O"
    elif temp >= 10000:
        return "B"
    elif temp >= 7500:
        return "A"
    elif temp >= 6000:
        return "F"
    elif temp >= 5200:
        return "G"
    elif temp >= 3700:
        return "K"
    else:
        return "M"
