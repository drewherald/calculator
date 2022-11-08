let numShowing = 0;
let opCounter = 0;
let numHold = 0;
let op = " ";

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

document.querySelector("#plus").addEventListener("click", function(){
    if(opCounter==0){
        numHold = numShowing;
        opCounter = 1;
        op = "+";
        numShowing = 0;
        space.innerHTML=numShowing;
    }
});

document.querySelector("#minus").addEventListener("click", function(){
    if(opCounter==0){
        numHold = numShowing;
        opCounter = 1;
        op = "-";
        numShowing = 0;
        space.innerHTML=numShowing;
    }
});

document.querySelector("#mult").addEventListener("click", function(){
});

document.querySelector("#div").addEventListener("click", function(){
});

document.querySelector("#equals").addEventListener("click", function(){
    if(opCounter==1){
        numShowing = operate(numHold,numShowing,op);
        space.innerHTML=numShowing;
        opCounter = 0;
    } 
});

document.querySelector("#clear").addEventListener("click", function(){
    clear();
});


function changeNum(number){
    numShowing = parseInt(`${space.textContent}${number}`,10);
    total = document.createTextNode(numShowing);
    space.innerHTML=numShowing;
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
        return subtract(a,b);
    }
    if(operator == "*"){
        return multiply(a,b);
    }
    if(operator == "/"){
        return divide(a,b);
    }
}

function clear(){
    numShowing = 0;
    space.innerHTML=numShowing;
    opCounter = 0;
    op = " ";
}

