def two_by_two(animals):
    freq = {}
    if len(animals) == 1:
        return {}
    elif not animals:
        return False
    else:
        for item in animals:
            if item in freq:
                freq[item] += 1
            else:
                freq[item] = 1
        if freq == {}:
            return False
        else:
            return dict((k, 2) for k, v in freq.items() if v >= 2)

# alternative     return {x:2 for x in animals if animals.count(x) > 1} if animals else False

print(two_by_two(["goat", "goat", "rabbit", "rabbit", "rabbit", "duck", "horse", "horse", "swan"]))
