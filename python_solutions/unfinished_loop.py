def create_array(n):
    # res=[]
    # i=1
    # while i<=n: res+=[i]
    # return res
    # The loop is infinite as we are not increasing the value of i with each iteration of the loop.
    res = []
    i = 1
    while i <= n:
        res += [i]
        i += 1
    return res
