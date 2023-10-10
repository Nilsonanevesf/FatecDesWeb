salario = document.getElementById('salary')
aumento = document.getElementById('raise')
saidaResultado = document.getElementById('final-result')
botaoCalcular = document.getElementById('calculate')

function calcularAumento(){
    salarioValor = parseFloat(salario.value)
    aumentovalor = parseFloat(aumento.value)
    resultado = salarioValor + salarioValor*aumentovalor*0.01
    if(isNaN(resultado)){
        saidaResultado.innerText = "Valores estão faltando"
        return
    }
    saidaResultado.innerText = "O novo salário é " + resultado;
}
