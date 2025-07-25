def find_even_index(arr):
    x = 0
    while x != len(arr):
        right = arr[x+1:]
        left = arr[:x]
        if sum(left) == sum(right):
            return x
        else:
            x += 1
    return -1
