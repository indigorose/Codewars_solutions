import re


def increment_string(strng):
    if strng[-1].isdigit():
        match = re.search(r'\d+$', strng)
        if match:
            split_result = [strng[:match.start()], strng[match.start():]]
            if '00' in split_result[1]:
                split_result[1] = '00' + str((int(split_result[1]) + 1))
            else:
                split_result[1] = str((int(split_result[1]) + 1))
            return ''.join(split_result)
    else:
        return strng + "1"


print(increment_string('foobar002'))
