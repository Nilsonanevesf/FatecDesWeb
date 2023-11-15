var $nome = document.getElementById('nome');
let quantidadePacotes = document.querySelectorAll("input[name='pacotes']").length;
var $pacotesArray = document.querySelectorAll("input[name='pacotes']");
var $adicionais = document.getElementsByClassName('adicionais');
var $alimentacaoCheck = document.getElementById('c1');
var $veiculoCheck = document.getElementById('c2');
var $transladoCheck = document.getElementById('c3');
var $output= document.getElementById('output');
function calcular(){
    
    console.log(quantidadePacotes)
    
    console.log($pacotesArray)

    let pacoteValue = document.querySelectorAll("input[name='pacotes']:checked")[0]? Number(document.querySelectorAll("input[name='pacotes']:checked")[0].value) : 0;


    pacoteValue = calcularAdicionais(pacoteValue);
    

    $output.textContent = `Caro(a) ${$nome.value}. Seu valor final é R$${pacoteValue}` 
    // for(var i=0;i<quantidadePacotes;i++){
    //     if($pacotesArray[i].checked){
    //         console.log($pacotesArray[i].value);
    //     }
    // }
}

function calcularAdicionais(valorInicial){

    let valorFinal = valorInicial

    if($alimentacaoCheck.checked){
        valorFinal = valorFinal + Number($alimentacaoCheck.value)
    }

    if($veiculoCheck.checked){
        valorFinal = valorFinal + Number($veiculoCheck.value)
    }

    if($transladoCheck.checked){
        valorFinal = valorFinal + Number($transladoCheck.value)
    }

    return valorFinal
}