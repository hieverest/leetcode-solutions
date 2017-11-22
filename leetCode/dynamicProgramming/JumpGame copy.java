import java.util.Arrays;

class JumpGame {
    static int jumpGame(int[] arr) {
        int[] res = new int[arr.length];
        Arrays.fill(res, Integer.MAX_VALUE);
        res[0] = 0;
        for (int i = 1; i < arr.length; i++) {
            for (int j = 0; j < i; j++) {
                if (arr[j] >= (i - j)) {
                    res[i] = Math.min(res[i], res[j] + 1);
                }
            }
        }
        return res[arr.length - 1];
    }

    public static void main(String[] args) {
        int[] arr = {1,2,5,8,9,2,6,7,8,9};
        System.out.println(jumpGame(arr));
    }
}