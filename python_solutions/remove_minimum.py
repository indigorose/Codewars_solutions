def remove_smallest(numbers):
    if len(numbers) > 0:
        x = numbers.copy()
        # Try and copy lists to avoid mutation which is an amendment to the original input.
        m = numbers.index(min(numbers))
        x.remove(x[m])
        return x
    else:
        return numbers
