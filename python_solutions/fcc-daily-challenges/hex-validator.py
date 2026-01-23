import re

def is_valid_hex(s):
    r = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
    if re.match(r,s):
        return True
    else:
         return False