import java.util.*;

public class SortColors {
    public static void sortColors2(int[] colors, int k) {
        int min = 1, max = k;
        int i = 0;
        int pl = 0, pr = colors.length - 1;
        while (min < max) {
            while (i <= pr) {
                if (colors[i] == min) {
                    swap(colors, i, pl);
                    pl++;
                    i++;  
                    /* 这里i++, 是因为i从pl开始, 那么swap后, 
                    swap过来到i位置上的这个值, 在最开始的时候
                    已经验证过了, 所以无需再次验证. 如果i在swap
                    之后不变, 那么在有一种情况, 就是在最初始的
                    时候, i == pl == min, 此时swap, swap后, 
                    pl++, 但是i仍指向min, 这时候会再次swap, 
                    就打乱了顺序. 
                    */
                } else if (colors[i] == max) {
                    swap(colors, i, pr);
                    pr--;
                    /* 这里则不应该i++, 因为pr所指的值是未知的,
                    所以swap过来后需要验证一次.

                    */
                } else {
                    i++;
                }
            }
            i = pl;
            min++;
            max--;
        }
    }

    private static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public static void main(String[] args) {
        int[] arr = { 3, 4, 1, 2, 7, 3, 5};
        sortColors2(arr, 7);
        System.out.println(Arrays.toString(arr));
    }
}
