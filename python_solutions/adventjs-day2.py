print('ball' * 3)
result = []
gifts = [
    {'toy': 'car', 'quantity': 3},
    {'toy': 'doll', 'quantity': 1},
    {'toy': 'ball', 'quantity': 2}
]
for i in gifts:
    print(i['toy'], i['quantity'])
    result.extend([i['toy'] for j in range(i['quantity'])])

print(result)
