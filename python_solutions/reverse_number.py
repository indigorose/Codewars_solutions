def descending_order(num):
    if num != 0:
        x = sorted(list(map(int, str(num))), reverse=True)
        return int("".join(str(i) for i in x))
    else:
        return 0


print(descending_order(1234))
