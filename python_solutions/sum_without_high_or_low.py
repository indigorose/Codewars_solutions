def sum_array(arr):
    if arr == None or len(arr) <= 2:
        return 0
    else:
        x = sorted(arr)
        return sum(x[1:-1])
