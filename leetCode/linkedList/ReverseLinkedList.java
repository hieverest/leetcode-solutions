class ReverseLinkedList {
    class ListNode {
        int val;
        ListNode next;

        ListNode(int x) {
            val = x;
        }
    }

    public ListNode reverseList(ListNode head) {
        if (head == null)
            return null;
        ListNode dummyHead = new ListNode(0);
        while (head != null) {
            ListNode temp = new ListNode(head.val);
            temp.next = dummyHead.next;
            dummyHead.next = temp;
            head = head.next;
        }
        return dummyHead.next;
    }

    public ListNode recursiveRev(ListNode head) {
        return reverseListInt(head, null);

    }
    private ListNode reverseListInt(ListNode head, ListNode newHead) {
        if (head == null)
            return newHead;
        ListNode next = head.next;
        head.next = newHead;
        return reverseListInt(next, head);
    }
}
