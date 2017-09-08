class ValidNumber {
  public static void main(String[] args) {
    String str = "  +123.1";
    Solution test = new Solution();
    System.out.print(test.isNumber(str));
  }
}

class Solution {
  public boolean isNumber( String str) {
    int len = str.length();
    int i = 0;
    while(i<len && Character.isWhitespace(str.charAt(i))) {
      i++;
    }
    if( i<len && ( str.charAt(i)=='+' || str.charAt(i)=='-')) {
      i++;
    }
    boolean isNumber = false;
    while(i<len && Character.isDigit(str.charAt(i))) {
      i++;
      isNumber = true;
    }
    while(i<len && str.charAt(i) == '.') {
      i++;
      while(i<len && Character.isDigit(str.charAt(i))) {
        i++;
        isNumber = true;
      }
    }
    while(i<len && Character.isWhitespace(str.charAt(i))) {
      i++;
    }
    return isNumber && (i==len);


  }
}