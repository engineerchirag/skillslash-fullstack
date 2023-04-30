// Property Descriptors

// configurable: Boolean
// enumerable: Boolean
// value: Any
// writable: Boolean

const obj2 = {name: 'Chirag'};
obj2.company = 'Microsoft';

Object.defineProperty(obj2, 'city', {
    value: "Bangalore",
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(obj2, 'salary', {
    value: 9999999,
    writable: true,
    enumerable: false,
    configurable: true
});

const description = Object.getOwnPropertyDescriptors(obj2);
console.log(description);

for(var key in obj2) {
    console.log(key);
}

Object.defineProperty(obj2, 'surname', {
    value: 'Goel',
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(obj2.surname);
obj2.surname = 'Goyal';
console.log(obj2.surname);
delete obj2.surname;
console.log(obj2.surname);