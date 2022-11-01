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
    let ubicacion = prompt("Ingrese la ubicacion").toLowerCase();

    let resultado = calculadora(metros, ubicacion);
    alert(`Su propiedad de ${metros} metros cuadrados ubicado un ${ubicacion} tiene un valor aproximado de $${resultado} dolares`);
}





















// class Inmueble{
//     constructor(info){
//         this.ubicacion = info.ubicacion;
//         this.propiedad = info.propiedad;
//         this.ambiente = info.ambiente;
//     }
// }

// let inmueble1 = new Inmueble({
//     ubicacion: prompt("Ingrese una ubicacion disponible: Belgrano-Colegiales-Palermo-Recoleta-Caballito-Almagro"),
//     propiedad: prompt("Ingrese un tipo de propiedad disponible: Departamento-Casa-Terreno-Local"),
//     ambiente: prompt("Ingrese una cantidad de ambientes disponible: Monoambiente-2 Ambientes-3 Ambientes-4 Ambientes-5 Ambientes"),
// })

// alert(inmueble1);












