def amount_of_pages(summary):
    count = 0
    pages = ''
    while len(pages) < summary:
        count += 1
        pages += str(count)
    return count
