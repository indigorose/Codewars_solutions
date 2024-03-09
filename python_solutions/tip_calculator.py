import math


def calculate_tip(amount, rating):
    match rating.upper():
        case 'TERRIBLE':
            return 0
        case 'POOR':
            return math.ceil(amount * 0.05)
        case 'GOOD':
            return math.ceil(amount * 0.10)
        case 'GREAT':
            return math.ceil(amount * 0.15)
        case 'EXCELLENT':
            return math.ceil(amount * 0.2)
        case _:
            return 'Rating not recognised'
