def excluding_vat_price(price):
    return price/1.15 if abs(0 if price is None else price) else -1
