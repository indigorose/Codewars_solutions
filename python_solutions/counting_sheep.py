# Produce a string that counts sheep for any given number.

def count_sheep(n):
    sheep = ""
    for i in range(1, n+1):
        sheep += f"{i} sheep..."

    return sheep
