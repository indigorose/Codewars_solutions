result = []


def flatten(arr):
    for i in arr:
        if type(i) == list:
            flatten(i)
        else:
            result.append(i)
    return result
# recursion method
