function productos(nombre, stock, precio){ //las funciones constructoras se definen con PascalCase (es decir, arrancan con mayúsculas)
    this.nombre = nombre //seria mejor usar CLASE que funcion constructora
    this.stock = stock
    this.precio = precio 
    this.iva = function (precio){
        console.log(precio)
        return precio * 1.21
    }
    //this.precioMasIva = precio*1.21 //seria mejor asignar una nueva propiedad mas que un nuevo modelo, pero eso va a depender de lo que quieras hacer
}

const productoA = new productos("Renders", 15, 500)
const productoB = new productos("Animations", 10, 1500)
const productoC = new productos("Photos", 10, 800)
const productoE = new productos("Peluches", 15, 1500)


let productosVentas = [productoA, productoB, productoC, productoE]

productosVentas.push(new productos("Videos", 20, 600))

let nuevosProductos = []

function listaProductos(){
    for(const productos of productosVentas){
        nuevosProductos.push(productos.nombre)
    }
}
listaProductos()


productoA.iva() //que hace esto???
productoB.iva() //que hace esto???
productoC.iva() //que hace esto???


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

    let CompraInicio = prompt("¿Cual de nuestros productos disponibles quiere comprar? Porfavor elija entre estas opciones: \n" + nuevosProductos.join("\n") )
    //que sucede si el usuario ingresa cualquier producto que no existe???
    let cantidadBuy = parseInt(prompt("Excelente, ¿Cuantos quiere comprar? "))
    //si no existe: por que me pregunta cuantos quiero??? corregir esta logica

    if(CompraInicio == productoA.nombre){ //usar los metodos de comparacion adecuados (toLowerCase(), tuUpperCase(), etc)
        //todo esto no está mal peeero
        //todas las condiciones son caaasi iguales:
            //if (algo==objeto.propiedad) {
                //calculoStock(cant,prod)
                    //que aprendimos a usar para no repetir codigo???
                        //hacer este cambio para la pre-entrega
        calculoStock(cantidadBuy, productoA)
       
    }
    else if(CompraInicio == productoB.nombre){
        calculoStock(cantidadBuy , productoB)
       
    }
    else if(CompraInicio == productoC.nombre){
        calculoStock(cantidadBuy, productoC)
    
       
    }
    else if(CompraInicio == productoD.nombre){
        calculoStock(cantidadBuy, productoD)
    
       
    }
    else if(CompraInicio == productoE.nombre){
        calculoStock(cantidadBuy, productoE)
    
       
    }
    else{
        alert("Lo sentimos, no contamos con ese producto")
        
    }
      
}
