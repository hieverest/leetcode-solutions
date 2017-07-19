class Solution(object):
    def twoSum(self, numbers, target):
        iMin = 0
        i = iMax = len(numbers)-1
        temp = 0 
        while True:
            if numbers[i] <= target - numbers[0]:
                if i < len(numbers) -1 and numbers[i+1] > target - numbers[0]:
                    break
                elif i == len(numbers)-1:
                    break
                temp = i
                i = int((iMax + iMin)/2)
                iMin = temp
            else:
                temp = i
                i = int((iMax + iMin)/2)
                iMax = temp
        while i > 0:
            for j in range(i-1, -1, -1):
                if numbers[j] + numbers[i] == target:
                    return [j+1, i+1]
            i -= 1
            


        # while i < len(numbers) and numbers[i] <= target:
        #     j = i + 1
        #     while j < len(numbers) and numbers[j] <= target - numbers[i]:
        #         if numbers[i] + numbers[j] == target:
        #             return [i+1, j+1]
        #         j += 1
        #     i += 1

test = Solution()
print(test.twoSum([-1,0], -1))
print(test.twoSum([0,0,0,0, 1,2,3,4,4,4,7,9,10], 5))