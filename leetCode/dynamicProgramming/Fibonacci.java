class Fibonacci {
    static int fib(int n) {
        int[] dp = new int[n+1];
        dp[1] = 0;
        dp[2] = 1;
        for (int i = 3; i < n+1; i++) {
            dp[i] = dp[i-1] + dp[i-2];
        }

        return dp[n];
    }

    public static void main(String[] args) {
        System.out.println(fib(3));
    }
}