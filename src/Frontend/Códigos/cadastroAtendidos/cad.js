api = 'http://localhost:1324';

var cad = {

    insert() {
        var nomePessoa = document.getElementById("nomePessoa").value.trim();
        var cpf_rg = document.getElementById("cpfrg").value.trim();
        var servSoc  = document.getElementById("servsoc").value.trim();
        var servPass = document.getElementById("servpass").value.trim();
        var dataIn = document.getElementById("data_in").value.trim();
        var enc = document.getElementById("encaminhamento").value.trim();
        var motivos = document.getElementById("motivos").value.trim();
        if (nomePessoa && cpf_rg && servSoc && servPass && dataIn && enc && motivos) {
                $.ajax({
                    url: api + '/assistinsert',
                    type: 'POST',
                    data: {nomeSocial: nomePessoa, CPF_RG: cpf_rg, serviçosSociais: servSoc, serviçosSociaisPassados: servPass, dataChegada: dataIn, encaminhamento: enc, motivosRua: motivos},
                }).done(function () {
                    alert("dados enviados com sucesso");

                }).fail(function (msg) {
                    //console.log('FAIL');
                }).always(function (msg) {
                    //console.log('ALWAYS');
                });
            
        }
    },

}


var pessoas=[];//Vetor para armazenar os produtos
function addPessoa(id,nome,toalha){//Metodo para adicionar os produtos no array
  console.log("oi")
  pessoas[pessoas.length] = {id:id,nome:nome,toalha:toalha};
  console.log(pessoas);
}

//Exemplo adicionando os produtos
$.ajax({
  url: api + '/usersassist',
  crossDomain: true,
  headers: {'Access-Control-Allow-Origin': '*' },
  type: 'GET',
  success: data => {
    data.forEach(element => {
      addPessoa(element.IDcadastro, element.nomeSocial, element.toalha);
    });
  }
});

$("#input").keypress(function(e){//Adiciona ação de actionkey no input
  if(e.which == 13) {
    buscar();
  }
});

$("#buscar").click(function(){//Adiciona ação ao botão
  buscar();
});

function buscar(){//Função responsavel de buscar os produtos
  $('tbody').html("");
  var p_listados=0;//Inicia contador de produtos encontrados
  $('.pessoas').remove();//Limpa a lista de produtos
  var txtbusca=$("#input").val().toLowerCase();//Captura texto digitado e converte para minusculo
  //Percorre a lista de produtos e imprime ocorrencias verdadeiras
  for(var i=0;i<pessoas.length;i++){
    var nome=pessoas[i].nome.toLowerCase();
    var cod=pessoas[i].id;
    if(nome.match(txtbusca)){//Busca por nome
      listarPessoas(i);
      p_listados++;
    }else if(txtbusca==cod){//Busca por código
      listarPessoas(i);
      p_listados++;
    }
  }
  $('#p_listados').html(p_listados);//Mostra quantidade encontrada
  $('#p_total').html(pessoas.length);//Mostra quantidade total de produtos cadastrados
}
 function listarPessoas(i){//Lista o produto do indece do array produto informado
    if(i!=null){
      //$('tbody').append("<tr class='produto'><td>"+pessoas[i].id+"</td><td>"+pessoas[i].nome+"</td><td>"+pessoas[i].tempoRua+"</td><td>"+pessoas[i].localizacao+"</td><td>"+pessoas[i].outrasInfo+"</td><td><button class='cadastrar'><i class='fa-solid fa-plus'></i></button></td><td><a href='mapUpdate.html' onclick='maps.list(" + pessoas[i].id + "," + pessoas[i].nome + "," + pessoas[i].tempoRua + "," + pessoas[i].localizacao + "," + pessoas[i].outrasInfo + ")'><button class='alterar'><i class='fa-solid fa-pen-to-square'></i></button></td><td><button class='deletar' onclick='user.delete(" + pessoas[i].id + ")'><i class='fa-solid fa-trash-can'></i></button></td></tr>");
      //$('tbody').append("<tr class='produto'><td>"+pessoas[i].id+"</td><td>"+pessoas[i].nome+"</td><td>"+pessoas[i].tempoRua+"</td><td>"+pessoas[i].localizacao+"</td><td>"+pessoas[i].outrasInfo+"</td><td><button class='cadastrar'><i class='fa-solid fa-plus'></i></button></td><td><button class='alterar' onclick='maps.list(" + pessoas[i].id + ",\"" + pessoas[i].nome + ",\"" + pessoas[i].tempoRua + ",\"" + pessoas[i].localizacao + ",\"" + pessoas[i].outrasInfo + ")'><i class='fa-solid fa-pen-to-square'></i></button></td><td><button class='deletar' onclick='user.delete(" + pessoas[i].id + ")'><i class='fa-solid fa-trash-can'></i></button></td></tr>");    
      //$('tbody').append("<tr class='produto'><td>"+pessoas[i].id+"</td><td>"+pessoas[i].nome+"</td><td>"+pessoas[i].tempoRua+"</td><td>"+pessoas[i].localizacao+"</td><td>"+pessoas[i].outrasInfo+"</td><td><button class='cadastrar'><i class='fa-solid fa-plus'></i></button></td><td><button class='alterar' onclick='maps.list()'><i class='fa-solid fa-pen-to-square'></i></button></td><td><button class='deletar' onclick='user.delete(" + pessoas[i].id + ")'><i class='fa-solid fa-trash-can'></i></button></td></tr>");    

      $('tbody').append("<tr class='produto'><td>"+pessoas[i].id+"</td><td>"+pessoas[i].nome+"</td><td>"+pessoas[i].toalha+"</td><td><button class='cadastrar'><i class='fa-solid fa-plus'></i></button></td></tr>");
    }
  }


buscar();//Inicializa mostrando todos os itens existentes