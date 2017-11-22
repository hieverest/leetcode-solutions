import java.util.*;

class keyBoard {
    public static void main(String[] args) {
        
        String[] str = {"Hello", "Alaska", "Dad", "Peace"};
        Solution test = new Solution();
        String[] res = test.findWords(str);
        System.out.println(res.length);
    }
}

class Solution {
    private int row = -1;
    public String[] findWords(String[] words) {
        List<String> res = new ArrayList<>();
        
        for(String word : words) {
            int len = word.toCharArray().length;
            int i = 0;
            for(; i < len; i++) {
                if(getRow(word.charAt(i)) != row) break;
            }
            if(i == len -1) res.add(word);
            row = -1;
        }
        String [] newRes = new String[res.size()];
        newRes = res.toArray(newRes);
        return newRes;
        
    }
    
    private int getRow(char ch) {
        String c = Character.toString(Character.toLowerCase(ch));
        String[] keyboard = {"qwertyuiop", "asdfghjkl", "zxcvbnm"};
        for(int i = 0; i < keyboard.length; i++) {
            if(row == -1 && keyboard[i].contains(c)) {
                row = i;
                return i;
            } else if( keyboard[i].contains(c)) {
                return i;
            }
        }
        return -1;
    }
}
