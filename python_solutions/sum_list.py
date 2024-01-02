import re


list = ["1abc2",
        "pqr3stu8vwx",
        "a1b2c3d4e5f",
        "treb7uchet"]


def sum_list(list):
    result = []
    y = ""
    count = 0
    for x in list:
        y = re.sub(r"[^\d]", "", x)
        result.append(y)
    print(result)
    for i in result:
        if len(i) <= 1:
            j = i+i
            print(j)
            count += int(j)
        else:
            k = (i[0]) + (i[-1])
            print(k)
            count += int(k)
    return count


print(sum_list(list))
