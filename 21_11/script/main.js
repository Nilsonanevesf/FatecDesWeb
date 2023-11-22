var $elemento = document.getElementById("pesquisa");
var $tempoElemento = document.getElementById("pesquisaTempo");

$elemento.addEventListener("click", async function () {
  document.getElementById("resultado").innerText = "";
  var valor = document.getElementById("cep").value;
  if (valor == "") alert("Informe o CEP");
  else {
    var cep = valor.replace(/\D/g, "");
    var validacep = /^[0-9]{8}$/;

    if (validacep.test(cep)) {
      var api = "https://viacep.com.br/ws/" + cep + "/json/";
      let resposta = await fetch(api);
      dados = await resposta.json();
      console.log(dados);
      if (dados.erro)
        document.getElementById("resultado").innerText = "CEP Não Existe";
      else
        document.getElementById(
          "resultado"
        ).innerText = `${dados.logradouro}, ${dados.bairro}, ${dados.localidade}-${dados.uf}`;
    }
    //if (!(resposta.ok))
    else alert("cep inválido");
  }
});

$tempoElemento.addEventListener("click", async function () {
  document.getElementById("resultado").innerText = "";
  var valor = document.getElementById("cidade").value;
  if (valor == "") alert("Informe a cidade");
  else {
    var cidade = valor;
    var key = "29f2ea53e7777b4831d4d548b453f3bc";
    var api = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric`;
    let resposta = await fetch(api);
    dados = await resposta.json();
    console.log(dados);
    if (dados.cod === "404") {
      document.getElementById("resultado").innerText = "Cidade Não Existe";
    } else {
      document.getElementById(
        "resultado"
      ).innerText = `${dados.name}-${dados.sys.country}, Temperatura: ${dados.main.temp} °C`;
    }
  }
});
