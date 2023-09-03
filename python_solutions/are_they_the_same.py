def comp(array1, array2):
    x = []
    y = []
    for i in array2:
        x.append(i)
    for j in array1:
        y.append(j**2)
    x.sort()
    y.sort()
    if x != y:
        return False
    else:
        return True


print(comp([121, 144, 19, 161, 19, 144, 19, 11], [
      11*21, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]))
