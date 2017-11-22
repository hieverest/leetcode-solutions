import java.util.*;

class TwoSumII {
    public static void main(String[] args) {
        Solution test = new Solution();
        int[] arr = { 2,3,4,5,6,7,8,10};
        int target = 12;
        System.out.print(Arrays.toString(test.twoSum(arr, target)));
    }
}

class Solution {
    public int[] twoSum(int[] numbers, int target) {
        // Assume input is already sorted.
        for (int i = 0; i < numbers.length; i++) {
            int j = binSearch(numbers, target - numbers[i], i + 1);
            if (j != -1) {
                return new int[] { i + 1, j + 1 };
            }
        }
        throw new IllegalArgumentException("No two sum solution");
    }

    private int bsearch(int[] A, int key, int start) {
        int L = start, R = A.length - 1;
        while (L < R) {
            int M = (L + R) / 2;
            if (A[M] < key) {
                L = M + 1;
            } else {
                R = M;
            }
        }
        return (L == R && A[L] == key) ? L : -1;
    }

    private int binSearch(int[] arr, int target, int start) {
        int left = start;
        int right = arr.length - 1;
        while(left <= right) {
            int mid = (left+right)/2;
            if( arr[mid] < target) {
                left = mid + 1;
            } else if( arr[mid] > target) {
                right = mid - 1;
            } else {
                return mid;
            }
        }
        return - 1;
    }
}