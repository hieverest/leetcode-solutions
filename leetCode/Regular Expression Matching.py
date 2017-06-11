str = 'ok*.bala'

print(str.index('*'))


def isMatch(s, p):
    # if p.find('*')>=0:

    i = 0
    j = 0
    preS = None
    preP = None
    match = True
    while match:
        if i == len(s) and j != len(p):
            match = False
            break
        elif i != len(s) and j == len(p):
            match = False
            break
        elif i == len(s) and j == len(p):
            break
        if s[i] != p[j] and p[j] != '.' and p[j] != '*':  # char not matched
            j += 1
            if j == len(p):
                match = False
                break
            if p[j] != '*':  # next char is not *, so false
                match = False
                break
            else:
                while j < len(p) and p[j] == '*':  # otherwise, skip *
                    j += 1

        elif p[j] == '*':
            while i < len(s) and s[i] == preS:
                i += 1
            while j < len(p) and p[j] == '*':
                if preP == '.':
                    while i < len(s):
                        i += 1
                j += 1
            while j < len(p) and p[j] == preS:
                j += 1
        else:
            preS = s[i]
            preP = p[j]
            i += 1
            j += 1

    return match

    # if len(s)>len(p):
    #     return False
    # match = True
    # i = 0
    # while match and i < len(s):
    #     if s[i] != p[i] and p[i] != '.':
    #         match = False
    #     i += 1

    # return match


print(isMatch("aaa", "ab*a*c*a"))
