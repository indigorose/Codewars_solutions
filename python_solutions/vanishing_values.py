def mul_by_n(lst, n):
    # print("Inputs: ", lst, n) # Check our inputs
    # result = (x * n for x in lst)
    # print("Result: ", list(result)) # Check our result
    # return list(result)
    """ the result is trying to produce a list with a ternary operator in brackets. 
    Take out the brackets and replace with square and then return the result without calling in a list. """
    print("Inputs: ", lst, n)  # Check our inputs
    result = [x * n for x in lst]
    print("Result: ", list(result))  # Check our result
    return result
