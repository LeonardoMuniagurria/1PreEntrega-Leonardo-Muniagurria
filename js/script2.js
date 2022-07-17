let nameProductA = "Renders";
let precioProductA = 500;
let stockProductA = 15;

let nameProductB = "Animations";
let precioProductB = 1500;
let stockProductB = 10

let nameProductC = "Photos";
let precioProductC = 800;
let stockProductC = 10;


let cantidadDeCompras = prompt("¿Que cantidad de productos desea llevar el dia de hoy? \n- 1 \n- 2 \n- 3")
let priceFinal = 0;

for(i = 0; i < cantidadDeCompras ; i++){

    let StartBuy = prompt("¿Cual de nuestros productos disponibles quiere comprar? Porfavor elija entre estas opciones: \n- Renders \n- Animations \n- Photos")
    let cantidadBuy = parseInt(prompt("Excelente, ¿Cuantos quiere comprar? "))
    alert(" Perfecto, en caso de superar un monto de 5000, estara participando de un sorteo. Le deseamos suerte.")

    if(StartBuy == "Renders"){
        if(stockProductA >= cantidadBuy){
            priceFinal += cantidadBuy * precioProductA
            alert("Su precio es de : $" + (cantidadBuy * precioProductA))
        }
        else{
            alert("Ahora mismo, no disponemos de ese stock. A continuacion nuestro stock actual es de: " + stockProductA + "Entrantes")
        }
       
    }
    else if(StartBuy == "Animations"){
        if(stockProductB >= cantidadBuy){
            priceFinal += cantidadBuy * precioProductB
            alert("Su precio es de : $" + (cantidadBuy * precioProductB))
        }
        else{
            alert("Ahora mismo, no disponemos de ese stock. A continuacion nuestro stock actual es de: " + stockProductA + "Entrantes")
        }
       
    }
    else if(StartBuy == "Photos"){
        if(stockProductC >= cantidadBuy){
            priceFinal += cantidadBuy * precioProductC
            alert("Su precio es de : $" + (cantidadBuy * precioProductC))
        }
        else{
            alert("Ahora mismo, no disponemos de ese stock. A continuacion nuestro stock actual es de: " + stockProductA + "Entrantes")
        }
       
    }
    else{
        alert("Lo sentimos, no contamos con ese producto")
        
    }
      
}

switch(true){
    case priceFinal < 3000 || priceFinal < 1500:
        priceFinal = priceFinal * 0.85
        alert("Perfecto, ademas te regalamos un 15% de descuento por tu compra!")
        break;
    case priceFinal < 5000: 
        priceFinal = priceFinal * 0.70
        alert("Perfecto, ademas te regalamos un 30% de descuento por tu compra!")
        break;
    case priceFinal < 7000: 
        priceFinal = priceFinal * 0.50
        alert("Perfecto, ademas te regalamos un 50% de descuento por tu compra!")
        break;
    case priceFinal < 1000:
            priceFinal = priceFinal * 0.30
            alert("Perfecto, ademas te regalamos un 70% de descuento por tu compra!")
            break;
    default:
        console.log(priceFinal)
        alert("Estamos confundidos, porfavor ingresa un precio en numeros!")
        break;
}

function aplicoIva(price){
    return price * 1.21
}

let impuestoAplicado = aplicoIva(priceFinal)
alert ("El precio final con impuestos es de: " + impuestoAplicado)