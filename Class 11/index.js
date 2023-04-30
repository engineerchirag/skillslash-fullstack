// // Named function
// function sum(a, b) {
//     const total = a + b;
//     return total;
// }

// const result = sum(1, 2);

// // Anonymous function
// const sum = function(a, b) {
//     const total = a + b;
//     return total;
// }

// const result = sum(1, 2);

// Before Hoisting
// console.log(sum(1,2));
var sum = function(a, b) {
    const total = a + b;
    return total;
}

// After Hoisting
var sum;
// console.log(sum(1,2));
sum = function(a, b) {
    const total = a + b;
    return total;
}



// Before Hoisting
// console.log(sum(1,2))
function sum(a, b) {
    const total = a + b;
    return total;
}


// After Hoisting
function sum(a, b) {
    const total = a + b;
    return total;
}
// console.log(sum(1,2));

// Before
var sum = 10;
function sum(a, b) {
    const total = a + b;
    return total;
}

// console.log(sum);

// After

var sum;
function sum(a, b) {
    const total = a + b;
    return total;
}

sum = 10;

// console.log(sum);



// Before
var sum = function (a, b) {
    const total = a + b;
    return total;
}

function sum() {
    return null;
}

// console.log(sum(1,2));

// After

var sum;

function sum() {
    return null;
}
sum = function (a, b) {
    const total = a + b;
    return total;
}
// console.log(sum(1,2));


//  Pass by value vs Pass by reference
var data1 = [{
    id: 1,
    price: 200,
    title: 'Mango'
}, {
    id: 20,
    price: 300,
    title: 'Banana'
}];

var data2 = {
    id: 1,
    price: 200.25,
    title: 'Mango'
};

function transformData(input) {
    // code goes here
    input.price = Math.round(input.price);
    return input;
}

// console.log(transformData(data2));
// console.log(data2);

// Output1:
// {
//     1: {
//         id: 1,
//         price: 200,
//         title: 'Mango'
//     },
//     20: {
//         id: 20,
//         price: 300,
//         title: 'Banana'
//     }
// }

// Output:
//  {
//     id: 1,
//     price: 200,
//     title: 'Mango'
// };




// Argument


// function sum1(a, b, c=0, d=0, e=0) {
//     console.log(Object.values(arguments));
//     return a + b + c + d + e;
// }


// function sum1() {
//     const argsList = Object.values(arguments);
//     // console.log(argsList);
//     // console.log(arguments[0], arguments[1], arguments[2]);
//     return Object.values(arguments).reduce(function (acc, item){
//         acc += item;
//         return acc;
//     }, 0);
// }


// function sum1(...args) {
//     console.log(args);
//     return args.reduce(function (acc, item){
//         acc += item;
//         return acc;
//     }, 0);
// }


// console.log(sum1(1, 2, 3));

// console.log(sum1(1,4));

// console.log(sum1(1,5, 2,3, 4));



function combineArray(...args) {
    return args.reduce(function(acc, item) {
        acc = acc.concat(item);
        return acc;
    }, []);
}

// console.log(combineArray([1,2,3], [4,5,6,7], [8,9]));
// [1,2,3,4,5,6,7,8,9]


// Higher order functions

// function sum2() {
//     var a = 10; var b = 20;
//     return a + b;
// }

// function compute(cb) {
//     var result = cb();
//     return result;
// }

// console.log(compute(sum2));

function sum3(a) {
    return function(b) {
        return a + b;
    }  
}

// console.log(typeof sum3, sum3.name);
// console.log(typeof sum3(1), sum3(1).name);

// const innerFn = sum3(1);
// console.log(innerFn(2));
// console.log(sum3(1)(2));


// Arrow functions

var sum4 = function(a, b) {
    return a + b;
}

var sum4 = (a, b) => a + b;


// Closures


function sum5(a) {
    return function(b) {
        return function (c) {
            return a + b + c
        };
    }
}

// const innerFn = sum5(1);
// console.log(innerFn(2));

// console.log(sum5(1)(2)(3));


function counter() {
    var count = 0 ;
    return function() {
        return ++count;
    }
}

const runCounter = counter();
// console.log(runCounter()); // 1
// console.log(runCounter()); // 2
// console.log(runCounter()); // 3
// console.log(runCounter());
// console.log(runCounter());
// console.log(runCounter());


// IIFE
var sum6 = (function() { return 6; })();
console.log(sum6);









