class isOneEditDistance {
    public static void main(String[] args) {
        Solution test = new Solution();
        String s = "abcde", t = "abcdeof";
        System.out.print(test.isOneEditDistance(s, t));
    }
}

class Solution {
    public boolean isOneEditDistance(String s, String t) {
        int sLen = s.length();
        int tLen = t.length();
        if (sLen > tLen)
            return isOneEditDistance(t, s);
        if ((tLen - sLen) > 1)
            return false;
        int i = 0, shift = tLen - sLen;
        while (i < sLen && s.charAt(i) == t.charAt(i)) {
            i++;
        }
        if (i == sLen)
            return shift > 0;
        if (shift == 0)
            i++;
        while (i < sLen && s.charAt(i) == t.charAt(i + shift)) {
            i++;
        }
        return i == sLen;

    }
}