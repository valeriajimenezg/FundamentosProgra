/** ejemplo con console.log 

let operacion = "3";
let numero1 = "5";
let numero2 = "10";

switch(operacion){
    case "1":
        console.log("suma")
        break;
    case "2":
        console.log("resta")
        break;
    case "3":
        console.log("division")
        break;
    case "4":
        console.log("multiplicacion")
        break;
    
    default:
        console.log ("no se reconoce su numero");
        break
}
*/

/** Practica, el resultado se ve en Inspect + Console */

let operacion;
operacion = prompt ("Digite cual de las siguientes operaciones desea realizar: 1- Suma 2- Resta 3- Multiplicacion 4-Divison: ")
let numero1 = prompt ("Inserte el primer valor: ")
let numero2 = prompt ("Inserte el segundo valor: ")

switch(operacion){
    case "1":
        resultado = parseInt(numero1) + parseInt(numero2) 
        console.log("El resultado de la suma es " + resultado )
        break;
    case "2":
        resultado = parseInt(numero1) - parseInt(numero2) 
        console.log("El resultado de la resta es " + resultado )
        break;
    case "3":
        resultado = parseInt(numero1) * parseInt(numero2) 
        console.log("El resultado de la multiplicacion es " + resultado )
        break;
    case "3":
        resultado = parseInt(numero1) / parseInt(numero2) 
        console.log("El resultado de la division es " + resultado )
        break;
        
    default:
        console.log ("no se reconoce su numero");
        break
}

/** 
suma = parseInt(numero1) + parseInt(numero2)
resta = parseInt(numero1) - parseInt(numero2)
multiplicacion = parseInt(numero1) * parseInt(numero2)
division = parseInt(numero1) / parseInt(numero2)

if (operacion == "1"){
    alert("La respuesta es " + suma)
}
if (operacion == "2"){
    alert("La respuesta es " + resta)
}
if (operacion == "3"){
    alert("La respuesta es " + multiplicacion)
}
if (operacion == "4"){
    alert("La respuesta es " + division)
} */