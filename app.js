let numUser = +prompt("Ingrese un numero");
let suma = 0;
let type;


function sum(){
    suma = numUser * numUser
    
}

function esPar(){
    if(suma % 2 == 0) return type = true;
    else return type = false
}


sum();
esPar();

function showType(){
    if(type == true) alert("Tu numero multiplicado por si mismo es par");
    else alert("Tu numero multiplicado por si mismo es impar")
}

showType();


