def missing_no(nums):
    x = sorted(nums)
    if x[0] != 0:
        return 0
    for i in range(x[0], x[-1]):
        if x[i - x[0]] != i:
            return i
    return x[-1]+1
