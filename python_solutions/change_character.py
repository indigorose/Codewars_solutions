def replace_exclamation(s):
    x = "aeiouAEIOU"
    y = ""
    for i in s:
        if i in x:
            y += "!"
        else:
            y += i
    return y
