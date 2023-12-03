//função principal por gerar os recibos
function gerar() {
    let valor = document.getElementById("val").value;
    sessionStorage.setItem('valor', valor);

    let valor_ex = document.getElementById("val_ext").value;
    sessionStorage.setItem('valor_ex', valor_ex);

    let referente = document.getElementById("ref").value;
    sessionStorage.setItem('referente', referente);

    let nomePagador = document.getElementById("nom_pag").value;
    sessionStorage.setItem('nomePagador', nomePagador);
    let CPFPagador = document.getElementById("cpf_pag").value;
    sessionStorage.setItem('CPFPagador', CPFPagador);

    let forma = document.getElementById("for_pag").value;
    sessionStorage.setItem('forma', forma);

    let nomeEmitente = document.getElementById("nom_emi").value;
    sessionStorage.setItem('nomeEmitente', nomeEmitente); 
    let CPF_Emitente = document.getElementById("cpf_emi").value;
    sessionStorage.setItem('CPF_Emitente', CPF_Emitente);
    let RG_Emitente = document.getElementById("rg_emi").value;
    sessionStorage.setItem('RG_Emitente', RG_Emitente);

    let local = document.getElementById("loc").value;
    sessionStorage.setItem('local', local); 
    let dia = document.getElementById("dia").value;
    sessionStorage.setItem('dia', dia);
    let mes = document.getElementById("mes").value;
    sessionStorage.setItem('mes', mes);
    let ano = document.getElementById("ano").value;
    sessionStorage.setItem('ano', ano);

    window.location.href = 'recibo.html';
}

if (window.location.pathname.endsWith("recibo.html")) {
    let valor = sessionStorage.getItem('valor');
    let valor_ex = sessionStorage.getItem('valor_ex');
    let referente = sessionStorage.getItem('referente');
    let nomePagador = sessionStorage.getItem('nomePagador');
    let CPFPagador = sessionStorage.getItem('CPFPagador');
    let forma = sessionStorage.getItem('forma');
    let nomeEmitente = sessionStorage.getItem('nomeEmitente');
    let CPF_Emitente = sessionStorage.getItem('CPF_Emitente');
    let RG_Emitente = sessionStorage.getItem('RG_Emitente');
    let dia = sessionStorage.getItem('dia');
    let mes = sessionStorage.getItem('mes');
    let ano = sessionStorage.getItem('ano');
    let local = sessionStorage.getItem('local');
    let nomeMes;

    // Obtém as referências para os elementos que exibirão os valores
    let valorRecibo = document.getElementById("recibo_val");
    let valor_exRecibo = document.getElementById("recibo_val_ext");
    let referenteRecibo = document.getElementById("recibo_referente");
    let dadosPagador = document.getElementById("recibo_dados_pagador");
    let formaRecibo = document.getElementById("recibo_forma");
    let nomeRecibo = document.getElementById("recibo_nome");
    let RGRecibo = document.getElementById("recibo_rg");
    let CPFRecibo = document.getElementById("recibo_CPF");
    let data = document.getElementById("recibo_data");
    
  
    // Define os valores
    valorRecibo.textContent = "***" + valor + "***";
    valor_exRecibo.textContent = "***(" + valor_ex + ")***";
    referenteRecibo.textContent = "Referente a: " + referente;
    dadosPagador.textContent = "Recebi(emos) de " + nomePagador.toUpperCase() + " - CPF/CNPJ n° " + CPFPagador + " , a importância supra de:";
    formaRecibo.textContent = "Pagamento efetuado em " + forma.toUpperCase() + ".";
    nomeRecibo.textContent = nomeEmitente.toUpperCase();
    CPFRecibo.textContent = "CPF/CNPJ n° " + CPF_Emitente;
    RGRecibo.textContent = "RG/IE n° " + RG_Emitente;

    //referente a data
    if (mes == 1) {
        nomeMes = "Janeiro";
      } else if (mes == 2) {
        nomeMes = "Fevereiro";
      } else if (mes == 3) {
        nomeMes = "Março";
      } else if (mes == 4) {
        nomeMes = "Abril";
      } else if (mes == 5) {
        nomeMes = "Maio";
      } else if (mes == 6) {
        nomeMes = "Junho";
      } else if (mes == 7) {
        nomeMes = "Julho";
      } else if (mes == 8) {
        nomeMes = "Agosto";
      } else if (mes == 9) {
        nomeMes = "Setembro";
      } else if (mes == 10) {
        nomeMes = "Outubro";
      } else if (mes == 11) {
        nomeMes = "Novembro";
      } else if (mes == 12) {
        nomeMes = "Dezembro";
    }

    data.textContent = local.toUpperCase() + ", " + dia + " de " + nomeMes + " de " + ano;
}

function limpar(){
  document.getElementById('val').value = '';
  document.getElementById('val_ext').value = '';
  document.getElementById('ref').value = '';
  document.getElementById('nom_pag').value = '';
  document.getElementById('cpf_pag').value = '';
  document.getElementById('for_pag').value = '';
  document.getElementById('nom_emi').value = '';
  document.getElementById('cpf_emi').value = '';
  document.getElementById('rg_emi').value = '';
  document.getElementById('dia').value = '';
  document.getElementById('mes').value = '';
  document.getElementById('ano').value = '';
  document.getElementById('loc').value = '';
}

function imprimir(){
  var imprimir = document.getElementById('imprimir');
  var voltar = document.getElementById('voltar');

  imprimir.style.backgroundColor = '#ffffff'; 
  imprimir.innerHTML = '';

  voltar.style.backgroundColor = '#ffffff'; 
  voltar.innerHTML = '';

  setTimeout(() => {
    imprimir.style.backgroundColor = '#22665e';
    imprimir.innerHTML = 'Imprimir';

    voltar.style.backgroundColor = '#84202f';
    voltar.innerHTML = 'Voltar';
  }, 1000);

  window.print()
}
