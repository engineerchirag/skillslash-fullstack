const mySet = new Set([2,4,6,7,8]);

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2);
mySet.add(2);
mySet.add(2);

// console.log(mySet.has(4));

// console.log(mySet.delete(1));

// console.log(mySet.clear());

// console.log(mySet.size);

// console.log(mySet.values());

// mySet.forEach(function(val) {
//     console.log(val);
// });

// console.log(mySet);


function getStudentsList(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2)));

    // const mySet = new Set();
    // arr1.forEach(function(val){
    //     mySet.add(val);
    // })

    // arr2.forEach(function(val){
    //     mySet.add(val);
    // });

    // return Array.from(mySet);
}

console.log(getStudentsList([1,2,3,4], [2,3,4,5,5,6]));