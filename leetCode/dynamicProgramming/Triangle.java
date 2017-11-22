import java.util.*;

class Triangle {
    public int minimumTotal(List<List<Integer>> triangle) {
        if (triangle.size() == 0) return 0;
        int size = triangle.size();
        int[][] hashmap = new int[size][size];
        for (int i = 0; i < size; i++) {
            hashmap[size - 1][i] = triangle.get(size-1).get(i);
        }
        for (int row = size - 2; row >= 0; row--) {
            for (int col = 0; col <= row; col++) {
                hashmap[row][col] = Math.min(hashmap[row+1][col], hashmap[row+1][col+1]) + triangle.get(row).get(col);
            }
        }
        return hashmap[0][0];
    }
}