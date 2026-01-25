def scale_image(size, scale):
    dim = size.split("x")

    return f"{int(int(dim[0])*scale)}x{int(int(dim[1])*scale)}"


print(scale_image("1024x768", 0.5))
