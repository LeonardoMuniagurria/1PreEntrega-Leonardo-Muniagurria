function Productos (nombre, stock, precio){ //las funciones constructoras se definen con PascalCase (es decir, arrancan con mayúsculas)
    this.nombre = nombre //seria mejor usar CLASE que funcion constructora
    this.stock = stock
    this.precio = precio 
    this.precioMasIva = precio*1.21
}
    //this.precioMasIva = precio*1.21 //seria mejor asignar una nueva propiedad mas que un nuevo modelo, pero eso va a depender de lo que quieras hacer


const productoA = new Productos("Renders", 15, 500)
const productoB = new Productos("Animations", 10, 1500)
const productoC = new Productos("Photos", 10, 800)
const productoE = new Productos("Peluches", 15, 1500)
const productoD = new Productos("Videos", 20, 600)


let productosVentas = [productoA, productoB, productoC, productoE, productoD]
let nuevosProductos = []
console.log(nuevosProductos)
productosVentas.push(nuevosProductos)


function listaProductos(){
    for(const productos of productosVentas){
        nuevosProductos.push(productos.nombre)
    }
}
listaProductos()




let cantidadDeCompras = parseInt(prompt("¿Que cantidad de productos desea llevar el dia de hoy? \n-1  \n-2  \n-3" ))
//que pasa si ingreso cualquier cosa que no sea 1 2 o 3??? armar la condicion correspondiente para la pre-entrega



let precioFinal = 0;

function calculoPrecio(cantidad, precio){ //que funcion cumple esta funcion??? 
    precioFinal += cantidad * precio
}


function calculoStock(cantidad, productos){
    if(productos.stock >= cantidad){
        calculoPrecio(cantidad, productos.precio) //que se hace con esto??? optimizar un poco esta logica para la entrega
        alert("El precio total de tu producto es de: " + cantidad * productos.precio) //si ya realicé cuentas en la linea 48, porque sigo haciendolas acá?
    }
    else{
        alert("No tenemos en stock ese producto en este momento. Nuestro stock actual es de: " + productos.stock + " unidades")
    }
}



//que sucede si el usuario por error teclea una letra?
//incluir la iteración FOR adentro de un condicional (si es un numero que haga tal cosa y sino: que haga tal otra ==> volver a preguntar)
for(i = 0; i < cantidadDeCompras ; i++){

    if(cantidadDeCompras > 3){
        alert("Seleccionaste un numero que no es correcto");
        break;
    }

    let CompraInicio = prompt("¿Cual de nuestros productos disponibles quiere comprar? Porfavor elija entre estas opciones: \n" + nuevosProductos.join("\n") )
    

    let cantidadBuy = parseInt(prompt("Excelente, ¿Cuantos quiere comprar? "))
    //si no existe: por que me pregunta cuantos quiero??? corregir esta logica


    switch(CompraInicio){
        case "Renders" :
            calculoStock(cantidadBuy, productoA)
            break;
        case "Animations" :
            calculoStock(cantidadBuy , productoB)
            break;
        case "Photos" :
            calculoStock(cantidadBuy, productoC)
            break;
        case "Videos" :
            calculoStock(cantidadBuy, productoD)
            break;
        case "Peluches" :
            calculoStock(cantidadBuy, productoE)
            break;
        default:
            alert("Lo sentimos, no contamos con ese producto")
    }
      
}

const resultados = [150, 300, 250, 500, 300, 1000, 900];
function buscar (elemento){
    return elemento >= 400
}
console.log(resultados.find(buscar))