# Print a "christmas tree of * for any number"

def christmas_tree(n):
    for i in range(n):
        print(("*" * (i * 2 + 1)).center(n * 2 - 1))


christmas_tree(5)
