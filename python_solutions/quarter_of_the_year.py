def quarter_of(month):
    if int(month) in range(1, 4):
        return 1
    elif int(month) in range(4, 7):
        return 2
    elif int(month) in range(7, 10):
        return 3
    elif int(month) in range(10, 13):
        return 4
    else:
        print("Out of Range!")
