# class Solution(object):
#     def findDisappearedNumbers(self, nums):
#         """
#         :type nums: List[int]
#         :rtype: List[int]
#         """
#         dct= {}
#         result = []
#         for i in nums:
#             dct[i] = i
#         for i in range(1, len(nums)+1):
#             if dct.get(i) == None:
#                  result.append(i) 
#         return result
class Solution(object):
    def findDisappearedNumbers(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        # For each number i in nums,
        # we mark the number that i points as negative.
        # Then we filter the list, get all the indexes
        # who points to a positive number
        for i in range(len(nums)):
            index = abs(nums[i]) - 1
            nums[index] = - abs(nums[index])

        return [i + 1 for i in range(len(nums)) if nums[i] > 0]



test = Solution()
print(test.findDisappearedNumbers([4,3,2,7,8,2,3,1]))

# Input:
# [4,3,2,7,8,2,3,1]

# Output:
# [5,6]