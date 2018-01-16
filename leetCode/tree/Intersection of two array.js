const findIntersection = (arr1, arr2) => {
    arr1.sort( (a,b) => a - b);
    arr2.sort( (a,b) => a - b);
    
    let res = [], p1 = 0, p2 = 0;
    while (p1 < arr1.length && p2 < arr2.length) {
        while (p1 < arr1.length && arr1[p1] < arr2[p2]) p1++;
        // while (p1 > 0 && arr1[p1] === arr1[p1 - 1]) p1++;
        while (p2 < arr2.length && arr2[p2] < arr1[p1]) p2++;
        if (arr1[p1] === arr2[p2]) {
            res.push(arr1[p1]);
            p1++;
            p2++;
        };
        
    }

    return res; 
}


let arr1 = [2,2,5,6,9, 8, 10, 7];

let arr2 = [2,2,7,8];

console.log(findIntersection(arr1, arr2));

