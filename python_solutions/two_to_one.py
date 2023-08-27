def longest(a1, a2):
    return "".join(sorted(set(list(a1 + a2))))


print(longest("aretheyhere", "yestheyarehere"))
