class Solution(object):
    def canPlaceFlowers(self, flowerbed, n):
        """
        :type flowerbed: List[int]
        :type n: int
        :rtype: bool
        """
        zeros = 1
        for i in range(len(flowerbed)): 
            if flowerbed[i] == 0:
                zeros += 1
            else:
                zeros = 0

            if zeros == 3:
                n -= 1
                zeros = 1
            if i == len(flowerbed) - 1 and zeros == 2:
                n -= 1
            if n <= 0:
                return True

        return False
# O(n)
    

test = Solution()
print(test.canPlaceFlowers([0, 0, 1,0,0,1,0,0,0,0], 4))