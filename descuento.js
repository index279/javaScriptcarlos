let compra = parseFloat(prompt("digite el valor de la  compra"));
 des1 = (compra * 10)/100;
 des2 = (compra * 20)/100;
resta1 = compra - des1;
resta2 = compra - des2;
   (compra > 100) ? alert("el valor a pagar es " + resta1) : 
(compra > 200) ? alert("el valor a pagar es " + resta2) :
alert("no hay descuento");    