# Generate a range of integers

def generate_range(start, stop, step):
    x = []
    while start <= stop:
        x.append(start)
        start += step
    return x

# return list(range(min, max + 1, step))
