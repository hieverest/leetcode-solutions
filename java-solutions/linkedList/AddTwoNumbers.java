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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dumHead = new ListNode(0);
        ListNode curr = dumHead;
        int carry = 0;
        while(l1 != null || l2 != null) {
            int x = (l1 == null)? 0 : l1.val;
            int y = (l2 == null)? 0 : l2.val;
            int sum = x + y + carry;
            carry = sum / 10;
            curr.val = sum % 10;
            curr = curr.next;
            if( l1 != null) l1 = l1.next;
            if( l2 != null) l2 = l2.next;
        }
        if(carry > 0) {
            curr.next = new ListNode(carry);
        }
        return dumHead;
    }
}

class AddTwoNumbers {
    public static void main(String[] args) {
        ListNode l1 = new ListNode(2);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(3);
        ListNode l2 = new ListNode(5);
        l2.next = new ListNode(6);
        l2.next.next = new ListNode(4);

        Solution test = new Solution();
        test.addTwoNumbers(l1, l2);
        ListNode t = l1;
        t.val = 100;
        System.out.println( t.val);

    }
}
