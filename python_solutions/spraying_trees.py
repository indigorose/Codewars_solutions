def task(w, n, c):
    match w:
        case "Monday":
            return f'It is Monday today, James, you have to work, you must spray {n} trees and you need {n*c} dollars to buy liquid'
        case "Tuesday":
            return f'It is Tuesday today, John, you have to work, you must spray {n} trees and you need {n*c} dollars to buy liquid'
        case "Wednesday":
            return f'It is Wednesday today, Robert, you have to work, you must spray {n} trees and you need {n*c} dollars to buy liquid'
        case "Thursday":
            return f'It is Thursday today, Michael, you have to work, you must spray {n} trees and you need {n*c} dollars to buy liquid'
        case "Friday":
            return f'It is Friday today, William, you have to work, you must spray {n} trees and you need {n*c} dollars to buy liquid'
        case _:
            return 'It is a weekend, rest.'
