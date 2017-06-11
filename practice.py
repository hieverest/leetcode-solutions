import itertools

def combine2(lst, n):
    return [list(x) for x in itertools.combinations(lst, n)]

arr = [1, 2, 3, 4]

print(combine2(arr, 3))