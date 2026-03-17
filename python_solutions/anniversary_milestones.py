def get_milestone(years):
    if 1 <= years < 5:
        return "Paper"
    elif 5 <= years < 10:
        return "Wood"
    elif 10 <= years < 25:
        return "Tin"
    elif 25 <= years < 40:
        return "Silver"
    elif 40 <= years < 50:
        return "Ruby"
    elif 50 <= years < 60:
        return "Gold"
    elif 60 <= years < 70:
        return "Diamond"
    elif years >= 70:
        return "Platinum"
    else:
        return "Newlyweds"

print(get_milestone(23))