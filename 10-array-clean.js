const arr1 = [10, 5, 2, 9, 12, 6, 15];

function checkElem(elem){
    if (elem > 6){
        return true;
    }
    return false;
}

function cleanArr (array, func){
    let innerArr = [];
    for (let i = array.length - 1; i >= 0; i--){
        if (func(array[i]) == true){
            innerArr.push(array[i]);
        }
    }
    return innerArr;
}

console.log(cleanArr(arr1, checkElem));