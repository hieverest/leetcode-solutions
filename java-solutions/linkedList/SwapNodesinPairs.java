/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class ListNode {
    int val;
    ListNode next;

    ListNode(int x) {
        val = x;
    }
}

class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode dumHead = new ListNode(0);
        dumHead.next = head;
        ListNode a = head;
        ListNode prev = dumHead;
        while(a != null && a.next != null) {
            ListNode b = a.next, c = a.next.next;
            prev.next = b;
            a.next = c;
            b.next = a;
            prev = a;
            a = c;
        }
        return dumHead.next;
    }
}

class SwapNodesinPairs {
    public static void main(String[] args) {
        ListNode a = new ListNode(1);
        a.next = new ListNode(2);
        a.next.next = new ListNode(3);
        a.next.next.next = new ListNode(4);

        Solution test = new Solution();

        System.out.print(String.valueof(test.swapPairs(a)));
    }
}
