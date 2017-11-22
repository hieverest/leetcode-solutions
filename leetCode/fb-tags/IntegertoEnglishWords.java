
class IntegertoEnglishWords {
    final static String[] LESS_THAN_TWENTY = {
        "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    };
    final static String[] TENS = {
        "", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    };
    final static String[] THOUSANDS = {
        "", "Thousand", "Million", "Billion"
    };

    public static String numberToWords(int num) {
        StringBuilder res = new StringBuilder();
        int count = 0;
        while (num > 0) {
            String temp = helper(num % 1000) + THOUSANDS[count] + " ";
            res.insert(0, temp);
            num /= 1000;
            count++;
        }
        return res.toString();

    }

    private static String helper(int num ) {
        if (num == 0) {
            return "";
        } else if (num < 20) {
            return LESS_THAN_TWENTY[num] + " ";
        } else if (num < 100) {
            return TENS[num/10] + " " + helper(num%10);
        } else if (num < 1000) {
            return LESS_THAN_TWENTY[num/100] + " Hundred " + helper(num%100);
        }
        return "";
    }

    public static void main(String[] args) {
        int num = 50868;
        System.out.println(numberToWords(num));
    }
}