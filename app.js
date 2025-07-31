'use strict';


function submitForm(operation){
    const input1 = Number(document.querySelector("#first-operator").value);
    const input2 = Number(document.querySelector("#second-operator").value);
    if (!input1 || !input2){
        document.querySelector("#result").innerText = "Введите два числа";
        return;
    } 
    switch(operation) {
        case "increment":
            document.querySelector("#result").innerText = `Результат операции: ${input1 + input2}`;
            break;
        case "decrement":
            document.querySelector("#result").innerText = `Результат операции: ${input1 - input2}`;
            break;
        case "multiplication":
            document.querySelector("#result").innerText = `Результат операции: ${input1 * input2}`;
            break;
        case 'divide':
            document.querySelector("#result").innerText = `Результат операции: ${input1 / input2}`;
            break;
        }
    document.querySelector("#first-operator").value = '';
    document.querySelector("#second-operator").value = '';
}

// function inputChanged(e){
//     if (e.code == 'Enter'){
//         submitForm();
//     }
// }


// function loadFromLocalStorage(){
//     const text = document.querySelector('.panel').innerText;
//     const obj = {
//     innText: text,
// }
// localStorage.setItem(`object`, JSON.stringify(obj));
// const obj2 = JSON.parse(localStorage.getItem(`object`));
// console.log(obj2);}

// function getElement(){
//     const divOne = document.querySelector(`.one span`);
//     console.log(divOne.textContent);
// };

// function getElement2(num){
//     const allDivOne = document.querySelectorAll(`.one`);
//     console.log(allDivOne[num-1].textContent);
// }
// function getById(){
//     console.log(document.querySelector(`#two`).textContent);
// }

// function getByUserId(){
//     console.log(document.querySelector(`[user-id="4"]`).textContent);
// }
// getElement();
// getElement2(2);
// getById();
// getByUserId();
