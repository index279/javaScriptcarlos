//dada la edad de la persona, clasificala en: infantil(0-12),adolecente(13-17),Adulto(18-59),Adulto mayor(60+).
let edad = parseInt(prompt("Digite su edad"));
    if (edad > 0 && edad <= 12){
    alert ("infantil")}
  else  if (edad >= 13 && edad <= 17){
    alert ("Aolecente");
}
   else if (edad >= 18 && edad <= 59 ){
        alert("Adulto");
}
   else if (edad >= 60 ){
        alert("Adult mayor");
}
    else{
        alert("papi usted es bobo ponga una edad correcta");
    } 
//operador ternario
 (edad > 0 && edad <= 12) ? alert("Infantil") : (edad >= 13 && edad <= 17) ? alert("Adolecente") 
 : (edad >= 18 && edad <= 59) ? alert("Adulto") : (edad  > 60) ? alert("Adulto Mayor") : 
 alert("papi usted es bobo ponnga una edad correcta");