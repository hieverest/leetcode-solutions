import java.util.*;

class ReverseWordsInAString {
    public static void main(String[] args) {
        String test = "   a    b";
        Solution ahah = new Solution();
        System.out.print(ahah.reverseWords(test));
    }

}

class Solution {
    public String reverseWords(String s) {
        String[] strArr = s.trim().split("\\s+");  // first slash for escape the '\', which means '\\' represents '\', and '\s' represents white space in regex. 
        StringBuilder res = new StringBuilder();
        for( int i = strArr.length-1; i >= 0; i--) {
            res.append(strArr[i].trim());
            if(i > 0){
                res.append(" ");    
            }
        }
        return res.toString();
    }
}
