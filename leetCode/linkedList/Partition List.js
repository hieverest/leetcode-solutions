
const { ListNode, printList, buildList } =  require('./ListNode.js');/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */



var partition = function (head, x) {
    let dummy1 = new ListNode(0);
    let dummy2 = new ListNode(0);
    let p1 = dummy1;
    let p2 = dummy2;
    while (head !== null) {
        if (head.val < x) {
            p1.next = head;
            p1 = p1.next;
        } else {
            p2.next = head;
            p2 = p2.next;
        }
        head = head.next;
    }
    p2.next = null;
    p1.next = dummy2.next;
    return dummy1.next;
};


const test = buildList([2,1]);
printList(partition(test, 2))


