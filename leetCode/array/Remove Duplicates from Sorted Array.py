class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        preNum = None
        i = 0
        while True:
            if i >= len(nums):
                break
            if nums[i] == preNum:
                nums.pop(i)
            else:
                preNum = nums[i]
                i += 1            
        return len(nums)

test = Solution()
print(test.removeDuplicates([1,1,1]))
print(test.removeDuplicates([1]))
