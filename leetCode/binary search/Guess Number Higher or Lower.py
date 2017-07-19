  # The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num):
import math

class Solution(object):
    def guess(self, n):
        x = 2
        if n > x:
            return -1
        elif n<x:
            return 1
        else:
            return 0

    def guessNumber(self, n):
        """
        :type n: int
        :rtype: int
        """
        if self.guess(n) == 0: return n
        if self.guess(1) == 0: return 1
        start = 0
        end = n

        while start<(end-1):
            mid = int( (start+end)/2 )
            if self.guess(mid) == 1:
                start = mid
            elif self.guess(mid) == -1:
                end = mid
            else:
                return mid
        

test = Solution()
print(test.guessNumber(3))
