def find_duplicates(arr):
    return sorted([dupes for dupes in set(arr) if arr.count(dupes) >= 2])
