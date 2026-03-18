import re
def largest_number(s):
    nums = re.findall(r'-?\d+\.?\d*', s)
    print(nums)
    
    intNums = [float(x) for x in nums]
    print(sorted(intNums))
    
    return max(intNums)

