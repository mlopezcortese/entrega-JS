function plazoFijoArg(capital, dias){
    return (capital * dias * 75)/36500
}

function plazoFijoDol(capital, dias){
    return (capital * dias * 0.3)/36500
}

let seleccion = prompt ("Seleccionar tipo de plazo fijo \n 1-Plazo fijo en pesos \n 2-Plazo fijo en dolares")
let capital = prompt("Ingrese capital")
let dias = prompt("ingrese plazo")

switch(seleccion){
    case "1":
        alert(plazoFijoArg(capital, dias));
        console.log(plazoFijoArg(capital, dias));
        break;
    
    case "2":
        alert(plazoFijoDol(capital, dias));
        console.log(plazoFijoDol(capital, dias));
        break;
    default:
        break;
}