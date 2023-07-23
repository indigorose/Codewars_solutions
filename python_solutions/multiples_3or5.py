def solution(number):
    count = 0
    for i in range(number):
        if i % 3 == 0 and i % 5 == 0:
            count += i
            continue
        elif i % 3 == 0:
            count += i
            continue
        elif i % 5 == 0:
            count += i
            continue
    return count

# return sum(x for x in range(number) if x % 3 == 0 or x % 5 == 0)
