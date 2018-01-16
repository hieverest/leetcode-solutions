// Recursion

var isSymmetric = function(root) {
    if (!root) return true;
    return sym(root.left, root.right);
};

function sym(left, right) {
    if (!left && !right) return true;
    if (left && right && left.val === right.val) {
        return sym(left.left, right.right) && sym(left.right, right.left);
    }
    return false;
}