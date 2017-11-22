import java.util.*;

public class IntersectionOfTwoArraysII {
    public static int[] intersect(int[] nums1, int[] nums2) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int n : nums1) {
            if (map.containsKey(n)) {
                map.put(n, map.get(n) + 1 );
            } else {
                map.put(n, 1);
            }
        }
        List<Integer> list = new ArrayList<>();
        for (int n : nums2) {
            if (map.containsKey(n)) {
                map.put(n, map.get(n) -1 );
                if (map.get(n) == 0) {
                    map.remove(n);
                }
                list.add(n);
            }
        }
        int[] res = new int[list.size()];
        for(int i =0; i < res.length; i++) {
            res[i] = list.get(i);
        }
        return res;
    }
    public static void main(String[] args) {
        int[] nums1 = {1, 2, 2, 3};
        int[] nums2 = {4, 2, 2 , 5};
        int[] res = intersect(nums1, nums2);
        System.out.println(Arrays.toString(res));
    }
}