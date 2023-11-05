# Check if a volume is for a cube with only one side.
def cube_checker(volume, side):
    return volume == (side**3) if volume > 0 or side > 0 else False
