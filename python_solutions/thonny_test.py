def find_even_index(array):
    x = 0
    while x != len(array):
        right = array[x+1:]
        left = array[:x]
        if sum(left) == sum(right):
            return x
        else:

            x += 1
    return -1


#print(find_even_index([1, 100, 50, -51, 1, 1]))
#print(find_even_index([1, 2, 3, 4, 3, 2, 1]))


def find_even_index2(arr):
    for i in range(len(arr)):
        if sum(arr[:i]) == sum(arr[i+1:]):
            return i
    return -1


def initialize_names(name):
    name_arr = name.split(" ")
    if len(name_arr) <= 2:
        return name.title()


#print(initialize_names("Jack Ryan"))
    
    
def missing_num(nums):
    nums.sort()
    print(nums)
    for i in range(0, len(nums)):
        if nums[i] != i:
            return i
    
print(missing_num([0,6,7,1,2,3,5]))