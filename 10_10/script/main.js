var lampada = document.getElementById('lampada');
var rotation = 0;
var isPiscaPisca = false;

function ligaDesliga(){
    if(lampada.getAttribute('src')==='img/luzLigada.gif'){
        desligar();
        return
    }
    ligar();
}

function ligar(){
    lampada.src = 'img/luzLigada.gif';
}

function desligar(){
    lampada.setAttribute('src', 'img/luzDesligada.gif');
}

function rotacionar(){
    rotation = rotation + 10;
    lampada.style.transform = `rotate(${rotation}deg)`;
}


function voltarNoTempo(){
    if(lampada.style.filter !== `grayscale(100%)`){
        lampada.style.filter = `grayscale(100%)`;
        return
    }
    lampada.style.filter = `grayscale(0%)`;
}

function brilharMais(){
    if(lampada.style.filter !== `brightness(110%)` && lampada.getAttribute('src')==='img/luzLigada.gif'){
        lampada.style.filter = `brightness(110%)`;
        return
    }
    lampada.style.filter = `brightness(100%)`;
}

function piscaPisca(){
    if(!isPiscaPisca){
        return
    }
    ligaDesliga()
}setInterval(piscaPisca,500)