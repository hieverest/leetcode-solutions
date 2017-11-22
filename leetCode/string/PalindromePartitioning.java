import java.util.*;

class PalindromePartitioning {

    public static void main(String[] args) {
        PalindromePartitioning test = new PalindromePartitioning();
        String s = "aab";
        List<List<String>> res = test.partition(s);
        System.out.println(res.toString());
    }
    public List<List<String>> partition(String s) {
        List<List<String>> res = new ArrayList<> ();
        List<String> temp = new ArrayList<>();
        partition(s, 0, res, temp, s.length());
        return res;
    }
        
    private void partition(String s, int cur, List<List<String>> res, List<String> temp, int length) {
        if (cur == length) {
            res.add(new ArrayList<String>(temp));
        } else {
            for (int i = 1; i < s.length()+1; i++) {
                String sub = s.substring(0, i);
                if (isPalindrome(sub)) {
                    temp.add(sub);
                    partition(s.substring(i), cur+i, res, temp, length);
                    temp.remove(temp.size()-1);
                }
            }
        }
     }
    
    private boolean isPalindrome(String s) {
        if (s.length() == 0 || s.length() == 1) return true;
        int l =0, r = s.length() - 1;
        while (l < r) {
            if (s.charAt(l) != s.charAt(r)) return false;
            l++;
            r--;
        }
        return true;
    }
}