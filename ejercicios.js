function numeroMayor(){
    var myArray = [13,2,4,35,1,35];
    let max = 0;
    for(let i = 0; i < myArray.length; i++){
        if(max < myArray[i]){
            max = myArray[i];
        }
    }
    let dato = '<label>El numero mayor es: '+ max +'</label>';
    document.getElementById('maxnum').innerHTML = dato;
}

function histograma(){
    var myArray = [1,2,1,3,3,1,2,1,5,1];
    const CantNum = {}
    for (let i = 1; i <= Math.max(...myArray) ; i++){ 
        CantNum[i] = ""; 
    }
    myArray.forEach(e=>CantNum[e] += "*"); 
    document.getElementById('histograma').innerHTML = JSON.stringify(CantNum);
}

function ocurrencias(){
    debugger;
    var myArray = [1,2,2,4,5,6,7,8,8,8];
    const contar = {};

    myArray.forEach((e) => {
        if (contar[e]){
            contar[e] += 1;
        }
        else{
            contar[e] = 1;
        }
    })
    let mayorconteo = 0;
    let dato = null;
    let llaves = Object.keys(contar);

    for(let i = 0; i < llaves.length; i++){
        if(contar[llaves[i]] > mayorconteo){
            dato = llaves[i];
            mayorconteo = contar[llaves[i]];
        }
    }
    let plantilla = '<table border="1">'
    plantilla += '<thead>'
    plantilla += '<th>Longest:</th>'
    plantilla += '<th>Number:</th>'
    plantilla += '</thead>'
    plantilla += '<tbody>'
    plantilla += '<td>' + mayorconteo +'</td>'
    plantilla += '<td>'+ dato +'</td>'
    plantilla += '</tbody>'
    plantilla += '</table>';
    document.getElementById('mayorRepetido').innerHTML = plantilla
}