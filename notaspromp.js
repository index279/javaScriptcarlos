function notas()
{
    let notas = [];
    for (let i = 0 ; i <5; i++){
         let datos = parseFloat(prompt("digite los datos"+i))
         notas[i]=datos;
         alert(notas)
    }
   }
notas();




