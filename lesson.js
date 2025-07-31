'use strict'

const userInfo = {
    balance: 0,
    operations: 0,
    increse(sum){
        this.balance += sum;
        this.operations++;
    }
}

function newObj(user){
    return function(){
        
    }

// function removePassword(reset){
//     if(reset){
//         this.password = undefined;      
//    } else {
//         this.password = '1';
//    }
// };

// const user = {
//     login: '23423',
//     password: 'Tristan',
// };

// const removePasswordUser = removePassword.bind(user, true);
// removePasswordUser();
// console.log(user);


// const company = {
//     name: 'OOO AGRO',
//     employees: [
//         {
//             name: 'Sveta'
//         }
// ],
//     CEO: {
//         name: 'Vasya',
//     },
//     getName: function (){
//         return this.name;
//     },


//     }

// }


/* const arr = ["!", "JS", "Love", "I"];
const arr2 = [];
for (i = arr.length; i > 0; i-- ){
    arr2.push(arr[i -1 ]);
}
const str = arr2.join(" ");
console.log(str); */


// let pow = (a) => (b) => b ** a;
// console.log(pow (2)(3));


// const arr = [2, 3, 8, 10, 1, 4];

// function some(array, elem){
//     for (el of array){
//         if (el == elem) {
//             return true;
//             break;
//         }
//     }
//     return false;
// }

// console.log(some(arr, 11));