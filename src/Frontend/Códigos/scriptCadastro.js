api = 'http://localhost:1324'


//$(document).ready(() => {
   // users.list();
//});

var user = {

    insert() {
        var nome = document.getElementById("nome").value;
        if (nome) {
            if (nome.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/educadorinsert',
                    data: {nome: nome},
                }).done(function () {
                    console.log(nome);
                }).fail(function (msg) {
                    //console.log('FAIL');
                }).always(function (msg) {
                    //console.log('ALWAYS');
                });
            }
        }
    },


  

}