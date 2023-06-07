# Convert a string to a Jaden like case.
def to_jaden_case(string):
    # result = ""
    # x = string.split()
    # for i in x:
    #     if len(result) > 0:
    #         result = result + " " + i.strip().capitalize()
    #     else:
    #         result = i.capitalize()
    # if not result:
    #     return string
    # else:
    #     return result

    return " ".join(word.capitalize() for word in string.split())


# print(to_jaden_case("How can mirrors be real if our eyes aren't real"))
