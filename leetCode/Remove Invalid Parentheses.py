def removeInvalidParentheses(s):
    results = ['']
    balance = [] 
    unbalanceStr = ''
    for i in range(len(s)):
        if s[i] == '(':
            balance.append(1)
            unbalanceStr += s[i]
        elif s[i] == ')' and len(balance)==0:
            for r in results:
                for j in range(len(r)):
                    existed = False
                    if r[j] == ')':
                        temp = r[:j] + r[j + 1:] + ')'
                        for rr in results:
                            if temp == rr:
                                existed = True
                        if existed == False:
                            results.append(temp)
        else:
            if s[i] == ')':
                balance.pop()
                unbalanceStr += s[i]
                if len(balance) == 0:
                    for ri in range(len(results)) :
                        results[ri] += unbalanceStr
                    unbalanceStr = ''
            else:
                unbalanceStr += s[i]
        if i == len(s)-1:
            j = len(unbalanceStr) -1
            waitForLeft = False
            while len(balance) > 0:
                if unbalanceStr[j] == '(':
                    if waitForLeft == False:
                        unbalanceStr = unbalanceStr[:j] + unbalanceStr[j+1:]
                        balance.pop()
                    waitForLeft = False
                elif unbalanceStr[j] == ')':
                    waitForLeft = True
                j -= 1
            for ri in range(len(results)) :
                results[ri] += unbalanceStr
    return results

print(removeInvalidParentheses('(a)()()))()') )
print(removeInvalidParentheses('((a)()))') )
print(removeInvalidParentheses(')(a()') )
print(removeInvalidParentheses(')(') )
print(removeInvalidParentheses('n') )
print(removeInvalidParentheses('n(') )
print(removeInvalidParentheses('(()') )
print(removeInvalidParentheses('((') )
print(removeInvalidParentheses('(()(') )
print(removeInvalidParentheses('(())(') )
print(removeInvalidParentheses('a(a(a()') )
print(removeInvalidParentheses('(a(())') )