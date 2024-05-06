function fn0 (){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 0;
}
function fn1 (){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 1;
}
function fn2 (){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 2;
}
function fn3 (){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 3;
}
function fn4 (){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 4;
}
function fn5 (){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 5;
}
function fn6 (){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 6;
}
function fn7 (){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 7;
}
function fn8 (){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 8;
}
function fn9 (){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 9;
}
function fnER(){
    let previous =document.getElementById("display").innerHTML;
    let erasePre = previous.slice(0,-1);
    document.getElementById("display").innerHTML= erasePre;
}

let op;
let firstSave;
function fnAD(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=0;
    op="+";
}
function fnMN(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=0;
    op="-";
}
function fnML(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=0;
    op="*";
}
function fnDV(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=0;
    op="/";
}
function fnEQ(){
    let secondSave = document.getElementById("display").innerHTML;
    if(op== "+"){
        document.getElementById("display").innerHTML = parseInt(firstSave) + parseInt(secondSave);
    }
    else if(op == "-"){
        document.getElementById("display").innerHTML = parseInt(firstSave) - parseInt(secondSave);
    }
    else if(op == "*"){
        document.getElementById("display").innerHTML = parseInt(firstSave) * parseInt(secondSave);
    }
    else if(op == "/"){
        document.getElementById("display").innerHTML = parseInt(firstSave) / parseInt(secondSave);
    }

    else{
        document.getElementById("display").innerHTML ="Invalid !";
    }
}function fnAC(){
    document.getElementById("display").innerHTML = "0";
    op = 0;
}



