api = 'http://localhost:1324';
var map = {

    insert() {
        var nomePessoa = document.getElementById("nomePessoa").value.trim();
        var tempoRua = document.getElementById("tempoRua").value.trim();
        var localização = document.getElementById("localização").value.trim();
        var outrasInfos = document.getElementById("outrasInfos").value.trim();
        if (nomePessoa && tempoRua && localização && outrasInfos) {
                $.ajax({
                    url: api + '/mapinsert',
                    type: 'POST',
                    data: {nomePessoa: nomePessoa, tempoRua: tempoRua, localização: localização, outrasInfos: outrasInfos},
                }).done(function () {
                    console.log(nomePessoa);
                    console.log(tempoRua);
                    console.log(localização);
                    console.log(outrasInfos);

                }).fail(function (msg) {
                    //console.log('FAIL');
                }).always(function (msg) {
                    //console.log('ALWAYS');
                });
            
        }
    },

    update(IDcadastro, oldNomePessoa, oldTempoRua, oldLocalização, oldOutrasInfos) {

        var nomePessoa = document.getElementById("nomePessoa").value(oldNomePessoa).trim();
        var tempoRua = document.getElementById("tempoRua").value(oldTempoRua).trim();
        var localização = document.getElementById("localização").value(oldLocalização).trim();
        var outrasInfos = document.getElementById("outrasInfos").value(oldOutrasInfos).trim();
        //var nomePessoa = prompt('Digite o novo nome:', oldTitle);
        if (nomePessoa && tempoRua && localização && outrasInfos) {
                $.ajax({
                    type: 'POST',
                    url: api + '/userupdate',
                    data: {nomePessoa: nomePessoa, tempoRua: tempoRua, localização: localização, outrasInfos: outrasInfos, IDcadastro: IDcadastro},
                }).done(function () {
                    users.list();
                }).fail(function (msg) {
                    //console.log('FAIL');
                }).always(function (msg) {
                    //console.log('ALWAYS');
                });
        }
    }};
