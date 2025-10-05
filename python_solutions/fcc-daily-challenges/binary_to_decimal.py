def to_decimal(binary):
    intb = int(binary)
    d, p = 0, 0
    while intb:
        d += (intb % 10) * (2**p)
        intb //= 10
        p += 1
    return d
