

/*
let clave = 'river';
//funcion
function login() {

    let access = false;

    for (let i = 5; i >= 0; i--) {
        let claveGuardada = prompt('Ingresa tu Clave. Tienes ' + (i+1)  + ' oportunidades.')
        if (claveGuardada === clave) {
            alert('Ingreso exitoso. Bienvenido/a');
            access = true;
            break;
        } else {
            alert('Contraseña incorrecta. Te quedan ' + i + ' intentos.')
        }
    }

   return access
}


if (login()) {
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
}
*/

//declare la clase paquete para archivar los distintos componentes, a eso le cree un arrai con las distintas partes del paquete, para esto me base en la actividad de la clase 7 del workbook y le agregue y cambie algunas cosas

class paquete{
    constructor (nombre,costo,beneficios,categoria){
        this.nombre = nombre;
        this.costo = parseFloat(costo);
        this.beneficios = beneficios;
        this.categoria = parseInt (categoria);
    }
}
 

const paquetes = [];
paquetes.push(new paquete("IMPULSO",1000,["C.Ahorro", "Tc Visa"],1));
paquetes.push(new paquete("CRECIMIENTO",2000,["C.Ahorro","Tc Visa","Tc Master"],2))
paquetes.push(new paquete("EVOLUCION",3000,["C.Ahorro","Tc Visa","Tc Master","C.Ahorro Dol",],2));
paquetes.push(new paquete("LOGROS",4000,["C.Ahorro","Tc Visa","Tc Master","C.Ahorro Dol", "cta cte"],4));

localStorage.setItem("paquetes", JSON.stringify(paquetes));




let guardadasLS = localStorage.getItem("paquetes");
if (guardadasLS != null) {
    let seleccionPaq = JSON.parse(guardadasLS);
    let venta = "Seleccionar Paquete \n";
    for (let i = 0; i< seleccionPaq.length; i++) {
        venta += i + " = " + seleccionPaq[i].nombre + " " + seleccionPaq[i].beneficios + "$" + seleccionPaq[i].costo + '\n';
    }
    alert(venta);
    let eleccion = parseInt(prompt("Seleccione Paquete"));
    if ((eleccion >= 0) && (eleccion < seleccionPaq.length)) {
        alert(" Paquete Seleccionado " + seleccionPaq[eleccion].nombre + " Contiene: " + seleccionPaq[eleccion].beneficios)
      
    } else{
        alert ( "Seleccione una de las opciones disponibles")
    }
}

//aca agrego un descuento del 50% para primeros clientes.
let paqGuardados = localStorage.getItem("paquetes");
if (paqGuardados != null) {
    let seleccionPaq = JSON.parse(paqGuardados);
    seleccionPaq.forEach(paquete => { paquete.costo -= (paquete.costo * 50)/100});
    
    localStorage.setItem("paquetes", JSON.stringify(seleccionPaq));
}

//agregue el elemmento POP para quitar el ultimo paquete del array
paquetes.pop()
console.log(paquetes)


//agregue un filtro para encontrar paquetes con un costo menor a $3000
const resultado = paquetes.filter((el) =>el.costo <3000)
console.log(resultado)

/*/
localStorage.clear()
*/


