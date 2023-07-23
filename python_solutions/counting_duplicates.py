def duplicate_count(text):
    y = text.lower()
    x = {i: y.count(i) for i in set(y)}
    # x = [i for i in text]
    print(x)
    count = 0
    for i in x.values():
        if i >= 2:
            count += 1
        else:
            count += 0
    return count


print(duplicate_count("abcdeaa"))

#   return len([c for c in set(s.lower()) if s.lower().count(c)>1])
