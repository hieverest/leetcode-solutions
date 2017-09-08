class Solution {
    public int maxProfit(int[] prices) {
        int maxCur = 0;
        int maxSoFar = 0;
        for (int i = 1; i < prices.length; i++) {
            maxCur = Math.max(0, maxCur + prices[i] - prices[i - 1]);
            maxSoFar = Math.max(maxSoFar, maxCur);
        }
        return maxSoFar;
    }
}


public class BestTimeToBuyAndSellStock {
    public static void main(String[] args) {
        Solution test = new Solution();
        int[] arr = { 7, 1, 5, 3, 6, 4 };
        int res = test.maxProfit(arr);
        System.out.println(res);
    }

}

