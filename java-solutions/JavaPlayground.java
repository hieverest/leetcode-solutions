import java.util.*;

class JavaPlayground {
    public static void main(String[] args) {
        Solution test = new Solution();
        int[] nums = {2, 5, 6, 7, 9, 1};
        String str = "hahaha";
        Object ok = test;
        System.out.println(ok.getClass());
    }
}
class Solution {
    /*
     * @param k : description of k
     * @param nums : array of nums
     * @return: description of return
     */
    public int kthLargestElement(int k, int[] nums) {
        // write your code here
        int i = 0, j = nums.length - 1;
        return findKthLargestNum(nums, i, j, k);
    }
    
    public int findKthLargestNum(int[] arr, int i, int j, int k) {
        int targetIdx = arr.length - k;
        if(i < j) {
            int pos = partition(arr, i, j);
            if( pos < targetIdx) {
                System.out.println("We go from " +pos + " to " + j);
                return findKthLargestNum(arr, pos+1, j, k);
            } else if( pos > targetIdx ) {
                System.out.println("We go from " +i + " to " + pos);
                return findKthLargestNum(arr, i, pos-1, k);
            } else {
                System.out.println("equal to " + pos);
                return arr[pos];
            }
        }
        return arr[i];
    }
    
    private int partition(int[] arr, int i, int j) {
        int pivot = arr[j];
        int wall = i - 1;
        for (int k = i; k < j; k++) {
            if (arr[k] <= pivot) {
                wall++;
                swap(arr, k, wall);
            }
        }
        swap(arr, j, wall + 1);
        return wall + 1;
    }
    
    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
};
