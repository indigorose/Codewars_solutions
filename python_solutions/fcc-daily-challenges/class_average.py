def get_average_grade(scores):
    avg_score = int(sum(scores)/len(scores))

    match avg_score:
        case 97 | 98 | 99 | 100:
            return "A+"
        case 93 | 94 | 95 | 96:
            return "A"
        case 90 | 91 | 92:
            return "A-"
        case 89 | 88 | 87:
            return "B+"
        case 83 | 84 | 86:
            return "B"
        case 80 | 81 | 82:
            return "B-"
        case 77 | 78 | 79:
            return "C+"
        case 76 | 75 | 74 | 73:
            return "C"
        case 72 | 71 | 70:
            return "C-"
        case 67 | 68 | 69:
            return "D+"
        case 66 | 65 | 64 | 63:
            return "D"
        case 62 | 62 | 60:
            return "D-"
        case _:
            return "F"

    return scores
