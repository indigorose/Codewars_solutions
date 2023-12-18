# How many lightsabers
def how_many_light_sabers_do_you_own(name=None):
    if name is None or not name:
        return 0
    elif name == 'Zach':
        return 18
    else:
        return 0


print(how_many_light_sabers_do_you_own())
