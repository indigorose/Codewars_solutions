def reverse(st):
    x = [word.strip() for word in st.split(" ")]
    x = [word for word in x if word != ""]
    x.reverse()
    return " ".join(x)
