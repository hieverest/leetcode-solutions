const { ListNode, printList, buildList } =  require('./ListNode.js');

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

let dummyHead = new ListNode(0);

const revRecursive = head => {
    if (head.next === null) {
        dummyHead.next = head;
        return head;
    }
    let n = revRecursive(head.next);
    n.next = head;
    return head;
}

const arr = [1,2,3,4,5];
let list = buildList(arr);
let rev = reverse(list);
printList(list);
printList(dummyHead.next);