def sort_by_length(arr):
    x = {len(item): item for item in arr}
    y = [key for key, value in x.items()]
    y.sort()
    z = [x[i] for i in y]
    return z


# return sorted(arr, key=len)
