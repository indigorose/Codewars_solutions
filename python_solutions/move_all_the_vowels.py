def move_vowels(input):
    x = ""
    y = ""
    for i in input:
        if i in ['a', 'e', 'i', 'o', 'u']:
            x += i
        else:
            y += i
    return y + x
