/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int x) {
        val = x;
    }
}

class Solution {
    private TreeNode prev = null;

    public boolean isValidBST(TreeNode root) {
        return inOrderDFS(root);
    }

    private boolean inOrderDFS(TreeNode node) {
        if(node == null) return true;
        if(inOrderDFS(node.left)) {
            if( prev != null && node.val >= prev.val) {
                return false;
            }
            prev = node;
            return inOrderDFS(node.right);
        }
        return false;
    }
}

class ValidateBinarySearchTree {

}