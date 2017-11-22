
import java.util.*;

class SecondLargest {

    // public int secondLargest(int[] arr1, int[] arr2) {
    //     PriorityQueue<Integer> pq = new PriorityQueue<>(2, new Comparator<Integer>() {
    //         public int compare(Integer o1, Integer o2) {
    //             return o2 - o1;
    //         }
    //     });
    //     for (int i : arr1) {
    //         pq.add(i);
    //     }
    //     for (int i : arr2) {
    //         pq.add(i);
    //     }
    //     pq.poll();
    //     return pq.peek();
    // }

    public int secondLargest(int[] arr1, int[] arr2) {
        if (arr1.length < 2 && arr2.length < 2) {
            throw new IllegalArgumentException("argument error");
        }
        List<Integer> largest = new ArrayList<>(Arrays.asList(Integer.MIN_VALUE, Integer.MIN_VALUE));
        getLargest(arr1, largest);
        getLargest(arr2, largest);
        return largest.get(1);
    }

    private void getLargest(int[] arr, List<Integer> largest) {
        for (int i : arr ) {
            if (i > largest.get(0)) {
                largest.set(1, largest.get(0));
                largest.set(0, i);
            } else if (i > largest.get(1)) {
                largest.set(1, i);
            }
        }
    }

    public static void main(String[] args) {
        int[] arr1 = {1,1,2,2,4,4,5, 5};
        int[] arr2 = {1,2};
        SecondLargest test = new SecondLargest();
        System.out.println(test.secondLargest(arr1, arr2));
    }
        
    
}