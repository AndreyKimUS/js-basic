function encrypt(word){
    let array = word.split('');
    let newArray = [];
    if (word.length < 5){
        newArray[0] = array[1];
        newArray[1] = array[3];
        newArray[2] = array[0];
        newArray[3] = array[2];
    } else{
    newArray[0] = array.at(-2);
    newArray[1] = array [0];
    newArray[2] = array.at(-1);
    newArray[3] = array [2];
    newArray[4] = array [1];
    console.log(newArray);
    array.splice(-2, 1);
    array.splice(-1, 1);
    array.splice(2, 1);
    array.splice(1, 1);
    array.splice(0, 1);
    newArray[5] = array.join("");
    }
    console.log(newArray.join(''));
    return newArray.join('');
}

function decrypt(password, key){
    const array = password.split("");
    let array2 = [];
    let array3 = [];
    if(password.length > 5){
        array2 = array.slice(5).join('');
    array3[0] = array[1];
    array3[1] = array[4];
    array3[2] = array[3];
    array3[3] = array2;
    array3[4] = array[0];
    array3[5] = array[2];
    } else {
        array3[0] = array[2];
        array3[1] = array[0];
        array3[2] = array[3];
        array3[3] = array[1];
    }
    stringFinal = array3.join('');
    return stringFinal == key ? true : false;
}
encrypt('demolition');
console.log(decrypt('odnmeoliti', 'demolition'));