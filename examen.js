let peso = parseFloat(prompt("Digite su  peso en kilogramos"));
let estatura = parseFloat(prompt("Digite su  estaura"));
IMC = peso /(estatura*estatura);

if (IMC < 18.5){
    alert(IMC + " Bajo peso ")
}
else if ( IMC >= 18.5 && IMC < 25 ){
    alert( IMC + " Peso normal")
}
else if (IMC >= 25 && IMC < 30){
    alert( IMC + " Sobre peso")
}
else if (IMC > 30 ){
    alert(IMC + " Obeso")
}