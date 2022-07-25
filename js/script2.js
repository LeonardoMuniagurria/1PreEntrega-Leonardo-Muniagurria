function productos(nombre, stock, precio){
    this.nombre = nombre
    this.stock = stock
    this.precio = precio 
    this.iva = function (precio){
        console.log(precio)
        return precio * 1.21
    }
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


productoA.iva()
productoB.iva()
productoC.iva()


let cantidadDeCompras = parseInt(prompt("¿Que cantidad de productos desea llevar el dia de hoy? \n-1  \n-2  \n-3" ))
let precioFinal = 0;

function calculoPrecio(cantidad, precio){
    precioFinal += cantidad * precio
}


function calculoStock(cantidad, productos){
    if(productos.stock >= cantidad){
        calculoPrecio(cantidad, productos.precio)
        alert("El precio total de tu producto es de: " + cantidad * productos.precio)
    }
    else{
        alert("No tenemos en stock ese producto en este momento. Nuestro stock actual es de: " + productos.stock + " unidades")
    }
}



//que sucede si el usuario por error teclea una letra?
//incluir la iteración FOR adentro de un condicional (si es un numero que haga tal cosa y sino: que haga tal otra ==> volver a preguntar)
for(i = 0; i < cantidadDeCompras ; i++){

    let CompraInicio = prompt("¿Cual de nuestros productos disponibles quiere comprar? Porfavor elija entre estas opciones: \n" + nuevosProductos.join("\n") )
    let cantidadBuy = parseInt(prompt("Excelente, ¿Cuantos quiere comprar? "))

    if(CompraInicio == productoA.nombre){
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
