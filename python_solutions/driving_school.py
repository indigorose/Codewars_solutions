# calculate the average passing score for those with a score of less than 18.

def passed(lst):
    x = list(filter((lambda x: x <= 18), lst))
    return round((sum(x)/len(x))) if len(x) >= 1 else 'No pass scores registered.'
