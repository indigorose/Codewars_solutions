def duplicates(seq):
    return [seq[i] for i in range(len(seq)) if i == seq.index(seq[i])]
