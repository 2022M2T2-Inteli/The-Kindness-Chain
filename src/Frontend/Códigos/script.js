api = 'http://localhost:1324'

/*
$(document).ready(() => {
   users.login();
});
*/
var users = {
  login() {
      var done = false; 
      var email = document.getElementById("email").value;
      var senha = document.getElementById("senha").value;
      var select = document.getElementById("selecionarCargo");
      var categoria = select.options[select.selectedIndex].value;
      switch(categoria){
        case "educador":
          $.ajax({
            url: api + '/usereducador',
            type: 'GET',
            success: data => {
              data.forEach(element => {
                console.log(element.nome);
                console.log(element.email);
                console.log(element.senha);
                
                if(email === element.email && senha === element.senha){
                  window.location.href = "Voluntarios/lista.html";
                  //console.log(email + "" + senha)
                  done = true;
                }
              });
            }
          });
        case "assistente":
          $.ajax({
            url: api + '/assistente',
            type: 'GET',
            success: data => {
              data.forEach(element => {
                console.log(element.nome);
                console.log(element.email);
                console.log(element.senha)
                
                if(email === element.email && senha === element.senha){
                  window.location = "páginaFichas/index.html";
                  //console.log(email + "" + senha)
                  done = true;
                }         
              });
            }
          })
          
      }
  }
  
};


//Essa função serve para o vuluntário se cadastrar

var vol = {

  insert() {
      var atividade = document.getElementById("ativVol").value.trim();
      var nome = document.getElementById("nome").value.trim();
      var contato = document.getElementById("contato").value.trim();
      var disponibilidade = document.getElementById("disp").value.trim();
      if (atividade && nome && contato && disponibilidade) {
              $.ajax({
                  url: api + '/volinsert',
                  type: 'POST',
                  data: {atividade: atividade, nome: nome, contato: contato, disponibilidade: disponibilidade},
              }).done(function () {
                  console.log(atividade);
                  console.log(nome);
                  console.log(contato);
                  console.log(disponibilidade);

              }).fail(function (msg) {
                  //console.log('FAIL');
              }).always(function (msg) {
                  //console.log('ALWAYS');
              });
          
      }
  },
  delete(IDvoluntario) {

    if (confirm('Confirma a exclusão?')) {
        $.ajax({
            type: 'POST',
            url: api + '/voldelete',
            data: {IDvoluntario: IDvoluntario},
        }).done(function () {
            users.list();
        }).fail(function (msg) {
            //console.log('FAIL');
        }).always(function (msg) {
            //console.log('ALWAYS');
        });
    }
},

};

//Essa função serve para visualizar os voluntários cadastrados

var voluntarios=[];//Vetor para armazenar os voluntários
function addPessoa(id,atividade,nome, contato, disponibilidade){//Metodo para adicionar os produtos no array
  console.log("oi")
  voluntarios[voluntarios.length] = {id:id,atividade:atividade,nome:nome,contato:contato,disponibilidade:disponibilidade};
  console.log(voluntarios);
}

//Exemplo adicionando os produtos
$.ajax({
  url: api + '/getvol',
  crossDomain: true,
  headers: {'Access-Control-Allow-Origin': '*' },
  type: 'GET',
  success: data => {
    data.forEach(element => {
      addPessoa(element.IDvoluntario, element.atividade, element.nome, element.contato, element.disponibilidade);

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
  $('.voluntarios').remove();//Limpa a lista de produtos
  var txtbusca=$("#input").val().toLowerCase();//Captura texto digitado e converte para minusculo
  //Percorre a lista de produtos e imprime ocorrencias verdadeiras
  for(var i=0;i<voluntarios.length;i++){
    var atividade=voluntarios[i].atividade.toLowerCase();
    var cod=voluntarios[i].id;
    if(atividade.match(txtbusca)){//Busca por atividade
      listarPessoas(i);
      p_listados++;
    }else if(txtbusca==cod){//Busca por código
      listarPessoas(i);
      p_listados++;
    }
  }
  $('#p_listados').html(p_listados);//Mostra quantidade encontrada
  $('#p_total').html(voluntarios.length);//Mostra quantidade total de produtos cadastrados
}
 function listarPessoas(i){//Lista o produto do indece do array produto informado
    if(i!=null){
      $('tbody').append("<tr class='produto'><td>"+voluntarios[i].id+"</td><td>"+voluntarios[i].atividade+"</td><td>"+voluntarios[i].nome+"</td><td>"+voluntarios[i].contato+"</td><td>"+voluntarios[i].disponibilidade+"</td><td><button class='deletar' onclick='vol.delete(" + voluntarios[i].id + ")'><i class='fa-solid fa-trash-can'></i></button></td></tr>");
    }
  }


buscar();//Inicializa mostrando todos os itens existentes


