// ES6 features
// - Map
// - Set
// - let/const
// - Declarative method - .forEach, .map, .filter, .reduce
// - String literals
// - Rest operators
// - Arrow function
// - Spread operators
// - Default parameter
// - Class

// Spread & Rest operator

// const arr = ['Arpan', 'Manoj', 'Pratiksha', 'Protik', 'Vasanth', 'Chirag'];

// const firstRank = arr[0];
// const secondRank = arr[1];
// const thirdRank = arr[2];
// const restClass = arr.slice(3);
// console.log(firstRank, secondRank, thirdRank, restClass);


// const [firstRank, secondRank, thirdRank, ...restClass] = ['Arpan', 'Manoj', 'Pratiksha', 'Protik', 'Vasanth', 'Chirag'];

// console.log(firstRank, secondRank, thirdRank, restClass);


// const a = [1,2,3,4,5,6];
// const b = [...a];
// b[0] = 10;
// console.log(a, b);

// const { address: { city }, privateInfo, ...restData} = { 
//     name: 'Chirag Goel', 
//     address: {
//         city: 'Bangalore', 
//         pincode: 560103,
//     },
//     company: 'Microsoft', 
//     experience: 10,
//     privateInfo: {
//         salary: 999999999,
//     }
// };

// console.log(privateInfo, restData);
// console.log(city);

// Default Parameter

// function combine(arr1, arr2) {
//     if(!arr1 && !arr2) {
//         return [];
//     }
//     if (!arr1) {
//         return arr2;
//     }
//     if (!arr2) {
//         return arr1;
//     }
//     return arr1.concat(arr2);
// }


// function combine(arr1=[], arr2=[]) {
//     return arr1.concat(arr2);
// }

// console.log(combine([1,2,3], [4,5])); // [1,2,3,4,5]
// console.log(combine());
// console.log(combine(undefined, [1,2,3]));
// console.log(combine([1,2,3]));




