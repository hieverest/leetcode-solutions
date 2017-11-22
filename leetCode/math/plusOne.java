class Solution {
    public int[] plusOne(int[] digits) {
        int size = digits.length;
        for (int i = size - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i] += 1;
                return digits;
            } else {
                digits[i] = 0;
            }
        }
        int[] newDigits = new int[size + 1];
        newDigits[0] = 1;
        return newDigits;
    }
}

class plusOne {
    public static void main(String[] args) {
        
    }
}