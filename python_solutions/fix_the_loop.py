def list_animals(animals):
    lst = ''
    for i in range(len(animals)):
        lst += f'{str(i + 1)}. {animals[i]}\n'
    return lst
