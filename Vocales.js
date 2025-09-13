function buscar(vocalB){
  let vocales = ["a" ,"e" , "i" , "o" ,"u"]
  for (let i=0 ; i<vocales.length;i++){
    if (vocalB==vocales[i]){
        alert("vocal enontrada " + vocalB)
       }
       else  {
        alert("cuchifly es gay ")
       }
  }
}
let B = prompt("digite vocal a buscar");
buscar(B);        