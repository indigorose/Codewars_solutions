def consonant_count(s):
    c = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
         'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
    return sum(1 for i in s.lower() if i in c)


# sum(1 for c in str if c.isalpha() and c.lower() not in "aeiou")
