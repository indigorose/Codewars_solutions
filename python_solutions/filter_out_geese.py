geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]


def goose_filter(birds):
    # your code here
    return [bird for bird in birds if bird not in geese]
