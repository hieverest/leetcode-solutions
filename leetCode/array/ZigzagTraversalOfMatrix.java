public class ZigzagTraversalOfMatrix {
    public static void zigzagTraverse(int[][] matrix) {
        if (matrix.length == 0) {
            System.out.println("empty matrix");
            return;
        }
        int[] s = {0, 0};
        int[] n = {0, 0};
        zigzagTraverse(matrix, s, n);
    }

    public static void zigzagTraverse(int[][] matrix, int[] start, int[] next) {
        int xEnd = matrix[0].length - 1;
        int yEnd = matrix.length - 1;
        if ( start[1] == xEnd && start[0] == yEnd ) {
            System.out.println(matrix[start[1]][start[0]]);
            return;
        }
        if (next[0] > xEnd ) {
            int[] s = {start[0]+1, start[1]};
            zigzagTraverse(matrix, s, s);
            return;
        }
        if (next[1] < 0) {
            int[] s = {start[0], start[1] + 1};
            zigzagTraverse(matrix, s, s);
            return;
        }
        System.out.print(matrix[next[1]][next[0]] + ", ");
        int[] n = {next[0] + 1, next[1] - 1};
        zigzagTraverse(matrix, start, n);
    }

    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        zigzagTraverse(matrix);
    }
}