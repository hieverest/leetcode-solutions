import java.util.*;

class MissingRanges {
    public static void main(String[] args) {
        int[] arr = {0,1,3,59, 75};
        Solution test = new Solution();
        System.out.print(test.findMissingRanges(arr, 0, 99));
    }
}

class Solution {
    public List<String> findMissingRanges(int[] arr, int start, int end) {
        List<String> ranges = new ArrayList<>();
        int prev = start - 1;
        for (int i = 0; i <= arr.length; i++) {
            int cur = (i==arr.length)? end + 1 : arr[i];
            if(cur - prev > 1) {
                String range = getRange(cur-1, prev+1);
                ranges.add(range);
            }
            prev = cur;
        }
        return ranges;
    }

    private String getRange(int to, int from) {
        return (from==to)? Integer.toString(from) : from + "->" + to;
    }

}