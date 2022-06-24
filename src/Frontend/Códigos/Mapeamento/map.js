api = 'http://localhost:1234';
var map = {
//ajax que pega os dados a partir do id de inputs nas páginas com as variáveis abaixo, e insere os dados dos inputs no Banco de Dados;
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
                }).always(function (msg) {
                });
            
        }
    },
    //update que pega os dados antigos no Banco de Dados;

    update(oldIDcadastro, oldNomePessoa, oldTempoRua, oldLocalização, oldOutrasInfos) {

        var nomePessoa = document.getElementById("nomePessoa").placeholder(oldNomePessoa).trim();
        var tempoRua = document.getElementById("tempoRua").placeholder(oldTempoRua).trim();
        var localização = document.getElementById("localização").placeholder(oldLocalização).trim();
        var outrasInfos = document.getElementById("outrasInfos").placeholder(oldOutrasInfos).trim();

                $.ajax({
                    type: 'POST',
                    url: api + '/userupdate',
                    data: {nomePessoa: nomePessoa, tempoRua: tempoRua, localização: localização, outrasInfos: outrasInfos, IDcadastro: oldIDcadastro},
                }).done(function () {
                    console.log(nomePessoa);
                    map.update();
                }).fail(function (msg) {
                }).always(function (msg) {
                });

    }};
