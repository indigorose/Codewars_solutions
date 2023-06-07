# Return an array of sequential numbers for a given list of random numbers.
def pipe_fix(nums):
    # x = min(nums)
    # y = max(nums)
    # z = []
    # for i in range(min(nums), max(nums)+1):
    #     z.append(i)
    return [i for i in range(min(nums), max(nums) + 1)]


# print(pipe_fix([1, 2, 4, 7, 8]))
