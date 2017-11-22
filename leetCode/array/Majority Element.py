class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        countMap = {}
        result = []
        for num in nums:
            if num in countMap:              
                countMap[num] += 1
                if countMap[num] > len(nums)/2:
                    return num
            else:
                countMap[num] = 1

        

test = Solution()
print(test.majorityElement([1, 1, 1, 1, 1,1,1,1,1,1,1,1,1,1,1, 1, 2, 34, 5, 6, 7, 7, 7, 7, 7, 7, 8, 9, 23, 23, 44]))
