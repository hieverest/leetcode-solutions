def moveZeroes(nums):
    count = 0
    length = len(nums)
    i = 0
    while i < length - count:
        if nums[i] == 0:        
            for j in range(i + 1, length - count):
                nums[j - 1] = nums[j]
            count += 1
            nums[length - count] = 0
            continue
        i += 1


nums = [0, 1, 0, 3, 0, 1, 5, 0, 12]
moveZeroes(nums)
print(nums)
