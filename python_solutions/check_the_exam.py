def check_exam(arr1, arr2):
    count = 0
    for i in range(len(arr1)):
        if arr1[i] == arr2[i]:
            count += 4
        elif arr2[i] == "":
            count += 0
        else:
            count -= 1
    return count if count > 0 else 0
