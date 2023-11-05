# Split data into 8 character bytes list, reverse and return into a joint list.

def data_reverse(data):
    x = [data[i:i + 8] for i in range(0, len(data), 8)]
    x.reverse()
    return sum(x, [])
