# Find the least common value in an array.

def stray(arr):
    least_common = min(set(arr), key=arr.count)
    return least_common


# print(stray([1, 1, 1, 1, 1, 1, 2]))
