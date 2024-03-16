def is_vow(inp):
    vowels = {97: "a", 101: 'e', 105: "i", 111: 'o', 117: 'u'}
    result = []
    for i in inp:
        if i in [97, 101, 105, 111, 117]:
            result.append(vowels[i])
        else:
            result.append(i)
    return result
#     return [chr(n) if chr(n) in "aeiou" else n for n in inp]
