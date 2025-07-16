const array = ["11.12.2024", '11/25/2024', '42.12.1984', '12/11/-2013', '01.10.2583'];
const newArray = [];
array.forEach((el) => {
    const dateArr = el.split(/[./]/);
    if (dateArr[0] > 0 && dateArr[0] < 32) {
        if (dateArr[1] > 0 && dateArr[1] < 13){
            if (dateArr[2]> 0 && dateArr[1] < 10000){
                newArray.push(dateArr.join('.'));
            }
        } 
    }
    })
console.log(newArray);