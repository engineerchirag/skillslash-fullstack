const products = ["Mango Juice", "Apple Juice", "Banana Juice"];

// console.log(products.includes("Kiwi Juice"));
// console.log(products.indexOf("Kiwi Juice") > -1);


// console.log(products.length);
// console.log(products[1]);
// products[1] = "APPLE JUICE";
// console.log(products[1]);


// OUTPUT: ["MANGO JUICE", "APPLE JUICE", "BANANA JUICE"]

// function convertToUpperCase(products) {
//     const updatedProducts = [];
//     for(var i=0; i< products.length; i++) {
//         updatedProducts.push(products[i].toUpperCase());
//     }
//     return updatedProducts;
// }

// function convertToUpperCase(products) {
//     const updatedProducts = [];

//     // Using forEach
//     products.forEach(function(val, idx) {
//         updatedProducts.push(val.toUpperCase());
//     });

//     return updatedProducts;
// }


// function convertToUpperCase(products) {
//     const newArr = products.map(function(val, idx) {
//         return val.toUpperCase();
//     });
//     return newArr;
// }


// console.log(convertToUpperCase(products));
// console.log(products);


// INPUT: [1,2,3,4,5,6]
// OUTPUT: [2,4,6,8,10,12]

function doubleTheValues(data) {
    // code goes here
    return data.map(function(val) {
        return val * 2;
    });
}

// console.log(doubleTheValues([1,2,3,4,5,6]));


// INPUT: [250, 150, 100, 30, 60, 300, 80];
// OUPUT: [100, 30, 60, 80];

// function priceLessThan100(data) {
//     const arr = [];

//     data.forEach(function(val) {
//         if(val <= 100) {
//             arr.push(val);
//         }
//     });

//     return arr;
// }

function priceLessThan100(data) {
    return data.filter(function(val) {
        return val <= 100;
    });
}

// console.log(priceLessThan100([250, 150, 100, 30, 60, 300, 80]));


// INPUT: [1,2,3,4,5,6,7,8];
// OUTPUT: Even numbers [2,4,6,8];

function getEvenNumbers(data) {
    return data.filter(function(val) {
        return val % 2 === 0;
    })
}

// console.log(getEvenNumbers([1,2,3,4,5,6,7,8]));


// SORT price list
// INPUT: [250, 150, 100, 30, 60, 300, 80]
// OUPUT: [30, 60, 80, 100, 150, 250, 300]

function sortByPrice(data) {
    return data.sort(function(a, b) {
        return a - b > 0 ? 1 : -1;
    });
}

// console.log(sortByPrice([250, 150, 100, 30, 60, 300, 80, 1, 10000, 1000]));


function sortByName(data) {
    return data.sort();
}

// console.log(sortByName(["Mango Juice", "Apple Juice", "Banana Juice"]));


// INPUT: [250, 150, 100, 30, 60, 300, 80]
// OUTPUT: Total value 250+150+100+30+60+300+80


// function getTotalValue(data) {
//     // code here
//     var sum = 0;
//     data.forEach(function(val){
//         sum += val;
//     });
//     return sum;
// }

// function getTotalValue(data) {
//     return data.reduce(function(acc, val){
//         if(typeof val === 'number') {
//             acc += val;
//         }
//         return acc;
//     }, 0);
// }

// console.log(getTotalValue([250, 150, undefined, 30, null, 300, 80]));


// INPUT: [10, 5, 40, 15, 25]
// OUPUT: Max value = 40

function getMaxValue(data) {
    // code here
    return data.reduce(function(acc, val) {
        return Math.max(acc, val);
    }, 0);
}

// console.log(getMaxValue([10, 5, 40, 15, 25]));



// INPUT: ['Protik', 'Amit', 'Arpan', 'Alok', 'Vasanth', 'Manokj']
// OUPUT: ['AMIT', 'ARPAN', 'ALOK']

function getNames(data) {
    return data.reduce(function(acc, item){
        if(item.startsWith('A')) {
            acc.push(item.toUpperCase());
        }
        return acc;
    }, [])
}

// console.log(getNames(['Protik', 'Amit', 'Arpan', 'Alok', 'Vasanth', 'Manokj']));

