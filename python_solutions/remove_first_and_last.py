def array(string):
    x = string.split(',')
    return " ".join(x[1:-1]) if len(x[1:-1]) >= 1 else None


def remove_char(s):
    # your code here
    return s[1:-1]
