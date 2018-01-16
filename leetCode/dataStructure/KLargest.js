const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const kLargest = (arr, k) => {
    for (let i = 0; i < k; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j+1]) swap(arr, j, j+1);
        }
    }
    let res = [];
    for (let i = 0; i < k; i++) {
        res.push(arr[arr.length - i - 1]);
    }

    return res;
}

let arr = [4,3,5,8,12,2,1];

console.log(kLargest(arr,2));