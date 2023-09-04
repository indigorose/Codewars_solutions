import math


def find_difference(a, b):
    # Your code here!
    print(math.prod(a))
    print(math.prod(b))
    print(sum(a))
    print(sum(b))
    return (math.prod(a) - math.prod(b)) if math.prod(a) > math.prod(b) else (math.prod(b) - math.prod(a))


# abs((a[0] * a[1] * a[2]) - b[0]* b[1] * b[2])
print(find_difference([3, 2, 5], [1, 4, 4]))
