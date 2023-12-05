def repeats(arr):
    return sum([i for i in arr if arr.count(i) == 1])
