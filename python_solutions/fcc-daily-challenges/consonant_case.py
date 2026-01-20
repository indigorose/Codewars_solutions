def to_consonant_case(s):
    d = {"A": "a", "E": "e", "I": "i", "O": "o", "U": "u", "-": "_"}
    res = s.upper()
    for key, value in d.items():
        res = res.replace(key, value)
    return res
