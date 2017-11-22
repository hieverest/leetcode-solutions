def thirdMax(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    # if len(nums) > 0:
    #     setOfNums = set(nums)
    #     sortedNums = sorted(setOfNums, reverse = True)
    #     if len(sortedNums) >= 3:
    #         return sortedNums[2]
    #     else:
    #         return sortedNums[0]
    # return
    v = [float('-inf'), float('-inf'), float('-inf')]
    for num in nums:
        if num not in v:
            if num > v[0]:   v = [num, v[0], v[1]]
            elif num > v[1]: v = [v[0], num, v[1]]
            elif num > v[2]: v = [v[0], v[1], num]
    return max(nums) if float('-inf') in v else v[2]

    

print(thirdMax([2, 2, 3, 4, 5, 1]))