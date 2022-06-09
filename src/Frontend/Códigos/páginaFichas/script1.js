var pessoas=[];//Vetor para armazenar os produtos
function addPessoa(id,nome,tempoRua,localizacao, outrasInfo){//Metodo para adicionar os produtos no array
  console.log("oi")
  pessoas[pessoas.length] = {id:id,nome:nome,tempoRua:tempoRua,localizacao:localizacao,outrasInfo:outrasInfo};
  console.log(pessoas);
}

//Exemplo adicionando os produtos
const api = "http://localhost:1324"
$.ajax({
  url: api + '/users',
  crossDomain: true,
  headers: {'Access-Control-Allow-Origin': '*' },
  type: 'GET',
  success: data => {
    data.forEach(element => {
      addPessoa(element.IDcadastro, element.nomePessoa, element.tempoRua, element.localização, element.outrasInfos);

    });
  }
});


//addProduto(id_produto,'Piso Vinílico Porto Design','0m²','R$ 79,90');
//addProduto('T8002','Piso Laminado Durafloor','40m²','R$ 49,90');
//addProduto('T8003','Piso Laminado Eucafloor','33m²','R$ 37,90');
//addProduto('T8004','Porcelanato Eliane','0m²','R$ 102,90');

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
      $('tbody').append("<tr class='produto'><td>"+pessoas[i].id+"</td><td>"+pessoas[i].nome+"</td><td>"+pessoas[i].tempoRua+"</td><td>"+pessoas[i].localizacao+"</td><td>"+pessoas[i].outrasInfo+"</td></tr>");
    }
  }


buscar();//Inicializa mostrando todos os itens existentes
