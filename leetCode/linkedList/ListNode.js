/*
modules for export 
*/

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const printList = head => {
    if (head === null) {
        console.log("Empty list");
    }
    const arr = [];
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    console.log(arr);
}

const buildList = arr => {
    if (arr.length === 0) {
        console.error("Invalid input");
    }
    const dummyHead = new ListNode(0);
    let pointer = dummyHead;

    arr.forEach(val => {
        pointer.next = new ListNode(val);
        pointer = pointer.next;
    });
    
    return dummyHead.next;
}

module.exports = {
    ListNode,
    printList,
    buildList
}

const test = buildList([1,2,3,4,5,6]);

const getLength = (head) => {
    let fast = head;
    let count = 0;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        count++;
    }
    return count * 2;
}

console.log(getLength(test));