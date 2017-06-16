import itertools

def combine2(lst, n):
    return [list(x) for x in itertools.combinations(lst, n)]

def checkNormal(s):
    balance = 0
    for i in range(len(s)):
        if s[i] == ')' and balance > 0:
            balance -= 1
        elif s[i]=='(':
            balance += 1
        elif s[i] == ')' and balance ==0:
            return False
    return True

def removeInvalidParentheses(s):
    results = ['']
    addResults = []
    finalResult = []
    balance = [] 
    unbalanceStr = ''
    for i in range(len(s)):
        if s[i] == '(':
            balance.append(1)
            unbalanceStr += s[i]
        elif s[i] == ')' and len(balance)==0:
            if len(unbalanceStr) >0:
                for ii in range(len(results)):
                    results[ii] += unbalanceStr
                unbalanceStr = ''
            for ii in range(len(results)):
                r = results[ii]
                for j in range(len(r)):
                    existed = False
                    if r[j] == ')':
                        temp = r[:j] + r[j + 1:] + ')'
                        for rr in results:
                            if temp == rr:
                                existed = True
                                break
                        if existed == False:
                            results.append(temp)
        else:
            if s[i] == ')':
                balance.pop()
                unbalanceStr += s[i]
                if len(balance) == 0:
                    for ii in range(len(results)):
                        results[ii] += unbalanceStr
                    unbalanceStr = ''
            else:
                unbalanceStr += s[i]
        if i == len(s)-1 and len(unbalanceStr) != 0:
            left, leftCopy, right = [], [], []
            for ii in range(len(unbalanceStr)):
                if unbalanceStr[ii] == '(':
                    left.append(ii)
                    leftCopy.append(ii)
                elif unbalanceStr[ii] == ')':
                    right.append(ii)
            acc = 0
            for l in leftCopy:
                if len(right)>0:
                    if l > right[len(right)-1]:
                        unbalanceStr = unbalanceStr[:l-acc]+unbalanceStr[l+1-acc:]
                        left.pop() 
                        acc += 1
                else:
                    unbalanceStr = unbalanceStr[:l-acc]+unbalanceStr[l+1-acc:]
                    left.pop() 
                    acc += 1

            rmvNum = len(left) - len(right)
            if rmvNum > 0:
                rmv = combine2(left, rmvNum)
                result2 = []
                for r in rmv:
                    temp = unbalanceStr
                    acc = 0
                    for ii in r:
                        temp = temp[:ii-acc] + temp[ii+1-acc:]
                        acc +=1
                    if checkNormal(temp) == False:
                        continue
                    existed = False
                    for r2 in result2:
                        if temp == r2:
                            existed = True
                            break
                    if existed == False:
                        result2.append(temp)
                for r in results:
                    for rr in result2:
                        finalResult.append(r + rr)
            else:
                for r in results:
                    finalResult.append(r + unbalanceStr)    
    if len(finalResult) == 0:
        return results
    return finalResult

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
print(removeInvalidParentheses('(a(())((') ) 
print(removeInvalidParentheses('(((()(()') )
print(removeInvalidParentheses('(()(()(()') )
print(removeInvalidParentheses('((())(()') )  
print(removeInvalidParentheses('(()))e())()') )
print(removeInvalidParentheses(')d))') )
print(removeInvalidParentheses(')t))()()bo)') ) # ["t(()bo)","t()(bo)","t()()bo"]