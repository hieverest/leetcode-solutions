import java.util.*;

public class BackTracking {

    public static void main(String[] args) {
        String[] arr = {"a","b","c"};
        combinations(arr, 2);
    }

    public static void combinations(String[] arr, int n ) {
        if (arr.length == 0 || n <= 0) {
            return;
        }
        String[] res = new String[n];
        int current = 0;
        combinations(arr, res, current);
    }
    public static void combinations(String[] arr, String[] res, int current) {
        if (current == res.length) {
            System.out.println(Arrays.toString(res));
            return;
        }
        for (String a : arr) {
            res[current] = a;
            combinations(arr, res, current + 1);
        }
    }
}