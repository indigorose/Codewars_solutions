def to24hourtime(hour, minute, period):
    # hour will always range from 1 to 12 (inclusive)
    # minute will always range from 0 to 59 (inclusive)
    # period will always be either "am" or "pm"
    periods = {1: ["01", "13"], 2: ["02", "14"], 3: ["03", "15"], 4: ["04", "16"], 5: ["05", "17"], 6: ["06", "18"],
               7: ["07", "19"], 8: ["08", "20"], 9: ["09", "21"], 10: ["10", "22"], 11: ["11", "23"], 12: ["00", "12"]}
    minutes = {0: "00", 1: "01", 2: "02", 3: "03", 4: "04", 5: "05", 6: "06", 7: "07", 8: "08", 9: "09"}
    time = ""
    if period == "am":
        time += periods[hour][0]
    else:
        time += periods[hour][1]
    if minute in minutes.keys():
        time += minutes[minute]
        return time
    else:
        time += str(minute)
        return time

    # return '%02d%02d' % (hour % 12 + 12 * (period == 'pm'), minute)
