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