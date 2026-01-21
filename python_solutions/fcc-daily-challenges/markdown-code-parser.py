import re


def parse_inline_code(markdown):
    code = iter(["<code>", "</code>", "<code>", "</code>"])
    res = re.sub("`", lambda _: next(code), markdown)
    return res


print(parse_inline_code("Run `npm install` then."))
