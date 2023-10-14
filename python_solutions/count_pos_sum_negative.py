def count_positives_sum_negatives(arr):
    x = 0
    y = 0
    for i in arr:
        if i <= 0:
            y += i
        else:
            x += 1
    if len(arr) < 1:
        return []
    else:
        return [x, y]
