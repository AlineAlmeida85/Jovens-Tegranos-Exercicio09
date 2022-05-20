console.log("Iniciando....");

  

   


function calcular() {
    console.log("Botao Ok");

    let segundo_1 = document.getElementById("inputSegundo1").value;
    let segundo_2 = document.getElementById("inputSegundo2").value;
    let segundo_3 = document.getElementById("inputSegundo3").value;
    
    // primeiro cálculo
    hora1 = Math.floor(segundo_1 / 3600);
    minutos1 = Math.floor((segundo_1 - (hora1 * 3600)) / 60);
    segundos1 = segundo_1 - (hora1 * 3600) - (minutos1 * 60);

    timeString1 = hora1.toString().padStart(2, '0') + ':' +
    minutos1.toString().padStart(2, '0') + ':' +
    segundos1.toString().padStart(2, '0');    


    // segundo cálculo
    hora2 = Math.floor(segundo_2 / 3600);
    minutos2 = Math.floor((segundo_2 - (hora2 * 3600)) / 60);
    segundos2 = segundo_2 - (hora2 * 3600) - (minutos2 * 60);

    timeString2 = hora2.toString().padStart(1, '0') + ':' +
    minutos2.toString().padStart(1, '0') + ':' +
    segundos2.toString().padStart(1, '0');   
    
    // terceiro cálculo
    hora3 = Math.floor(segundo_3 / 3600);
    minutos3 = Math.floor((segundo_3 - (hora3 * 3600)) / 60);
    segundos3 = segundo_3 - (hora3 * 3600) - (minutos3 * 60);

    timeString3 = hora3.toString().padStart(2, '0') + ':' +
    minutos3.toString().padStart(1, '0') + ':' +
    segundos3.toString().padStart(2, '0');


    document.querySelector('#resultado1').textContent = timeString1;
    document.querySelector('#resultado2').textContent = timeString2;
    document.querySelector('#resultado3').textContent = timeString3;

    console.log(segundo_1);
    console.log(segundo_2);
    console.log(segundo_3);
    console.log(hora1);
    console.log(minutos1);
    console.log(segundos1);
    console.log(timeString1);
    console.log(timeString2);
    console.log(timeString3);
    console.log();
}