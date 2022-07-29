//LO QUE VAYAS CORRIGIENDO: BORRA MI COMENTARIO Y HACEME UNA DEVOLUCION SI PUDISTE O SI SE TE COMPLICO
//DEJATE UNA VERSION COMENTADA DEL ARCHIVO Y UNA "LIMPIA" SIN LOS COMENTARIOS

function Productos (nombre, stock, precio){ //las funciones constructoras se definen con PascalCase (es decir, arrancan con mayúsculas)
    this.nombre = nombre //seria mejor usar CLASE que funcion constructora
    this.stock = stock
    this.precio = precio 
    this.precioMasIva = precio*1.21
}

const productoA = new Productos("Renders", 15, 500)
const productoB = new Productos("Animations", 10, 1500)
const productoC = new Productos("Photos", 10, 800)
const productoE = new Productos("Peluches", 15, 1500)
const productoD = new Productos("Videos", 20, 600)

let productosVentas = [productoA, productoB, productoC, productoE, productoD]
let nuevosProductos = []
//console.log(nuevosProductos)
//productosVentas.push(nuevosProductos) //esto que hace?
//SPOILER ALERT: pushea un array vacio al array con todos tus productos (y no está bien!)

function listaProductos(){
    for(const productos of productosVentas){
        nuevosProductos.push(productos.nombre)
    }
}
listaProductos()

let cantidadDeCompras = 0 //defino
//que pasa si ingreso cualquier cosa que no sea 1 2 o 3??? armar la condicion correspondiente para la pre-entrega
//SPOILER ALERT: no pasa nada :(
//y no deberia ser así, la forma correcta seria preguntarle al usuario esto mientras NO CUMPLA con las opciones disponibles
//esto se hace con la estructura de DO-WHILE
do {
    cantidadDeCompras = parseInt(prompt("¿Que cantidad de productos desea llevar el dia de hoy?")) //redefine el usuario
}
while (isNaN(cantidadDeCompras) || cantidadDeCompras<1)

let precioFinal = 0

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

//ESTA FUNCION ES MAS OPTIMA QUE LAS DOS QUE TENES ARRIBA
function sumarProductos(cant,precio){
    let subTotal = cant * precio
    precioFinal += cant * precio
    alert("El subTotal es: $" + subTotal + ". El precio total es: $" + precioFinal)
}

//que sucede si el usuario por error teclea una letra?
//incluir la iteración FOR adentro de un condicional (si es un numero que haga tal cosa y sino: que haga tal otra ==> volver a preguntar)
for(i = 0; i < cantidadDeCompras ; i++){
    //ESTA VERIFICACION no se hace acá, se supone que es un numero ya "aprobado" en el DO-WHILE del prompt que pide este dato
/*     if(cantidadDeCompras > 3){
        alert("Seleccionaste un numero que no es correcto");
        break;
    } */
    //mismo problema? que sucede si el usuario teclea cualquier otra cosa???
    //let compraInicio = prompt("¿Cual de nuestros productos disponibles quiere comprar? Porfavor elija entre estas opciones: \n" + nuevosProductos.join("\n") )
    //let cantidadBuy = parseInt(prompt("Excelente, ¿Cuantos quiere comprar? "))
    //si no existe: por que me pregunta cuantos quiero??? corregir esta logica
/*     switch(CompraInicio){ //uso incorrecto del switch YA QUE TODAS LAS OPCIONES/CASOS son iguales!
        case "Renders" : //hay que usar directamente funciones
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
    } */
    let compraInicio = ""
    let productoEncontrado = {}
    for (let i=1; i<=cantidadDeCompras; i++) {
        do {
            compraInicio = prompt ("Ingrese el nombre del producto que quiere comprar: \n" + nuevosProductos.join("\n"))
            //console.log(compraInicio)        
            productoEncontrado = productosVentas.filter(cadaElementoDelArray => cadaElementoDelArray.nombre.toLowerCase() === compraInicio.toLowerCase())        
            //console.log(productoEncontrado)
            productoEncontrado = productoEncontrado[0]
            //console.log(productoEncontrado)
        }
        while (!productoEncontrado)
        //luego pregunto CUANTOS quiere comprar?
        let cantidad = 0
        do {
            cantidad = parseInt (prompt ("Ingrese la cantidad de " + productoEncontrado.nombre + " que desea comprar:"))
        }
        while (isNaN(cantidad) || cantidad<1 || cantidad>productoEncontrado.stock)
        //sabiendo la cantidad: realizo las cuentas correspondientes:
        sumarProductos(cantidad,productoEncontrado.precio)      
    }
}

//esto que hace???
/* 
const resultados = [150, 300, 250, 500, 300, 1000, 900];
function buscar (elemento){
    return elemento >= 400
}
console.log(resultados.find(buscar)) */