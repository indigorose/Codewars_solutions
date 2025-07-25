def find_even_index(array):
    mid = len(array)//2
    x = 0

    
    while x != len(array):
        right = array[x+1:]
        left = array[:x]
        print(left)
        print(right)
        if sum(left) == sum(right):
            return x
        else:
            mid += 1
            x += 1
    return -1


print(find_even_index([1,100,50,-51,1,1]))
print(find_even_index([1,2,3,4,3,2,1]))     
