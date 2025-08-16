console.log(8>2);
console.log(2<1);
console.log(2==1);
console.log(2=='2');
console.log(2==='2');

let edad = 12;
let mensaje = (edad >= 18)  ? "eres mayor de edad" : "eres menor de edad";
console.log(mensaje);

if (7 % 2 == 0){
    console.log("par");
}
if (7 % 2 != 0){
    console.log("impar");
}

if (8 % 2 == 0){
    console.log("par");
}
if (8 % 2 != 0){
    console.log("impar");
}

7 % 2 == 0 ? console.log("par") : console.log("impar");
8 % 2 === 0 ? console.log(" par") : console.log("impar");

let cara = parseFloat(prompt("digite el valor de un lado del cuadrado"));
let area = (cara > 0 ) ? (cara * cara ) : "la medida de la cara  debe ser mayor a 0";
console.log(area);
alert("el area del cuadrado es " + area);