import java.util.*;

class Sorting {

    public static void main(String[] args) {
        int[] arr = { 6, 5, 3, 1, 8, 7, 2, 4 };
        mergeSort(arr);
        System.out.println(Arrays.toString(arr));

    }

    static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    static void bubbleSort(int[] arr) {

        for (int i = 0; i < arr.length - 1; i++) {

            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    swap(arr, i, j);
                }
            }
        }
    }

    static void selectionSort(int[] arr) {
        int minIndex = 0;
        for (int i = 0; i < arr.length; i++) {

            minIndex = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex])
                    minIndex = j;
            }
            if (i < minIndex) {
                swap(arr, i, minIndex);
            }
        }

    }

    static void insertionSort(int[] arr) {
        int inner, temp;
        for (int outer = 1; outer < arr.length; outer++) {
            temp = arr[outer];
            inner = outer;

            while (inner > 0 && arr[inner - 1] >= temp) {

                arr[inner] = arr[inner - 1];
                inner -= 1;
            }
            arr[inner] = temp;
        }

    }

    static void mergeSort(int[] arr) {
        mergeSortAux(arr, 0, arr.length - 1);
    }

    static void mergeSortAux(int[] arr, int low, int high) {
        if (low >= high)
            return;
        int mid = (low + high) / 2;
        mergeSortAux(arr, low, mid);
        mergeSortAux(arr, mid + 1, high);
        merge(arr, low, high);
    }

    static void merge(int[] arr, int low, int high) {
        int mid = (low + high) / 2;

        int[] temp = new int[high - low + 1];
        int i = low;
        int j = mid + 1;
        int index = 0;

        while (i <= mid && j <= high) {
            if (arr[i] < arr[j]) {
                temp[index] = arr[i];
                i++;
            } else {
                temp[index] = arr[j];
                j++;
            }
            index++;
        }

        // left overs
        while (i <= mid)
            temp[index++] = arr[i++];
        while (j <= high)
            temp[index++] = arr[j++];

        i = low;

        for (int k = 0; k < temp.length; k++)
            arr[i++] = temp[k];
    }

    static void quickSort(int[] arr, int i, int j) {
        if (i < j) {
            int pos = partition(arr, i, j);
            quickSort(arr, i, pos - 1);
            quickSort(arr, pos + 1, j);
        }
    }

    static int findKthLargestNum(int[] arr, int i, int j, int k) {
        int targetIdx = arr.length - k;
        if(i < j) {
            int pos = partition(arr, i, j);
            if( pos < targetIdx) {
                System.out.println("We go from " +pos + " to " + j);
                return findKthLargestNum(arr, pos+1, j, k);
            } else if( pos > targetIdx ) {
                System.out.println("We go from " +i + " to " + pos);
                return findKthLargestNum(arr, i, pos-1, k);
            } else {
                System.out.println("equal to " + pos);
                return arr[pos];
            }
        }
        return arr[i];
    }
    static int partition(int[] arr, int i, int j) {
        int pivot = arr[j];
        int wall = i - 1;
        for (int k = i; k < j; k++) {
            if (arr[k] <= pivot) {
                wall++;
                swap(arr, k, wall);
            }
        }
        swap(arr, j, wall + 1);
        return wall + 1;
    }

    // static List qSort(List<Integer> arr) {
    //     if (arr.size() == 0) {
    //         List<Integer> emptyArr = new ArrayList<Integer>();
    //         return emptyArr;
    //     }
    //     List<Integer> left = new ArrayList<Integer>();
    //     List<Integer> right = new ArrayList<Integer>();
    //     int pivot = arr.get(0);
    //     for(int i = 1; i<arr.size(); i++) {
    //         if(arr.get(i) < pivot) {
    //             left.add(arr.get(i));
    //         } else {
    //             right.add(arr.get(i));
    //         }
    //     }
    //     left.add(pivot);
    //     return qSort(left).addAll(qSort(right));
        

    // }
}
