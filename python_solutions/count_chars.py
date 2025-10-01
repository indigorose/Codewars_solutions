def count_char_occurrences(strng, char):
    count = 0
    for i in strng:
        if i == char:
            count += 1
    return count
