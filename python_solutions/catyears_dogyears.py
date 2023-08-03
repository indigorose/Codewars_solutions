def human_years_cat_years_dog_years(human_years):
    x = []
    if human_years <= 1:
        x.append(human_years)
        x.append(15)
        x.append(15)
    else:
        x.append(human_years)
        x.append(15+9+((human_years-2)*4))
        x.append(15+9+((human_years-2)*5))
    return x
