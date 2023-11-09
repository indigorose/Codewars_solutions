# Predict your age

def predict_age(age_1, age_2, age_3, age_4, age_5, age_6, age_7, age_8):
    x = [age_1, age_2, age_3, age_4, age_5, age_6, age_7, age_8]
    y = sum([i*i for i in x])
    return int((y ** (1/2))/2)
