def find_smallest_int(arr):
    # Code here
    return min(arr)
    
def century(year):
    return ((year-1)//100) + 1
    
def square_digits(num):
    return int("".join([str(int(i)**2)for i in str(num)]))