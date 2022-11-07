let numShowing = 0;

let total = document.createTextNode(numShowing);
let space = document.querySelector(".total");
space.appendChild(total);
let currentOperator;

document.querySelector("#zero").addEventListener("click", function(){
    changeNum("0")
});

document.querySelector("#one").addEventListener("click", function(){
    changeNum("1")
});

document.querySelector("#two").addEventListener("click", function(){
    changeNum("2")
});

document.querySelector("#three").addEventListener("click", function(){
    changeNum("3")
});

document.querySelector("#four").addEventListener("click", function(){
    changeNum("4")
});

document.querySelector("#five").addEventListener("click", function(){
    changeNum("5")
});

document.querySelector("#six").addEventListener("click", function(){
    changeNum("6")
});

document.querySelector("#seven").addEventListener("click", function(){
    changeNum("7")
});

document.querySelector("#eight").addEventListener("click", function(){
    changeNum("8")
});

document.querySelector("#nine").addEventListener("click", function(){
    changeNum("9")
});


function changeNum(number){
    total = document.createTextNode(number);
    space.appendChild(total);
}

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a,b,operator){
    if(operator == "+"){
        return add(a,b);
    }
    if(operator == "-"){
        return add(a,b);
    }
    if(operator == "*"){
        return add(a,b);
    }
    if(operator == "/"){
        return add(a,b);
    }
}

