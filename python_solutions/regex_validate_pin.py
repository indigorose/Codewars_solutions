import re


def validate_pin(pin):
    if re.fullmatch(r"^(?:\d{4}|\d{6})", pin):
        return True
    else:
        return False
