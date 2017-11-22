import java.util.*;

public class BinaryTree {

    TreeNode root;

    public BinaryTree(int[] arr) {
        if (arr.length != 0) {
            Queue<TreeNode> q = new LinkedList<>();
            root = new TreeNode(arr[0]);
            q.add(root);
            for (int i = 1; i < arr.length; i += 2) {
                TreeNode n = q.poll();
                while (n == null) {
                    n = q.poll();
                }
                if (arr[i] == Integer.MIN_VALUE) {
                    n.left = null;
                } else {
                    n.left = new TreeNode(arr[i]);
                }
                q.add(n.left);
                if (i + 1 < arr.length) {
                    if (arr[i + 1] == Integer.MIN_VALUE) {
                        n.right = null;
                    } else {
                        n.right = new TreeNode(arr[i + 1]);
                    }
                    q.add(n.right);
                }
            }

        }
    }

    public static void inOrderDFS(TreeNode root) {
        if (root == null) {
            return;
        }
        inOrderDFS(root.left);
        System.out.print(root.val + ", ");
        inOrderDFS(root.right);

    }

    public static void printTopView(TreeNode root) {
        if (root == null) {
            System.out.println("Root is null!");
            return;
        }
        Map<Integer, Integer> map = new HashMap<>();
        Queue<QTerm> q = new LinkedList<>();
        q.add(new QTerm(root, 0));
        while (!q.isEmpty()) {
            QTerm qt = q.poll();
            int distance = qt.distance;
            TreeNode node = qt.node;
            if (!map.containsKey(distance)) {
                map.put(distance, node.val);
                System.out.print(node.val + ", ");
            }
            if (node.left != null) {
                q.add(new QTerm(node.left, distance - 1));
            }
            if (node.right != null) {
                q.add(new QTerm(node.right, distance + 1));
            }
        }
        System.out.println();

    }

    // Sorted Linked List to balanced BST
    private static ListNode list;

    private static TreeNode sortedListToBST(int start, int end) {
        if (start > end)
            return null;
        int mid = (start + end) / 2;
        TreeNode leftChild = sortedListToBST(start, mid - 1);
        TreeNode parent = new TreeNode(list.val);
        parent.left = leftChild;
        list = list.next;
        parent.right = sortedListToBST(mid + 1, end);
        return parent;
    }

    public static TreeNode sortedListToBST(ListNode head) {
        int n = 0;
        ListNode p = head;
        while (p != null) {
            p = p.next;
            n++;
        }
        list = head;
        return sortedListToBST(0, n - 1);
    }

    private DListNode dCurrent = new DListNode(0);

    public DListNode convertTreeToDListNode(TreeNode root) {
        DListNode dummyHead = new DListNode(-1);
        dummyHead.next = dCurrent;
        convertTreeToDListNodeHelper(root);
        dCurrent.prev.next = null;
        return dummyHead.next;
    }

    private void convertTreeToDListNodeHelper(TreeNode root) {
        if (root == null) {
            return;
        }
        convertTreeToDListNodeHelper(root.left);

        dCurrent.val = root.val;
        DListNode next = new DListNode(0);
        dCurrent.next = next;
        next.prev = dCurrent;
        dCurrent = next;

        convertTreeToDListNodeHelper(root.right);

    }

    public boolean areSiblings(TreeNode node, TreeNode a, TreeNode b) {
        if (node == null) {
            return false;
        }
        return (node.left.val == a.val && node.right.val == (b.val)
                || node.left.val == (b.val) && node.right.val == (a.val) || areSiblings(node.left, a, b)
                || areSiblings(node.right, a, b));
    }

    public boolean sameTree(TreeNode n1, TreeNode n2) {
        if (n1 == null && n2 == null) {
            return true;
        }
        if (n1 == null || n2 == null) {
            return false;
        }
        return n1.val == n2.val && sameTree(n1.left, n2.left) && sameTree(n1.right, n2.right);
    }

    int maxSum = Integer.MIN_VALUE;
    ArrayList<Integer> maxPathSumRes;

    public void maxPathSum(TreeNode root) {
        ArrayList<Integer> path = new ArrayList<>();
        maxPathSum(root, 0, path);
        for (Integer i : maxPathSumRes) {
            System.out.print(i + " -> ");
        }
        System.out.println();
    }

    private void maxPathSum(TreeNode node, int sum, ArrayList<Integer> path) {
        if (node == null) {
            return;
        }
        sum += node.val;
        path.add(node.val);
        ArrayList<Integer> left = new ArrayList<>(path);
        ArrayList<Integer> right = new ArrayList<>(path);
        if (node.left == null && node.right == null && sum > maxSum) {
            maxSum = sum;
            maxPathSumRes = new ArrayList<>(path);
        }
        maxPathSum(node.left, sum, left);
        maxPathSum(node.right, sum, right);
    }

    class Maximum {
        int max_no = Integer.MIN_VALUE;
    }


    Maximum max = new Maximum();
    TreeNode target_leaf = null;

    // A utility function that prints all nodes on the
    // path from root to target_leaf
    boolean printPath(TreeNode node, TreeNode target_leaf) {
        // base case
        if (node == null)
            return false;

        // return true if this node is the target_leaf or
        // target leaf is present in one of its descendants
        if (node == target_leaf || printPath(node.left, target_leaf) || printPath(node.right, target_leaf)) {
            System.out.print(node.val + " ");
            return true;
        }

        return false;
    }

    // This function Sets the target_leaf_ref to refer
    // the leaf node of the maximum path sum. Also,
    // returns the max_sum using max_sum_ref
    void getTargetLeaf(TreeNode node, Maximum max_sum_ref, int curr_sum) {
        if (node == null)
            return;

        // Update current sum to hold sum of nodes on
        // path from root to this node
        curr_sum = curr_sum + node.val;
        int a = max_sum_ref.max_no;

        // If this is a leaf node and path to this node
        // has maximum sum so far, the n make this node
        // target_leaf
        if (node.left == null && node.right == null) {
            if (curr_sum > max_sum_ref.max_no) {
                max_sum_ref.max_no = curr_sum;
                target_leaf = node;
            }
        }

        // If this is not a leaf node, then recur down
        // to find the target_leaf
        getTargetLeaf(node.left, max_sum_ref, curr_sum);
        getTargetLeaf(node.right, max_sum_ref, curr_sum);
    }

    // Returns the maximum sum and prints the nodes on
    // max sum path
    int maxSumPath(TreeNode root) {
        // base case
        if (root == null)
            return 0;

        // find the target leaf and maximum sum
        getTargetLeaf(root, max, 0);

        // print the path from root to the target leaf
        printPath(root, target_leaf);
        return max.max_no; // return maximum sum
    }

    // public boolean pathSum

    void levelK(TreeNode root, int k) {
        levelK(root, 1, k);
    }

    private void levelK(TreeNode node, int level, int k) {
        if (node == null) {
            return;
        }
        if (level == k) {
            System.out.print(node.val + ", ");
            return;
        }
        levelK(node.left, level + 1, k);
        levelK(node.right, level + 1, k);

    }

    public static void main(String[] args) {
        int[] arr = { 5, 2, 8, 1, 3, 6, 9 };
        // int[] arr2 = { 1, 2, 3, Integer.MIN_VALUE, 4, Integer.MIN_VALUE, Integer.MIN_VALUE, Integer.MIN_VALUE, 5,
        //         Integer.MIN_VALUE, 6 };

        BinaryTree bt1 = new BinaryTree(arr);
        // BinaryTree bt2 = new BinaryTree(arr2);
        inOrderDFS(bt1.root);
        
        System.out.println();

        bt1.levelK(bt1.root, 3);

        // System.out.println();
        // DListNode head = bt1.convertTreeToDListNode(bt1.root);
        // while (head.next != null) {
        //     System.out.print(head.val + ", ");
        //     head = head.next;
        // }
        // System.out.println(head.val);
        // while (head != null) {
        //     System.out.print(head.val + ", ");
        //     head = head.prev;
        // }

        // bt1.maxSumPath(bt1.root);

    }

}

class QTerm {
    TreeNode node;
    int distance;

    public QTerm(TreeNode node, int distance) {
        this.node = node;
        this.distance = distance;
    }
}

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    public TreeNode(int x) {
        val = x;
    }
}

class ListNode {
    int val;
    ListNode next;

    public ListNode(int val) {
        this.val = val;
    }
}

class DListNode {
    int val;
    DListNode next;
    DListNode prev;

    public DListNode(int val) {
        this.val = val;
        next = prev = null;
    }
}

class LinkList {
    ListNode head;

    public LinkList(int[] arr) {
        head = new ListNode(arr[0]);
        ListNode cur = head;
        for (int i = 1; i < arr.length; i++) {
            cur.next = new ListNode(arr[i]);
            cur = cur.next;
        }
    }
}