var containsDuplicate = (nums) => {
    // toSet = new Set(nums);
    // return toSet.size !== nums.length;
    let hashMap = {}, duplicated = false
    for ( num of nums) {
      if(hashMap.hasOwnProperty(num.toString())) {
        duplicated = true
        break
      }
      hashMap[num.toString()] = 1
    }
    if(duplicated) return true
    return false

};

console.log(containsDuplicate([1,2,3,4]));