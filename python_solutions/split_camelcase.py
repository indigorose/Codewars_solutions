def solution(s):
    words = [[s[0]]]
    for c in s[1:]:
        if words[-1][1].islower() and c.isupper():
            words.append(list(c))
        else:
            words[-1].append(c)
    x = ["".join(word) for word in words]
    return " ".join(x)
