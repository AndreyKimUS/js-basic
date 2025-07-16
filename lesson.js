/* const arr = ["!", "JS", "Love", "I"];
const arr2 = [];
for (i = arr.length; i > 0; i-- ){
    arr2.push(arr[i -1 ]);
}
const str = arr2.join(" ");
console.log(str); */


// let pow = (a) => (b) => b ** a;
// console.log(pow (2)(3));


const arr = [2, 3, 8, 10, 1, 4];

function some(array, elem){
    for (el of array){
        if (el == elem) {
            return true;
            break;
        }
    }
    return false;
}

console.log(some(arr, 11));