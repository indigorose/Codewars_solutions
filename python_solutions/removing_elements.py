def remove_every_other(my_list):
    # Your code here!
    x = [my_list[0]]
    for i in range(1, len(my_list)):
        if i % 2 == 0:
            x.append(my_list[i])
    return x
