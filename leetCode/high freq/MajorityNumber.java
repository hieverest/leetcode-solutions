import java.util.*;

public class MajorityNumber {

    public static List<Integer> majorityElement(int[] nums) {
        int cand1 = 0, cand2 = 0;
        int count = 0, count2 = 0;
        List<Integer> result = new ArrayList<>();

        for (int num : nums) {
            if (count == 0) {
                cand1 = num;
                count++;
            } else {
                if (cand1 != num) {
                    count--;
                } else {
                    count++;
                }
            }
        }
        count = 0;
        for (int num : nums) {
            if (num != cand1) {
                if (count == 0) {
                    cand2 = num;
                    count++;
                } else {
                    if (num != cand2) {
                        count--;
                    } else {
                        count++;
                    }
                }
            }
        }
        count = 0;
        for (int num : nums) {
            if (num == cand1) {
                count++;
            } else if (num == cand2) {
                count2++;
            }
        }
        System.out.println(cand1);
        System.out.println(cand2);
        if (count > nums.length / 3) {
            result.add(cand1);
        }
        if (count2 > nums.length / 3) {
            result.add(cand2);
        }
        return result;

    }

    public static void main(String[] args) {
        int[] nums = {1,1,1,2,3,4,5,6};
        majorityElement(nums);
    }
}
