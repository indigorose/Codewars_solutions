def minimum(arr):
    return min(arr)

def maximum(arr):
    return max(arr)
    
def zero_fuel(distance_to_pump, mpg, fuel_left):
    #Happy Coding! ;)
    return True if fuel_left >= (distance_to_pump/mpg) else False

