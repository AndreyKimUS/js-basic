const arr1 = [10, 5, 2, 9, 12, 6, 15];

function checkElem(elem){
    if (elem > 6){
        return true;
    }
    return false;
}

function cleanArr (array, func){
    let innerArr = array;
    for (let i = innerArr.length - 1; i >= 0; i--){
        if (func(innerArr[i]) == true){
            innerArr.splice(i, 1);
        }
    }
    return innerArr;
}

console.log(cleanArr(arr1, checkElem));