# Sum of Positive
# Return the sum of all the positives in an array/list.

def positive_sum(arr):
    # Your code here
    result = 0
    for a in arr:
        if a >= 0:
            result += a
        else:
            pass
    return result

# Alternative Solution
# return sum(a for a in arr if a > 0)


print(positive_sum([1, 2, 3, 4, 5]))
