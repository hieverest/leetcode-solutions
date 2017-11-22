class Solution(object):
    def arrayPairSum(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        nums.sort()
        sumOfPair = 0
        for i in range(0, len(nums), 2):
            sumOfPair += nums[i]
        return sumOfPair

test = Solution()
print(test.arrayPairSum([1,4,3,2]))