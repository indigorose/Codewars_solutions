def find_it(seq):
    counts = {item: seq.count(item) for item in seq}
    # print(counts)
    for x, y in counts.items():
        if y % 2 != 0:
            return x

    # for i in seq:
    #     if seq.count(i)%2!=0:
    #         return i

print(find_it([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))
