# Return the reversed list of a number
def digitize(n):
    return [int(i) for i in str(n)[::-1]]

# Using list comprehension, loop through reversed string of number (n) and int the result. 
