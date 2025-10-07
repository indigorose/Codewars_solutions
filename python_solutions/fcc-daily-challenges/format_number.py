def format_number(number):
    x = str(number)
    return f"+{x[0]} ({x[1:4]}) {x[4:7]}-{x[7:]}"


print(format_number("05552340182"))
