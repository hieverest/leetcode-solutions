const { ListNode, printList, buildList } =  require('./ListNode.js');

const findMiddle = head => {
    if (head === null) return null;
    let slow = head;
    let fast = head.next;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

const merge = (h1, h2) => {
    const dummyHead = new ListNode(0);
    let pointer = dummyHead;
    while (h1 !== null && h2 !== null) {
        if (h1.val < h2.val) {
            pointer.next = h1;
            h1 = h1.next;
        } else {
            pointer.next = h2;
            h2 = h2.next;
        }
        // 至此 pointer 和 dummyHead脱离
        pointer = pointer.next;
    }

    if (h1 !== null) {
        pointer.next = h1;
    } else {
        pointer.next = h2;
    }

    return dummyHead.next;
}

const sortList = head => {
    if (head === null || head.next === null ) {
        return head;
    }
    let middle = findMiddle(head);
    let right = sortList(middle.next);
    middle.next = null;
    let left = sortList(head);
    return merge(left, right);
}

let arr = [5,4,3,2,1];
const listHead = buildList(arr);
let afterSort = sortList(listHead);
printList(afterSort);



