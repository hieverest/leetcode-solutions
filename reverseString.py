
def removeWhite(s):
    result = "".join(s.split())
    li = "".join(l for l in result if l not in ("'"))
    return li


def isPal(s):
    def reverse(s):
        if len(s) <= 1:
            return s
        else:
            return reverse(s[1:]) + s[0]
    return s == reverse(s)


print(removeWhite("Hello '''! world"))
