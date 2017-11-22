
def hammingDistance(x, y):
    list1 = bin(x)[2:][::-1]
    list2 = bin(y)[2:][::-1]
    count = 0
    longLen = (len(list2), len(list1))[len(list1)>len(list2)] 
    shortLen = (len(list1), len(list2))[len(list1)>len(list2)] 
    longList = (list2, list1)[len(list1)>len(list2)]
    for i in range(shortLen):
        if list1[i] != list2[i]:
            count = count + 1
    for i in range(shortLen, longLen):
        if longList[i] == '1':
            count = count + 1
    return count

print(hammingDistance(1, 4))