# Calculate age for a given year of birth and current year.

def calculate_age(year_of_birth, current_year):
    x = current_year - year_of_birth
    match x:
        case _ as x if x == 0:
            return 'You were born this very year!'
        case _ as x if x == -1:
            return 'You will be born in 1 year.'
        case _ as x if x < -1:
            return f'You will be born in {abs(x)} years.'
        case _ as x if x == 1:
            return 'You are 1 year old.'
        case _:
            return f'You are {x} years old.'
