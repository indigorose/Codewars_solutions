def sum_strings(x, y):

    if len(x) == 0 and len(y) == 0:
        return "0"

    i, j = len(x)-1, len(y)-1
    carry = 0
    result = []

    while i >= 0 or j >= 0 or carry:
        if i >= 0:
            da = ord(x[i]) - 48
        else:
            da = 0

        if j >= 0:
            db = ord(y[j]) - 48
        else:
            db = 0

        s = da + db + carry
        carry = s // 10
        if s % 10 >= 0:
            result.append(chr((s % 10) + 48))

        i -= 1
        j -= 1
    res = "".join(reversed(result)).lstrip("0")
    return res if res != "" else "0"
