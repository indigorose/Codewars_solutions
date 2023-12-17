# Calculate mean and concatenate string

def mean(lst):
    ints = []
    letters = []
    result = []
    for i in lst:
        if i.isdigit():
            ints.append(int(i))
        else:
            letters.append(i)
    result.append(sum(ints)/10)
    result.append("".join(letters))
    return result


print(mean(["u", "6", "d", "1", "i", "w", "6", "s", "t", "4",
      "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]))
