# def how_many_dalmatians(n):
#   dogs["Hardly any", "More than a handful!",
#       "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];

#   respond = if number <= 10 then dogs[0] else if (number <= 50 then dogs[1] else (number=101  dogs[3] else dogs[2]

# return respond
def how_many_dalmatians(n):
    dogs = ["Hardly any", "More than a handful!",
            "Woah that's a lot of dogs!", "101 DALMATIONS!!!"]
    if n <= 10:
        return dogs[0]
    elif n <= 50:
        return dogs[1]
    elif n == 101:
        return dogs[3]
    else:
        return dogs[2]
