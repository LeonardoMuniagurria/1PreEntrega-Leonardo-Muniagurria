let NombreIngresado = prompt("Ingrese su nombre:")
let numeroIngresado = parseInt(prompt("Ingrese su edad:"))

for(i = 1 ; i <= numeroIngresado ; i++){
    
    console.log(i)
    alert( NombreIngresado + ","   + " contaremos tu edad de menor a mayor: " +   i);
}