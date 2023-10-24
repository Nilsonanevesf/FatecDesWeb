var $nome = document.getElementById('nome');
let quantidadePacotes = document.querySelectorAll("input[name='pacotes']").length;
var $pacotesArray = document.querySelectorAll("input[name='pacotes']");
function calcular(){
    
    console.log(quantidadePacotes)
    
    console.log($pacotesArray)

    for(var i=0;i<quantidadePacotes;i++){
        console.log($pacotesArray[i].value);
    }
}