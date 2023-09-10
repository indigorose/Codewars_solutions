import re


def increment_string(strng):
    if len(strng) > 1:
        if strng[-1].isdigit():
            match = re.search(r'\d+$', strng)
            if match:
                split_result = [strng[:match.start()], strng[match.start():]]
                if split_result[1][0] == "0":
                    split_result[1] = str((int(split_result[1]) + 1)
                                          ).zfill(len(split_result[1]))
                    print(split_result[1])
                else:
                    split_result[1] = str(int(split_result[1]) + 1)

                return ''.join(split_result)
        else:
            return strng + "1"
    elif strng.isdigit():
        return str(int(strng)+1)
    else:
        return strng + "1"


print(increment_string('foobar002'))
print(increment_string("rice1"))
print(increment_string('foobar'))

'''Alternative Solution
def increment_string(strng):
    head = strng.rstrip('0123456789')
    tail = strng[len(head):]
    if tail == "": return strng+"1"
    return head + str(int(tail) + 1).zfill(len(tail))


'''
