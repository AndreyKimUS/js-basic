/* const arr = ["!", "JS", "Love", "I"];
const arr2 = [];
for (i = arr.length; i > 0; i-- ){
    arr2.push(arr[i -1 ]);
}
const str = arr2.join(" ");
console.log(str); */

const operations = [1000, - 1300, -500, 700, 900];
let balance = 100;

function balanceScore (oper){
    for (elem of oper){
        balance = balance + elem;
    }
    return balance;
}

function isUnderBalance(oper, initialBalance){
    let finalBalance = initialBalance;
    for (const elem of oper){
        finalBalance += elem;
        if (finalBalance < 0) {
            return false;
        }  
    }
    return true;
}
console.log(balanceScore(operations));
console.log(isUnderBalance(operations, balance));