function simularEmprestimo() {
    var principal = parseFloat(prompt("Digite o valor do empréstimo:"));
    var taxaDeJuros = parseFloat(prompt("Digite a taxa de juros em porcentagem:"));
    var numeroDeParcelas = parseInt(prompt("Digite o número de parcelas:"));
  

  
    var valorParcela = principal / numeroDeParcelas;
  
    for (var i = 0; i < numeroDeParcelas; i++) {
      var juros = principal * (taxaDeJuros / 100);
      var amortizacao = valorParcela - juros;
  
      console.log("Parcela " + (i + 1) + ":");
      console.log("Valor da Parcela: R$" + valorParcela.toFixed(2));
      console.log("Juros: R$" + juros.toFixed(2));
      console.log("Amortização: R$" + amortizacao.toFixed(2));
      console.log("______________________");
  
      principal -= amortizacao;
    }
  
    alert("A simulação de empréstimo foi concluída favor verificar no console");
  }
  
  simularEmprestimo();