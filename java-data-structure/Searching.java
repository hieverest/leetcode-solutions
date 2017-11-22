import java.util.Arrays;

class Searching {
    public boolean binSearch(int[] arr, int x) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left / 2 + right / 2;
            if (arr[mid] == x) {
                return true;
            } else if (arr[mid] < x) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return false;
    }

    public boolean binSearchRecursive(int[] arr, int x) {
        return binSearchRecursive(arr, x, 0, arr.length - 1);
    }

    private boolean binSearchRecursive(int[] arr, int x, int left, int right) {
        if (left > right)
            return false;
        int mid = left / 2 + right / 2;
        if (arr[mid] == x)
            return true;
        else if (arr[mid] < x)
            return binSearchRecursive(arr, x, mid + 1, right);
        else if (arr[mid] > x)
            return binSearchRecursive(arr, x, left, mid - 1);
        return false;
    }

    static void swap(int[] arr, int start, int end) {

        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    }

    public void reverse(int[] arr) {
        int start = 0, end = arr.length - 1;
        while (start <= end) {
            swap(arr, start, end);
            start++;
            end--;
        }
    }

    void reverse(int[] arr, int start, int end) {
        while (start <= end) {
            swap(arr, start, end);
            start++;
            end--;
        }
    }

    void rotate(int[] arr, int x) {
        x = x % arr.length;

        reverse(arr);
        reverse(arr, 0, x - 1);
        reverse(arr, x, arr.length - 1);
    }

    int getOccurances(int[] arr, int x) {

        return getOccurances(arr, x, 0, arr.length - 1);
    }

    int getOccurances(int[] arr, int x, int start, int end) {

        if (arr[start] > x)
            return 0;
        if (arr[end] < x)
            return 0;
        if (arr[start] == x && arr[end] == x)
            return end - start + 1;
        int mid = (start + end) / 2;

        if (arr[mid] == x)
            return (1 + getOccurances(arr, x, start, mid - 1) + getOccurances(arr, x, mid + 1, end));
        else if (arr[mid] < x)
            return getOccurances(arr, x, mid + 1, end);
        else
            return getOccurances(arr, x, start, mid - 1);
    }

    int findFirstOccurance(int[] arr, int x) {

        return findFirstOccurance(arr, x, 0, arr.length - 1);
    }

    int findFirstOccurance(int[] arr, int x, int start, int end) {

        if (arr[start] > x)
            return -1;
        if (arr[end] < x)
            return -1;

        if (arr[start] == x)
            return start;

        int mid = (start + end) / 2;

        if (arr[mid] >= x)
            return findFirstOccurance(arr, x, start, mid);
        else
            return findFirstOccurance(arr, x, mid + 1, end);

    }

    int findFirstBiggerThanK(int[] arr, int k) {

        int result = -1;
        int start = 0;
        int end = arr.length - 1;

        if (arr[arr.length - 1] < k)
            return -1;

        while (start <= end) {
            int mid = (start + end) / 2;
            if (arr[mid] > k) {
                result = mid;
                end = mid - 1;
            } else
                start = mid + 1;
        }
        return result;
    }

    static int ceiling(int[] arr, int k) {
        if (arr[arr.length - 1] < k)
            return -1;
        int result = -1;
        int start = 0;
        int end = arr.length - 1;
        while (start <= end) {
            int mid = (start + end) / 2;

            if (arr[mid] == k)
                return mid;
            else if (arr[mid] > k) {
                result = mid;
                end = mid - 1;
            } else
                start = mid + 1;
        }

        return result;

    }

    static int floor(int[] arr, int k) {
        if (arr[0] > k)
            return -1;
        int result = -1;
        int start = 0;
        int end = arr.length - 1;
        while (start <= end) {
            int mid = (start + end) / 2;

            if (arr[mid] == k)
                return mid;
            else if (arr[mid] < k) {
                result = mid;
                start = mid + 1;
            } else
                end = mid - 1;
        }

        return result;
    }

    static int findPeak(int[] arr) {

        return findPeak(arr, 0, arr.length - 1);
    }

    static int findPeak(int[] arr, int low, int high) {
        if (low > high)
            return -1;
        int mid = (low + high) / 2;

        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1])
            return mid;
        if (arr[mid] < arr[mid + 1])
            return findPeak(arr, mid + 1, high);
        else if (arr[mid] > arr[mid + 1])
            return findPeak(arr, low, mid);

        return -1;

    }

    static void SortArrayWaveForm(int[] arr) {
        Arrays.sort(arr);

        for (int i = 0; i < arr.length - 1; i = i + 2) {

            swap(arr, i, i + 1);
        }

    }

    static void SortArrayWaveFormLinear(int[] arr) {

        for (int i = 0; i < arr.length; i = i + 2) {
            if (i > 0 && arr[i - 1] > arr[i]) {
                swap(arr, i - 1, i);
            }

            if (i < arr.length - 1 && arr[i] < arr[i + 1]) {
                swap(arr, i, i + 1);
            }

        }
    }

    static void findSumEqualToX(int[] arr, int x) {
        Arrays.sort(arr);

        int start = 0;
        int end = arr.length - 1;

        while (start < end) {
            if (arr[start] + arr[end] == x) {
                System.out.println("Found");
                return;
            } else if (arr[start] + arr[end] < x)
                start++;
            else
                end--;

        }

    }

    static void findSumClosestToX(int[] arr, int x){
        Arrays.sort(arr);

        int start = 0; 
        int end = arr.length -1;
        int finalLeft = 0;
        int finalRight = arr.length -1;
        int minDiff = Integer.MAX_VALUE;
        int sum = 0;

        while(start < end){

            int diff = Math.abs(arr[start] + arr[end] - x);
            if(diff < minDiff){
                finalLeft = start;
                finalRight = end;
                minDiff = diff;
                sum = arr[start] + arr[end];
            }
                
            if(diff == 0){
                System.out.println("Start = " + start + " end =" + end);
                return;
            }
            else if (arr[start] + arr[end] < x) {
                start ++;
            }
                
            else{
                 end --;
            }
         

        }
        System.out.println("Sum = " + sum);
        System.out.println("Start = " + finalLeft + " end =" + finalRight);

    }

    static void findPairSumEqualRest(int[] arr) { 

        Arrays.sort(arr);
        double sum = 0;

        for (int i = 0; i < arr.length; i++)
            sum += arr[i];

        sum = sum / 2; // sum/2 could be fraction        

        double start = 0;
        double end = arr.length - 1;

        while (start < end) {

            if (arr[(int)start] + arr[(int)end] == sum) {
                System.out.println("Found");
                System.out.println(arr[(int)start]+ " " + arr[(int)end]);
                return;
            } else if (arr[(int)start] + arr[(int)end] < sum)
                start++;
            else
                end--;

        }

    }

    // sort array wave form

    // find pair sum equal to rest

    //Assignments: find peak; pair sum closet to 0

    public static void main(String[] args) {
        Searching test = new Searching();
        int[] arr = { 1, 2, 3};
        System.out.println(arr.length);
        System.out.println(test.findFirstOccurance(arr, 3));
        findSumClosestToX(arr, 6);
        findPairSumEqualRest(arr);
    }
}
