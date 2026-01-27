from datetime import datetime, timezone


def odd_or_even_day(timestamp):
    dt_object = datetime.fromtimestamp(timestamp / 1000, tz=timezone.utc)
    day = dt_object.day
    return "even" if day % 2 == 0 else "odd"


print(odd_or_even_day(86400000))
