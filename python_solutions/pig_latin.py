def pig_it(text):
    # your code here
    x = []
    for word in text.split(" "):
        if word in ["!", "?"]:
            x.append(word)
        else:
            x.append(word[1:] + word[0] + "ay")
    return " ".join(x)


print(pig_it("O tempora o mores !"))
