import java.util.*;

public class BubbleSort {
    public static int[] bubbleSort(int[] nums) {
        for(int i = 0; i<nums.length-1; i++) {
            for(int j = i + 1; j < nums.length; j++) {
                if( nums[i] > nums[j]) {
                    swap(nums, i, j);
                }
            }
        }
        return nums;
    }

    private static void swap(int[] arr, int i , int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    

    public static void main(String[] args) {
        int[] nums = {2,3,6,1,3,7,8,4,2};
        System.out.print(Arrays.toString(bubbleSort(nums)));
    }
}
