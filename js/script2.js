let nameProductA = "Renders";
let precioProductA = 500;
let stockProductA = 15;

let nameProductB = "Animations";
let precioProductB = 1500;
let stockProductB = 10

let nameProductC = "Photos";
let precioProductC = 800;
let stockProductC = 10;

let cantidadDeCompras = parseInt(prompt("¿Que cantidad de productos desea llevar el dia de hoy? \n- 1 \n- 2 \n- 3"))
let precioFinal = 0;

function calculoPrecio(cantidad, precio){
    precioFinal += cantidad * precio
}

function calculoStock(cantidad, stock, precio){
    if(stock >= cantidad){
        calculoPrecio(cantidad, precio)
        alert("El precio total es de: $" + (cantidad * precio))
    }
    else{
        alert("No tenemos en stock ese producto en este momento. Nuestro stock actual es de: " + stock + " unidades")
    }
}

//que sucede si el usuario por error teclea una letra?
//incluir la iteración FOR adentro de un condicional (si es un numero que haga tal cosa y sino: que haga tal otra ==> volver a preguntar)
for(i = 0; i < cantidadDeCompras ; i++){

    let CompraInicio = prompt("¿Cual de nuestros productos disponibles quiere comprar? Porfavor elija entre estas opciones: \n- Renders \n- Animations \n- Photos")
    //utilizar camelCase en lugar de PascalCase
    //let cantidadBuy = parseInt(prompt("Excelente, ¿Cuantos quiere comprar? "))
    //esta variable está mal definida acá ya que si el usuario teclea cualquier cosa: me pregunta igualmente CUANTOS QUIERE
    //y eso está mal
    if(CompraInicio == "Renders"){ //usar los métodos correspondientes para comparar correctamente
        let cantidadBuy = parseInt(prompt("Excelente, ¿Cuantos quiere comprar? ")) //acá está usada correctamente
        calculoStock(cantidadBuy, stockProductA, precioProductA) //y mejor seria hacer el pedido adentro de la función
    }
    else if(CompraInicio == "Animations"){ let cantidadBuy = parseInt(prompt("Excelente, ¿Cuantos quiere comprar? ")) //idem comentario anterior
        calculoStock(cantidadBuy , stockProductB, precioProductB)
    }
    else if(CompraInicio == "Photos"){
        let cantidadBuy = parseInt(prompt("Excelente, ¿Cuantos quiere comprar? ")) //idem comentario anterior
        calculoStock(cantidadBuy, stockProductC, precioProductC)
    }
    else{
        alert("Lo sentimos, no contamos con ese producto")
    }
}

//console.log(precioFinal) //comentar los console.log una vez que verificamos que se cargó bien la variable
switch(true){ 
    case precioFinal < 1000: //esta condicion creo que no sería necesaria que tenga un descuento
        precioFinal = precioFinal * 0.90 //esto se repite: usar una función que tenga como parámetro el % de descuento
        alert("Perfecto, ademas te regalamos un 10% de descuento por tu compra!")
        break;
    case precioFinal <= 1000 || precioFinal < 3000: //los signos <= tenés que cambiarlo por >= (para indicar correctamente el intervalo)
        precioFinal = precioFinal * 0.85
        alert("Perfecto, ademas te regalamos un 15% de descuento por tu compra!")
        break;
    case precioFinal <= 3000 || precioFinal < 7000: //los signos <= tenés que cambiarlo por >= (para indicar correctamente el intervalo)
        precioFinal = precioFinal * 0.70
        alert("Perfecto, ademas te regalamos un 30% de descuento por tu compra!")
        break;
    default: //esta condicion se va a dar para valores mayores a 7000 y no es un error
        //deberías investigar la forma de que si en lugar de un numero ingresa una letra o numero negativo
        //indique este error
        console.log(precioFinal)
        alert("Estamos confundidos, porfavor ingresa un precio en numeros!")
        break;
}

function aplicoIva(price){
    console.log(price) //consologueá siempre para chequear como entra el parámetro en la función o para verificar una correcta operación
    return price * 1.21
}

let impuestoAplicado = aplicoIva(precioFinal)
alert ("El precio final con impuestos es de: " + impuestoAplicado)