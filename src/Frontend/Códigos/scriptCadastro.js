api = 'http://localhost:1324'


//$(document).ready(() => {
   // users.list();
//});

var user = {

    insert() {
        var nome = document.getElementById("nome").value.trim();
        var email = document.getElementById("email").value.trim();
        var senha = document.getElementById("senha").value.trim();
        var select = document.getElementById("selecionarCargo");
        var categoria = select.options[select.selectedIndex].value;
        switch(categoria){
            case "educador":
                if (nome && email && senha) {
                    $.ajax({
                        type: 'POST',
                        url: api + '/educadorinsert',
                        data: {nome: nome, email: email, senha: senha},
                    }).done(function () {
                        //console.log(nome);
                        //console.log(email);
                        //console.log(senha);
                    }).fail(function (msg) {
                        //console.log('FAIL');
                    }).always(function (msg) {
                        //console.log('ALWAYS');
                    });
                
            }
            case "assistente":
                if (nome && email && senha) {
                    $.ajax({
                        type: 'POST',
                        url: api + '/usercad',
                        data: {nome: nome, email: email, senha: senha},
                    }).done(function () {
                        var retorno = confirm("Cadastro realizado com sucesso!");
                        if (retorno == true){
                            window.location.href = "login.html";
                        }
                        else{
                            window.location.href = "cadastrar.html";
                        }
                        //console.log(nome);
                        //console.log(email);
                        //console.log(senha);
                    }).fail(function (msg) {
                        //console.log('FAIL');
                    }).always(function (msg) {
                        //console.log('ALWAYS');
                    });
                
            }
        }
        
    },
}