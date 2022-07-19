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

for(i = 0; i < cantidadDeCompras ; i++){

    let CompraInicio = prompt("¿Cual de nuestros productos disponibles quiere comprar? Porfavor elija entre estas opciones: \n- Renders \n- Animations \n- Photos")
    let cantidadBuy = parseInt(prompt("Excelente, ¿Cuantos quiere comprar? "))

    if(CompraInicio == "Renders"){
        calculoStock(cantidadBuy, stockProductA, precioProductA)
       
    }
    else if(CompraInicio == "Animations"){
        calculoStock(cantidadBuy , stockProductB, precioProductB)
       
    }
    else if(CompraInicio == "Photos"){
        calculoStock(cantidadBuy, stockProductC, precioProductC)
       
    }
    else{
        alert("Lo sentimos, no contamos con ese producto")
        
    }
      
}

console.log(precioFinal)
switch(true){ 
    case precioFinal < 1000:
        precioFinal = precioFinal * 0.90
        alert("Perfecto, ademas te regalamos un 10% de descuento por tu compra!")
        break;
    case precioFinal <= 1000 || precioFinal < 3000:
        precioFinal = precioFinal * 0.85
        alert("Perfecto, ademas te regalamos un 15% de descuento por tu compra!")
        break;
    case precioFinal <= 3000 || precioFinal < 7000: 
        precioFinal = precioFinal * 0.70
        alert("Perfecto, ademas te regalamos un 30% de descuento por tu compra!")
        break;
    default: 
        console.log(precioFinal)
        alert("Estamos confundidos, porfavor ingresa un precio en numeros!")
        break;
}
    


function aplicoIva(price){
    console.log(price)
    return price * 1.21
}

let impuestoAplicado = aplicoIva(precioFinal)
alert ("El precio final con impuestos es de: " + impuestoAplicado)