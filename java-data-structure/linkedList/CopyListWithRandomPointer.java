class CopyListWithRandomPointer {
    /**
    * Definition for singly-linked list with a random pointer.
    * class RandomListNode {
    *     int label;
    *     RandomListNode next, random;
    *     RandomListNode(int x) { this.label = x; }
    * };
    */

}
class RandomListNode {
    int label;
    RandomListNode next, random;

    RandomListNode(int x) {
        this.label = x;
    }
};
class Solution {
    

    public RandomListNode copyRandomList(RandomListNode head) {
        RandomListNode p = head;
        while (p != null) {
            RandomListNode next = p.next;
            RandomListNode copy = new RandomListNode(p.label);
            p.next = copy;
            copy.next = next;
            p = next;
        }
        p = head;
        while (p != null) {
            p.next.random = (p.random != null) ? p.random.next : null;
            p = p.next.next;
        }
        p = head;
        RandomListNode headCopy = (p != null) ? p.next : null;
        while (p != null) {
            RandomListNode copy = p.next;
            p.next = copy.next;
            p = p.next;
            copy.next = (p != null) ? p.next : null;
        }
        return headCopy;
    }
}
