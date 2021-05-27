var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');
var iniciar = document.getElementById('iniciar');
        
var cronometroSeg;
        
var minutoAtual;
var segundoAtual;
        
var interval;
        
for(var i = 0; i <= 60; i++){
    minutos.innerHTML+='<option value="'+i+'"> '+i+'</option>';
}

for(var i = 0; i <= 60; i++){
    segundos.innerHTML+='<option value="'+i+'"> '+i+'</option>';
}

iniciar.addEventListener('click', function () {
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;

    interval = setInterval(function () {

        segundoAtual--;
        if (segundoAtual <= 0) {
            if (minutoAtual > 0) {
                minutoAtual--;
                segundoAtual = 59;
            }
            else {
                alert("Fim da Contagem");
                /*document.getElementById("sound").play();*//*Espaço para por o som*/
                clearInterval(interval);
            }
        }

        display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;

    }, 1000);
})