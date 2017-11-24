const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const partition = (arr, k) => {
    if (arr.length === 0) return 0;
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        if (arr[left++] >= k) {
            swap(arr, --left, right--);
        }
    }
    return left;
}

let arr = [2, 6, 4, 8, 10];

console.log(partition(arr, 9));
console.log(arr);