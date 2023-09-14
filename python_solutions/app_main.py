def minimum(arr):
    return min(arr)

def maximum(arr):
    return max(arr)
    
def zero_fuel(distance_to_pump, mpg, fuel_left):
    #Happy Coding! ;)
    return True if fuel_left >= (distance_to_pump/mpg) else False
    
def return_five():
    return len('hello')
    
def get_planet_name(id):
    # This doesn't work; Fix it!
    match id:
        case 1:
            return "Mercury"
        case 2:
            return "Venus"
        case 3: 
            return "Earth"
        case 4: 
            return "Mars"
        case 5: 
            return "Jupiter"
        case 6: 
            return "Saturn"
        case 7: 
            return "Uranus"  
        case 8:
            return "Neptune"

