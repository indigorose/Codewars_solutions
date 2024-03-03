def did_we_win(plays):
    yards = 0
    for i in plays:
        if i == []:
            continue
        elif i[1] == 'run' or i[1] == 'pass':
            yards += i[0]
        elif i[1] == 'sack':
            yards -= i[0]
            continue
        elif i[1] == 'turnover':
            return False
        else:
            continue
    return yards > 10
