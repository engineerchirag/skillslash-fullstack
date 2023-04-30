// var a = 10;
// var b = 20;
// var sum = a + b;

// setTimeout(() => { console.log('SetTimeout-default')});
// setTimeout(() => { console.log('SetTimeout-0')}, 0);
// setTimeout(() => { console.log('SetTimeout-2000')}, 2000);
// setTimeout(() => { console.log('SetTimeout-1000')}, 1000);
// console.log(a);
// console.log(b);
// console.log(sum);


// setInterval(() => console.log('Hi'),1000);


// const myPromise = new Promise((success, reject) => {
    
//     // setTimeout(() => success('Yes, I\'m done'), 5000);
//     setTimeout(() => reject('No, I failed'), 5000);
// });


// myPromise
//     .then((data) => { console.log(data)})
//     .catch((err) => { console.log(err)});


const fetchPromise = new Promise((success, reject) => {
    fetch("https://dummyjson.com/users/15/todos", {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    }).then((res) => res.json())
    .then((data) => success(data))
    .catch((err) => {
        reject(err);
    });
})

fetchPromise
    .then((data) => console.log('Success >', data))
    .catch((err) => console.log('Error >', err));

