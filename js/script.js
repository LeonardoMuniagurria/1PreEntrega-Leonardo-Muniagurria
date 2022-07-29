//te dejo una version limpia

//TAREA: usar este archivo y en cada linea COMENTAR que hicimos
//esto te va a servir para entender la logica del simulador

//1 crear productos
function Productos (nombre, stock, precio){
    this.nombre = nombre
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

function listaProductos(){
    for(const productos of productosVentas){
        nuevosProductos.push(productos.nombre)
    }
}
listaProductos()

//2 preguntar cantidad de items a comprar
let cantidadDeCompras = 0
do {
    cantidadDeCompras = parseInt(prompt("¿Que cantidad de productos desea llevar el dia de hoy?")) //redefine el usuario
}
while (isNaN(cantidadDeCompras) || cantidadDeCompras<1)

//3 definir la funcion que realizará las cuentas
let precioFinal = 0
function sumarProductos(cant,precio){
    let subTotal = cant * precio
    precioFinal += cant * precio
    alert("El subTotal es: $" + subTotal + ". El precio total es: $" + precioFinal)
}

//4 preguntar que producto y si existe cuantos
for (i = 0; i < cantidadDeCompras ; i++) {
    let compraInicio = ""
    let productoEncontrado = {}
    for (let i=1; i<=cantidadDeCompras; i++) {
        do {
            compraInicio = prompt ("Ingrese el nombre del producto que quiere comprar: \n" + nuevosProductos.join("\n"))
            productoEncontrado = productosVentas.filter(cadaElementoDelArray => cadaElementoDelArray.nombre.toLowerCase() === compraInicio.toLowerCase())        
            productoEncontrado = productoEncontrado[0]
        }
        while (!productoEncontrado)
        let cantidad = 0
        do {
            cantidad = parseInt (prompt ("Ingrese la cantidad de " + productoEncontrado.nombre + " que desea comprar:"))
        }
        while (isNaN(cantidad) || cantidad<1 || cantidad>productoEncontrado.stock)
        sumarProductos(cantidad,productoEncontrado.precio)      
    }
}