api = 'http://localhost:1324'


//$(document).ready(() => {
   // users.list();
//});

var user = {

    insert() {
        var nome = document.getElementById("nome").value.trim();
        var email = document.getElementById("email").value.trim();
        var senha = document.getElementById("senha").value.trim();
        if (nome && email && senha) {
                $.ajax({
                    type: 'POST',
                    url: api + '/educadorinsert',
                    data: {nome: nome, email: email, senha: senha},
                }).done(function () {
                    console.log(nome);
                    console.log(email);
                    console.log(senha);
                }).fail(function (msg) {
                    //console.log('FAIL');
                }).always(function (msg) {
                    //console.log('ALWAYS');
                });
            
        }
    },


  

}