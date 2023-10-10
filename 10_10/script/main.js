var lampada = document.getElementById('lampada')


function ligaDesliga(){
    if(lampada.getAttribute('src')==='img/luzLigada.gif'){
        desligar();
        return
    }
    ligar();
}

function ligar(){
    lampada.src = 'img/luzLigada.gif'
}

function desligar(){
    lampada.setAttribute('src', 'img/luzDesligada.gif');
}