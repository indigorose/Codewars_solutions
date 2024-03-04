def cannons_ready(gunners):
    aye = 0
    nay = 0
    for value in gunners.values():
        if value == 'aye':
            aye += 1
        else:
            nay += 1

    return 'Shiver me timbers!' if nay >= 1 else 'Fire!'
