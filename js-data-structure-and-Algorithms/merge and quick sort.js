function mergeSort(arr = []) {
  if (arr.length < 2) {
    return;
  }
  let step = 1;
  let left, right;
  while (step < arr.length) {
    left = 0;
    right = step;
    while (right + step <= arr.length) {
      mergeArrays(arr, left, left + step, right, right + step);
      left = right + step;
      right = left + step;
    }
    if (right < arr.length) { // 只用来最后merge最后的left和[3,5]
      mergeArrays(arr, left, left + step, right, arr.length);
    }
    step *= 2;
  }
  return arr

}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
  let rightArr = new Array(stopRight - startRight + 1);
  let leftArr = new Array(stopLeft - startLeft + 1);
  let k = startRight;
  for (let i = 0; i < (rightArr.length - 1); ++i) {
    rightArr[i] = arr[k];
    ++k;
  }
  k = startLeft;
  for (let i = 0; i < (leftArr.length - 1); ++i) {
    leftArr[i] = arr[k];
    ++k;
  }
  rightArr[rightArr.length - 1] = Infinity; // a sentinel value
  leftArr[leftArr.length - 1] = Infinity; // a sentinel value
  let m = 0;
  let n = 0;
  for (let k = startLeft; k < stopRight; ++k) {
    if (leftArr[m] <= rightArr[n]) {
      arr[k] = leftArr[m];
      m++;
    }
    else {
      arr[k] = rightArr[n];
      n++;
    }
  }
  // console.log("left array - ", leftArr);
  // console.log("right array - ", rightArr);
  // console.log('array - ', arr);
}


function qSort(arr) {
  if (arr.length == 0) {
    return [];
  }
  let left = [];
  let right = [];
  let pivot = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return qSort(left).concat(pivot, qSort(right));
}


let testArr = []
for (let i = 1000; i > 0; i--) {
  testArr.push(i)
}
console.log(testArr);

// console.log(mergeSort(testArr));
console.log(qSort(testArr));
