def duck_duck_goose(players, goose):
    if goose < len(players):
        return players[goose-1].name
    elif goose % len(players) == 0:
        return players[len(players)-1].name
    else:
        x = int(goose % len(players) - (len(players)+1))
        return players[x].name


# return players[(goose % len(players)) - 1].name
