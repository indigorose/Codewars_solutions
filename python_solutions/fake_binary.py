def fake_bin(x):
    return "".join(["0" if i < 5 else "1" for i in [int(i) for i in x]])
