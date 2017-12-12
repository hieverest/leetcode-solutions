function kthLargest(arr, k) {
    if (arr.length < k ) return -1;
    return qSelect(arr, 0, arr.length-1, arr.length - k);
}

function qSelect(arr, i, j, k) {
    let pivot = arr[j];
    let left = i, right = j;
    while (left < right) {
        if (arr[left++] > pivot) {
            swap(arr, --left, --right);
        }
    }
    swap(arr, left, j);
    if (left === k) {
        return arr[left];
    } else if (left > k) {
        return qSelect(arr, i, left - 1, k);
    } else {
        return qSelect(arr, left + 1, j, k);
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [4,3,2,1];
console.log(kthLargest(arr, 3));