def get_drink_by_profession(param):
    x = param.lower()
    match x:
        case "jabroni":
            return "Patron Tequila"
        case "school counselor":
            return "Anything with Alcohol"
        case "programmer":
            return "Hipster Craft Beer"
        case "bike gang member":
            return "Moonshine"
        case "politician":
            return "Your tax dollars"
        case "rapper":
            return "Cristal"
        case _:
            return "Beer"
