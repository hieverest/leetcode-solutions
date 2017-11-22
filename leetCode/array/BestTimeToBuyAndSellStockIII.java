class Solution {
    public int maxProfit(int[] prices) {
        if(prices.length == 0 ) return 0;
        
        List<Integer> leftMaxProfit = new ArrayList<>();
        List<Integer> rightMaxProfit = new ArrayList<>();
        int len = prices.length;
        
        for(int i = 0; i < len; i++) {
            leftMaxProfit.add(profitHelper(prices, 0, i));
            rightMaxProfit.add(profitHelper(prices, i + 1, len - 1));
        }
        
        int maxProfit = 0;
        for(int i = 0; i < len; i++) {
            maxProfit = Math.max(maxProfit, leftMaxProfit.get(i) + rightMaxProfit.get(i));
        }
        
        return maxProfit;
         
    }
    
    private int profitHelper(int[] arr, int start, int end) {
        int min = Integer.MAX_VALUE;
        int profit = 0;
        for(int i = start; i < end + 1; i++ ) {
            min = (min > arr[i]) ? arr[i] : min;
            profit = (profit > arr[i] - min) ? profit : arr[i] - min;
        }
        return profit;
    }
}
