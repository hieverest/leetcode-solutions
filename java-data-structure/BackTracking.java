import java.util.*;

public class BackTracking {

    public static void main(String[] args) {
        String[] arr = {"a","b","c"};
        combinations(arr, 2);
        subsets(arr);
        System.out.println();
        permutations(arr, 2);
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
        for (int i = 0; i < arr.length; i++ ) {
            if (current < arr.length - 1) {
                res[current] = arr[i];
                combinations(arr, res, current+1);
            }
        }
    }

    public static void subsets(String[] arr ) {
        if (arr.length == 0 ) {
            return;
        }
        int[] res = new int[arr.length];
        int current = 0;
        subsets(arr, res, current);
    }
    public static void subsets(String[] arr, int[] res, int current) {
        if (current == res.length) {
            System.out.print("{");
            for (int i = 0; i < res.length; i++) {
                if (res[i] == 1) {
                    System.out.print(arr[i] + " ");
                }
            }
            System.out.println("}");
            return;
        }
        for (int i = 0; i < 2; i++) {
            res[current] = i;
            subsets(arr, res, current + 1);
        }
    }

    public static void allPermutations (String[] arr) {
        if (arr.length == 0 ) {
            return;
        }
        int len = arr.length;
        allPermutations(arr, 0, len - 1);
    }
    public static void allPermutations(String[] arr, int l, int r) {
        if (l == r) {
            System.out.println(Arrays.toString(arr));
        } else {
            for (int i = l; i <= r; i++) {
                swap(arr, l, i);
                allPermutations(arr, l + 1, r);
                swap(arr, l, i);
            }
        }
    }

    public static void swap(String[] arr, int i, int j) {
        String temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public static void permutations(String[] arr, int n) {
        if (arr.length == 0 || n <= 0) return;

        String[] res = new String[n];
        permutations(res, 0, n, arr);
    }

    private static void permutations(String[] res, int cur, int n, String[] arr) {
        if (cur == res.length) {
            System.out.println(Arrays.toString(res));
        } else {
            for (int i = 0; i < arr.length; i ++) {
                res[cur] = arr[i];
                permutations(res, cur + 1, n, arr);
            }
        }
    }
}