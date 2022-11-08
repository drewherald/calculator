let numShowing = 0;
let opCounter = 0;
let numHold = 0;
let op = " ";
let first = true;

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

document.addEventListener('keyup', (event) => {
    const keyName = event.key;
    console.log(keyName);
    if(keyName==="0"){
        changeNum("0");
    }
    if(keyName==="1"){
        changeNum("1");
    }
    if(keyName==="2"){
        changeNum("2");
    }
    if(keyName==="3"){
        changeNum("3");
    }
    if(keyName==="4"){
        changeNum("4");
    }
    if(keyName==="5"){
        changeNum("5");
    }
    if(keyName==="6"){
        changeNum("6");
    }
    if(keyName==="7"){
        changeNum("7");
    }
    if(keyName==="8"){
        changeNum("8");
    }
    if(keyName==="9"){
        changeNum("9");
    }
    if(keyName==="+"){
        if(opCounter==0){
            numHold = numShowing;
            opCounter = 1;
            op = "+";
            numShowing = 0;
            first = false;
        } else{
            numShowing = operate(numHold,numShowing,op);
            space.innerHTML=numShowing;
            numHold = numShowing;
            console.log(numHold);
            first = false;
            op = "+";
        }
    }
    if(keyName==="-"){
        if(opCounter==0){
            numHold = numShowing;
            opCounter = 1;
            op = "-";
            numShowing = 0;
            first = false;
        } else{
            numShowing = operate(numHold,numShowing,op);
            space.innerHTML=numShowing;
            numHold = numShowing;
            console.log(numHold);
            first = false;
            op = "-";
        }
    }
    if(keyName==="*"){
        if(opCounter==0){
            numHold = numShowing;
            opCounter = 1;
            op = "*";
            numShowing = 0;
            first = false;
        } else{
            numShowing = operate(numHold,numShowing,op);
            space.innerHTML=numShowing;
            numHold = numShowing;
            console.log(numHold);
            first = false;
            op = "*";
        }
    }
    if(keyName==="/"){
        if(opCounter==0){
            numHold = numShowing;
            opCounter = 1;
            op = "/";
            numShowing = 0;
            first = false;
        } else{
            numShowing = operate(numHold,numShowing,op);
            space.innerHTML=numShowing;
            numHold = numShowing;
            console.log(numHold);
            first = false;
            op = "/";
        }
    }
    if(keyName==="Enter"){
        if(opCounter>0){
            numShowing = operate(numHold,numShowing,op);
            space.innerHTML=numShowing;
            opCounter = 0;
            first = true;
        } 
    }
    if(keyName==="Escape"){
        clear();
    }
});


document.querySelector("#plus").addEventListener("click", function(){
    if(opCounter==0){
        numHold = numShowing;
        opCounter = 1;
        op = "+";
        numShowing = 0;
        first = false;
    } else{
        numShowing = operate(numHold,numShowing,op);
        space.innerHTML=numShowing;
        numHold = numShowing;
        first = false;
        op = "+";
    }
    
});

document.querySelector("#minus").addEventListener("click", function(){
    if(opCounter==0){
        numHold = numShowing;
        opCounter = 1;
        op = "-";
        numShowing = 0;
        first = false;
    } else{
        numShowing = operate(numHold,numShowing,op);
        space.innerHTML=numShowing;
        numHold = numShowing;
        console.log(numHold);
        first = false;
        op = "-";
    }
});

document.querySelector("#mult").addEventListener("click", function(){
    if(opCounter==0){
        numHold = numShowing;
        opCounter = 1;
        op = "*";
        numShowing = 0;
        first = false;
    } else{
        numShowing = operate(numHold,numShowing,op);
        space.innerHTML=numShowing;
        numHold = numShowing;
        console.log(numHold);
        first = false;
        op = "*";
    }
});

document.querySelector("#div").addEventListener("click", function(){
    if(opCounter==0){
        numHold = numShowing;
        opCounter = 1;
        op = "/";
        numShowing = 0;
        first = false;
    } else{
        numShowing = operate(numHold,numShowing,op);
        space.innerHTML=numShowing;
        numHold = numShowing;
        first = false;
        op = "/";
    }
});

document.querySelector("#equals").addEventListener("click", function(){
    if(opCounter>0){
        numShowing = operate(numHold,numShowing,op);
        space.innerHTML=numShowing;
        opCounter = 0;
        first = true;
    } 
});

document.querySelector("#clear").addEventListener("click", function(){
    clear();
});


function changeNum(number){
    if(first){
        numShowing = parseInt(`${space.textContent}${number}`,10);
        total = document.createTextNode(numShowing);
        space.innerHTML=numShowing;
    }else{
        numShowing = 0;
        total = document.createTextNode(numShowing);
        space.innerHTML=numShowing;
        numShowing = parseInt(`${space.textContent}${number}`,10);
        total = document.createTextNode(numShowing);
        space.innerHTML=numShowing;
        first = true;
    }
    
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
    if(b==0){
        alert("Hey!!!! You can't do that!");
        numShowing = 0;
        space.innerHTML=numShowing;
        clear();
        return 0;
    }
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
        return Math.round(divide(a,b)*100)/100;
    }
}

function clear(){
    numShowing = 0;
    space.innerHTML=numShowing;
    opCounter = 0;
    op = " ";
    first = true;
    numHold = 0;
}

