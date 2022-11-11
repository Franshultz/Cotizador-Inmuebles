// Formulario para ingresar
function registro(){
    alert("Para comenzar necesita registrarse por favor");
    while (true){
        let nombre = prompt("Ingrese su nombre:");
        if(nombre != ""){
            let apellido = prompt("Ingrese su apellido:");
            if(apellido != ""){
                let edad = prompt("Ingrese su edad:");
                if(edad >= 18 && edad != ""){
                    let email = prompt("Ingrese su email:");
                    if(email != ""){
                        alert("Registro Terminado");
                        alert(`Bienvenido ${nombre}! Ya puedes cotizar tu hogar al mejor precio!`);
                        break;
                    }else{
                        alert("Ingrese un email para continuar");
                    }
                }else{
                    alert("Ingrese una edad para continuar (solo mayor de edad)") ;  
                }
            }else{
                alert("Ingrese un apellido para continuar");
            }
        }else{
            alert("Ingrese un nombre para continuar");
        }
    }
}

registro();

// simulacion de cotizador por metro cuadrado en diferentes zonas
function operacion(ubicacion){
    switch (ubicacion) {
        case "belgrano":
            return "Tu propiedad en esta zona tiene un estimado de: $2.300 dolares x metro cuadrado";

        case "palermo":
            return "Tu propiedad en esta zona tiene un estimado de: $2.150 dolares x metro cuadrado";
                
        case "recoleta":
            return "Tu propiedad en esta zona tiene un estimado de: $2.050 dolares x metro cuadrado";
                    
        case "colegiales":
            return "Tu propiedad en esta zona tiene un estimado de: $2.000 dolares x metro cuadrado";

        case "caballito":
            return "Tu propiedad en esta zona tiene un estimado de: $1.900 dolares x metro cuadrado";

        case "almagro":
            return "Tu propiedad en esta zona tiene un estimado de: $1.800 dolares x metro cuadrado";

        default:
            return "Ingrese una ubicacion disponible";
    }
}

let respuesta = operacion(prompt("Ingrese una ubicacion disponible para cotizar tu inmueble: Belgrano-Colegiales-Palermo-Recoleta-Caballito-Almagro").toLowerCase());
alert(respuesta)


// simulacion de cotizador de inmuebles por metros cuadrados especificos por zona
function calculadora(metros, ubicacion) {
    switch (ubicacion) {
        case "belgrano":
            return metros * 2300;
            break;

        case "palermo":
            return metros * 2150;
            break;

        case "recoleta":
            return metros * 2050;
            break;

        case "colegiales":
            return metros * 2000;
            break;
            
        case "caballito":
            return metros * 1900;
            break;
                
        case "almagro":
            return metros * 1800;
            break;
                
        default:
            return "Operacion no valida";
            break;
    }
}

let cuentas = prompt("¿Desea saber cuanto puede valer su propiedad exactamente por metros cuadrados?").toLowerCase();
if (cuentas === "si") {
    let metros = parseInt(prompt("Ingrese numero de metros cuadrados"));
    let ubicacion = prompt("Ingrese nombre de barrio disponible (Belgrano-Colegiales-Palermo-Recoleta-Caballito-Almagro)").toLowerCase();

    let resultado = calculadora(metros, ubicacion);
    alert(`Su propiedad de ${metros} metros cuadrados ubicado un ${ubicacion} tiene un valor aproximado de $${resultado} dolares`);
}

// Declaro un objeto con arrays que contienen propiedades a la venta
const propiedades = [
    {id:1, Propiedad:"Departamento", Barrio:"palermo", Ubicacion:"Armenia 2349", Ambientes:"1", Precio: 75000},
    {id:2, Propiedad:"Local", Barrio:"recoleta", Ubicacion:"Beruti 2951", Ambientes:"3", Precio: 130000},
    {id:3, Propiedad:"Departamento", Barrio:"palermo", Ubicacion:"Borges 2123", Ambientes:"2", Precio: 100000},
    {id:4, Propiedad:"Departamento", Barrio:"belgrano", Ubicacion:"Monroe 2053", Ambientes:"2", Precio: 110000},
    {id:5, Propiedad:"Casa", Barrio:"palermo", Ubicacion:"Paraguay 4286", Ambientes:"6", Precio: 235000},
    {id:6, Propiedad:"Terreno", Barrio:"caballito", Ubicacion:"Thompson 1424", Ambientes:"0", Precio: 150000},
    {id:7, Propiedad:"Departamento", Barrio:"belgrano", Ubicacion:"Ramsay 1948", Ambientes:"3", Precio: 170000},
    {id:8, Propiedad:"Departamento", Barrio:"recoleta", Ubicacion:"Laprida 2170", Ambientes:"4", Precio: 200000},
    {id:9, Propiedad:"Casa", Barrio:"almagro", Ubicacion:"San luis 3308", Ambientes:"8", Precio: 300000},
    {id:10, Propiedad:"Local", Barrio:"colegiales", Ubicacion:"Jorge Newbery 3320", Ambientes:"5", Precio: 180000},
];

// Filtrador por Ubicacion (barrio)
let buscador = prompt("¿Desea buscar propiedades para comprar?")
if (buscador != "no") {
    let filtro = (prompt(
        `Ingrese un barrio disponible dentro de uestro catalogo para filtrar entre los resultados: Belgrano-Colegiales-Palermo-Recoleta-Caballito-Almagro`
    ).toLowerCase());
    let encontrado = propiedades.filter(i => i.Barrio === filtro)
    if (encontrado) {
        encontrado.forEach(i => {
        let mensaje = 
        `Propiedad: ${i.Propiedad}
        Direccion: ${i.Ubicacion}
        Ambientes: ${i.Ambientes}
        Precio: $${i.Precio}`
        alert(mensaje)
    });
    } else {
        alert("No hay proiedades disponibles por el momento")
    }
} else {
    alert("Muchas gracias por confiar en nosotros, hasta luego")
}

// Agregar propiedad en venta
let xd = prompt("¿Desea agregar una propiedad a la venta?")
if (xd != "no") {
    class Venta{
        constructor (propiedad, barrio, ubicacion, ambientes, precio){
            this.propiedad = propiedad
            this.barrio = barrio
            this.ubicacion = ubicacion
            this.ambientes = ambientes
            this.precio = precio
        }
    }
    let tipoPropiedad = prompt("Ingrese el tipo de propiedad")
    let barrio = prompt("Ingrese el barrio donde se encuentra su propiedad")
    let direccion = prompt("Ingrese la direccion de su propiedad")
    let ambientes = prompt("Ingrese la cantidad de ambientes que tenga")
    let precio = prompt("Ingrese el precio para su propiedad")
    let vender = new Venta
    (tipoPropiedad, barrio, direccion, ambientes, precio)
    propiedades.push(vender)
    propiedades.forEach(i => console.log(i));
    } else {
        alert("Muchas gracias por confiar en nosotros, hasta luego")
    }