/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const reverse = head => {
    let cur = head;
    let next = head.next;
    let prev = null;
    while (next !== null) {
        cur.next = prev;
        prev = cur;
        cur = next;
        next = next.next;
    }
    cur.next = prev;
    return cur;
}

var addTwoNumbers = function(l1, l2) {
    l1 = reverse(l1);
    l2 = reverse(l2);
    let carry = 0;
    const dummyHead = new ListNode(0);
    let pointer = dummyHead;
    while (l1 !== null || l2 !== null) {
        let sum = 0;
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        if (carry > 0) {
            sum += carry;
        }
        carry = parseInt(sum / 10);
        sum %= 10;
        pointer.next = new ListNode(sum);
        pointer = pointer.next;
    }
    if (carry > 0) {
        pointer.next = new ListNode(carry);
        pointer = pointer.next;
    }
    return reverse(dummyHead.next);
};