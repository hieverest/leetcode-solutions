class CArray {
  constructor(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    for (let i = 0; i < numElements; ++i) {
      this.dataStore[i] = i;
    }
    this.gaps = [5, 3, 1]
  }

  setGaps(arr) {
    this.gaps = arr
  }

  getData() {
    return this.dataStore
  }
  setData() {
    for (let i = 0; i < this.numElements; ++i) {
      this.dataStore[i] = Math.floor(Math.random() *
        (this.numElements + 1));
    }
  }

  clear() {
    for (let i = 0; i < this.dataStore.length; ++i) {
      this.dataStore[i] = 0;
    }
  }

  insert(element) {
    this.dataStore[this.pos++] = element;
  }

  toString() {
    let retstr = "";
    for (let i = 0; i < this.dataStore.length; ++i) {
      retstr += this.dataStore[i] + " ";
      if (i > 0 && i % 10 == 0) {
        retstr += "\n";
      }
    }
    return retstr;
  }

  swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  // Basic sorting algorithms. O(n^2)
  bubbleSort() {
    var numElements = this.dataStore.length;
    var temp;
    for (var outer = numElements; outer >= 2; --outer) {
      for (var inner = 0; inner <= outer - 1; ++inner) {
        if (this.dataStore[inner] > this.dataStore[inner + 1]) {
          this.swap(this.dataStore, inner, inner + 1);
        }
      }
    }
  }

  selectionSort() {
    var min, temp;
    for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
      min = outer;
      for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
        if (this.dataStore[inner] < this.dataStore[min]) {
          min = inner;
        }
      }
      swap(this.dataStore, outer, min);
    }
  }

  insertionSort() {
    var temp, inner;
    for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
      temp = this.dataStore[outer];
      inner = outer;
      while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
        this.dataStore[inner] = this.dataStore[inner - 1];
        --inner;
      }
      this.dataStore[inner] = temp;
    }
  }

  // Advanced Sorting Algorithms
  // shellSort 实际上是带有间隔插入排序, 间隔由大到1
  shellsort() {
    for (var g = 0; g < this.gaps.length; ++g) {
      for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
        var temp = this.dataStore[i];
        for (var j = i; j >= this.gaps[g] &&
          this.dataStore[j - this.gaps[g]] > temp;
          j -= this.gaps[g]) {
          this.dataStore[j] = this.dataStore[j - this.gaps[g]];
        }
        this.dataStore[j] = temp;
      }
    }
  }

  mergeSort(arr = this.dataStore) {
    if (arr.length < 2) {
      return;
    }
    var step = 1;
    var left, right;
    while (step < arr.length) {
      left = 0;
      right = step;
      while (right + step <= arr.length) {
        this.mergeArrays(arr, left, left + step, right, right + step);
        left = right + step;
        right = left + step;
      }
      if (right < arr.length) {
        this.mergeArrays(arr, left, left + step, right, arr.length);
      }
      step *= 2;
    }
  }

  mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    k = startRight;
    for (var i = 0; i < (rightArr.length - 1); ++i) {
      rightArr[i] = arr[k];
      ++k;
    }
    k = startLeft;
    for (var i = 0; i < (leftArr.length - 1); ++i) {
      leftArr[i] = arr[k];
      ++k;
    }
    rightArr[rightArr.length - 1] = Infinity; // a sentinel value
    leftArr[leftArr.length - 1] = Infinity; // a sentinel value
    var m = 0;
    var n = 0;
    for (var k = startLeft; k < stopRight; ++k) {
      if (leftArr[m] <= rightArr[n]) {
        arr[k] = leftArr[m];
        m++;
      }
      else {
        arr[k] = rightArr[n];
        n++;
      }
    }
    console.log("left array - ", leftArr);
    console.log("right array - ", rightArr);
    console.log('array - ', arr);
  }

  

}

function qSort(arr) {
    if (arr.length == 0) {
      return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return qSort(left).concat(pivot, qSort(right));
  }





let size = 10
testArray = new CArray(size)


testArray.setData()
// console.log('random arr:', testArray.toString());
const arr = testArray.getData()

console.log('quick sorted:', qSort(arr));