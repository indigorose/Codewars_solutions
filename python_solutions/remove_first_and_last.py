def array(string):
    x = string.split(',')
    return " ".join(x[1:-1]) if len(x[1:-1]) >= 1 else None

