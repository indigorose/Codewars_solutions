def ordered_count(inp):
    dic = {}
    for ch in inp:
        if ch in dic:
            dic[ch] += 1
        else:
            dic[ch] = 1
    return list(dic.items())
