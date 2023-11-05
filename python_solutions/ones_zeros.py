# Convert Binary array to integer

def binary_array_to_number(arr):
    arr.reverse()
    return sum([(arr[i] * (2**i)) for i in range(len(arr))])
