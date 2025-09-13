function suma(){
    let numero1 = [3,7,9,4,2]
    let numero2 = [2,5,7,3,9]
    let respuesta = []
    for (let i = 0 ; i < numero1.length;i++)
        { 
     respuesta[i] = numero1[i] + numero2[i]
    }
        console.log(respuesta)
    }
    suma();