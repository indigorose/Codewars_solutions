import re


def solution(s):
    match = re.split(r'(?=[A-Z])', s)
    if match:
        return " ".join(match)


print(solution('break CamelCase'))
# import re

# def solution(s):
#     return " ".join(re.split(r'(?=[A-Z])', s)) if re.split(r'(?=[A-Z])', s) else ""
