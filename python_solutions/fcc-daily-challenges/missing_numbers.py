def find_missing_numbers(arr):
    return [i for i in range(1, max(arr)) if i not in arr]
