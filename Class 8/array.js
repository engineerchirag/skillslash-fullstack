// STACK

var arr = [];

function add(val) {
    arr.push(val);
}

function remove() {
    if(size() > 0) {
        arr.pop();
    }
}

function list() {
    return arr;
}

function size() {
    return arr.length;
}

add(1);
add(2);
add(3);
remove();
console.log(list());
console.log(size());