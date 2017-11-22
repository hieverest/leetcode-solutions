class JumpGame {
    // recursion
    // public boolean canJump(int[] nums) {
    //     return jump(nums, 0);
    // }
    // private boolean jump(int[] nums, int index) {
    //     if (index == nums.length - 1)
    //         return true;
    //     if (index >= nums.length) 
    //         return false;
    //     if (nums[index] == 0)
    //         return false;
    //     return jump(nums, index + nums[index]);
    // }
    // public boolean canJump(int[] nums) {
    //     int len = nums.length;
    //     if (len == 1) return true;
    //     boolean[] res = new boolean[len];
    //     res[len -2] = nums[len - 2] >= 1 ? true : false;
    //     if (len == 2) return res[0];
    //     for (int n = len - 3; n >= 0; n--) {
    //         for (int i = 1; i <= nums[n]; i++) {
    //             if (nums[n] >= len - n - 1) {
    //                 res[n] = true;
    //                 break;
    //             }   
    //             if ( (n + i) < len && res[n + i]) {
    //                 res[n] = true;
    //                 break;
    //             }
                    
    //         }
    //     }
        
    //     return res[0];
    // }

    public boolean canJump(int[] nums) {
        int len = nums.length;
        
        boolean[] res = new boolean[len];
        
        res[0] = true;
        for (int i = 1; i < len; i++) {
            for (int j = 0; j < i; j++) {
                if (res[j] && nums[j] + j >= i) {
                    res[i] = true;
                    break;
                }
            }
            System.out.println("i:" + i + ", res = " + res[i]);
        }
        
        return res[len-1];
    }
    public static void main(String[] args) {
        JumpGame test = new JumpGame();
        int[] nums = {2,3,1,1,4};
        System.out.println(test.canJump(nums));
    }
}