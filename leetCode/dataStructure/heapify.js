/*
Given an integer array, heapify it into a min-heap array.

For a heap array A, A[0] is the root of heap, and for each A[i], A[i * 2 + 1] is the left child of A[i] and A[i * 2 + 2] is the right child of A[i].
Clarification
What is heap?

Heap is a data structure, which usually have three methods: push, pop and top. where "push" add a new element the heap, "pop" delete the minimum/maximum element in the heap, "top" return the minimum/maximum element.

What is heapify?
Convert an unordered integer array into a heap array. If it is min-heap, for each element A[i], we will get A[i * 2 + 1] >= A[i] and A[i * 2 + 2] >= A[i].

What if there is a lot of solutions?
Return any of them.

Example
Given [3,2,1,4,5], return [1,2,3,4,5] or any legal heap array.
*/

// siftUp. Time comlexity O(n*logn)

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const siftUp = (arr, k) => {
    while (k != 0) {
        let parent = parseInt((k - 1) / 2);
        if (arr[parent] < arr[k]) {
            break;
        }
        swap(arr, parent, k);
        k = parent;

    }
}

const heapify = arr => {
    for (let i = 0; i < arr.length; i++) {
        siftUp(arr, i);
    }
    return arr;
}

// siftDown  O(n). worst case would be O(nlogn);

const siftDown = (arr, k) => {
    while (k < arr.length) {
        let smallest = k;
        let left = 2*k+1, right = 2 * k + 2;

        if (left < arr.length && arr[left] < arr[smallest]) {
            smallest = left;
        }
        if (right < arr.length && arr[right] < arr[smallest]) {
            smallest = right;
        }
        if (smallest == k) {
            break;
        }
        let temp = arr[k];
        arr[k] = arr[smallest];
        arr[smallest] = temp;

        k = smallest;
    }
}

const heapify2 = (arr) => {
    for (let i = parseInt(arr.length/2); i >= 0; i-- ) {
        siftDown(arr, i);
    }
    return arr;
}

let arr = [30,22,10,40,50];

console.log(heapify(arr));

arr.push(5);
siftUp(arr, arr.length-1);
console.log(arr);

