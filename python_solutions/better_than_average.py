def better_than_average(class_points, your_points):
    x = sum(class_points)/len(class_points)
    if x <= your_points:
        return True
    else:
        return False


# print(better_than_average([100, 40, 34, 57, 29, 72, 57, 88], 75))
