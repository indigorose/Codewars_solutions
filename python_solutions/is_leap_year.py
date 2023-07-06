def isLeapYear(year):
    # your code here. Try to do it in one line.
    return True if ((year % 100 == 0) and (year % 400 == 0)) or ((year % 100 != 0) and (year % 4 == 0)) else False


# return (year % 100 != 0 and year % 4 == 0) or year % 400 == 0
