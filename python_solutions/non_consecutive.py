def first_non_consecutive(arr):
    x = arr[0]
    for i in range(1, len(arr)):
        if arr[i] != (x+1):
            return arr[i]
        else:
            x = arr[i]
