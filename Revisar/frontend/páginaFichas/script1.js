var produto=[];//Vetor para armazenar os produtos
function addProduto(id,nome,estoque,preco){//Metodo para adicionar os produtos no array
  console.log("oi")
  produto[produto.length] = {id:id,nome:nome,estoque:estoque,preco:preco};
}

//Exemplo adicionando os produtos
addProduto('T8001','Piso Vinílico Porto Design','0m²','R$ 79,90');
addProduto('T8002','Piso Laminado Durafloor','40m²','R$ 49,90');
addProduto('T8003','Piso Laminado Eucafloor','33m²','R$ 37,90');
addProduto('T8004','Porcelanato Eliane','0m²','R$ 102,90');

$("#input").keypress(function(e){//Adiciona ação de actionkey no input
  if(e.which == 13) {
    buscar();
  }
});

$("#buscar").click(function(){//Adiciona ação ao botão
  buscar();
});

function buscar(){//Função responsavel de buscar os produtos
  var p_listados=0;//Inicia contador de produtos encontrados
  $('.produto').remove();//Limpa a lista de produtos
  var txtbusca=$("#input").val().toLowerCase();//Captura texto digitado e converte para minusculo
  //Percorre a lista de produtos e imprime ocorrencias verdadeiras
  for(var i=0;i<produto.length;i++){
    var nome=produto[i].nome.toLowerCase();
    var cod=produto[i].id.toLowerCase();
    if(nome.match(txtbusca)){//Busca por nome
      listarProduto(i);
      p_listados++;
    }else if(txtbusca==cod){//Busca por código
      listarProduto(i);
      p_listados++;
    }
  }
  $('#p_listados').html(p_listados);//Mostra quantidade encontrada
  $('#p_total').html(produto.length);//Mostra quantidade total de produtos cadastrados
}
 function listarProduto(i){//Lista o produto do indece do array produto informado
    if(i!=null){
      $('tbody').append("<tr class='produto'><td>"+produto[i].id+"</td><td>"+produto[i].nome+"</td><td>"+produto[i].estoque+"</td><td>"+produto[i].preco+"</td></tr>");
    }
  }


buscar();//Inicializa mostrando todos os itens existentes
