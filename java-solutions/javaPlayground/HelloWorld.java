import java.util.*;

class HelloWorld {
    static String test = "OK then.";
    public static void main(String[] args) {
        String[] strArr = test.split(" ");
        System.out.print(Arrays.toString(strArr));
    }
}
