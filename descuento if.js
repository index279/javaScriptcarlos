let compra = parseFloat(prompt("digite el valor de la  compra"));
 des1 = (compra * 10)/100;
 des2 = (compra * 20)/100;
resta1 = compra - des1;
resta2 = compra - des2;
if (compra > 200.000){
    alert("valor a pagar " + resta2);
}
else if(compra > 100.000 ){
    alert("el valor a pagar es " + resta1);
}
else{
    alert("no hay descuento")
}
