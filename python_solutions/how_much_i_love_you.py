def how_much_i_love_you(nb_petals):
    petals = {1: 'I love you', 2: 'a little', 3: 'a lot',
              4: 'passionately', 5: 'madly', 6: 'not at all'}
    match nb_petals % 6:
        case 1:
            return petals[1]
        case 2:
            return petals[2]
        case 3:
            return petals[3]
        case 4:
            return petals[4]
        case 5:
            return petals[5]
        case _:
            return petals[6]
