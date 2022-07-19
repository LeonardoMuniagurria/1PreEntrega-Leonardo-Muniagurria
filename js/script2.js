let nameProductA = "Renders";
let precioProductA = 500;
let stockProductA = 15;

let nameProductB = "Animations";
let precioProductB = 1500;
let stockProductB = 10

let nameProductC = "Photos";
let precioProductC = 800;
let stockProductC = 10;

//tratemos de usar SIEMPRE un único idioma para todo
let cantidadDeCompras = prompt("¿Que cantidad de productos desea llevar el dia de hoy? \n- 1 \n- 2 \n- 3") //usar parseInt
let priceFinal = 0;

//que sucede si el usuario por error teclea una letra?
//incluir la iteración FOR adentro de un condicional (si es un numero que haga tal cosa y sino: que haga tal otra ==> volver a preguntar)
for(i = 0; i < cantidadDeCompras ; i++){
    //los nombres de las variables con camelCase (PascalCase se utilizará en REACT y para otro tipo de "variables")
    let StartBuy = prompt("¿Cual de nuestros productos disponibles quiere comprar? Porfavor elija entre estas opciones: \n- Renders \n- Animations \n- Photos")
    let cantidadBuy = parseInt(prompt("Excelente, ¿Cuantos quiere comprar? "))
    //alert(" Perfecto, en caso de superar un monto de 5000, estara participando de un sorteo. Le deseamos suerte.") //esta alerta es innecesaria (genera una mala UX)

    if(StartBuy == "Renders"){ //utilizar los métodos aprendidos para mejorar esta condicion
        if(stockProductA >= cantidadBuy){
            priceFinal += cantidadBuy * precioProductA
            alert("Su precio es de : $" + (cantidadBuy * precioProductA))
        }
        else{
            alert("Ahora mismo, no disponemos de ese stock. A continuacion nuestro stock actual es de: " + stockProductA + "Entrantes")
        }
       
    }
    else if(StartBuy == "Animations"){ //es igual a renders, emplear una funcion
        if(stockProductB >= cantidadBuy){
            priceFinal += cantidadBuy * precioProductB
            alert("Su precio es de : $" + (cantidadBuy * precioProductB))
        }
        else{
            alert("Ahora mismo, no disponemos de ese stock. A continuacion nuestro stock actual es de: " + stockProductA + "Entrantes")
        }
       
    }
    else if(StartBuy == "Photos"){ //es igual a los dos anterior, usar una función
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
console.log(priceFinal)
switch(true){ //ya que estamos trabajando con numeros, ordenemos las condiciones de menor a mayor
    case priceFinal < 1000:
        priceFinal = priceFinal * 0.90
        alert("Perfecto, ademas te regalamos un 10% de descuento por tu compra!")
        break;
    case priceFinal <= 1000 || priceFinal < 3000: //corregí esta condicion
        priceFinal = priceFinal * 0.85
        alert("Perfecto, ademas te regalamos un 15% de descuento por tu compra!")
        break;
    case priceFinal <= 3000 || priceFinal < 7000: //corregí esta condicion
        priceFinal = priceFinal * 0.70
        alert("Perfecto, ademas te regalamos un 30% de descuento por tu compra!")
        break;
    case priceFinal >= 7000: //corregí esta condicion
        priceFinal = priceFinal * 0.50
        alert("Perfecto, ademas te regalamos un 50% de descuento por tu compra!")
        break;
    default: //cuando sucedería esto??
        console.log(priceFinal)
        alert("Estamos confundidos, porfavor ingresa un precio en numeros!")
        break;
}

function aplicoIva(price){
    console.log(price) //consologueá siempre para chequear como entra el parámetro en la función o para verificar una correcta operación
    return price * 1.21
}

let impuestoAplicado = aplicoIva(priceFinal)
alert ("El precio final con impuestos es de: " + impuestoAplicado)