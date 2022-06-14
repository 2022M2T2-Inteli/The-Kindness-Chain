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
<<<<<<< HEAD

        var nomePessoa = document.getElementById("nomePessoa").value(oldNomePessoa).trim();
        var tempoRua = document.getElementById("tempoRua").value(oldTempoRua).trim();
        var localização = document.getElementById("localização").value(oldLocalização).trim();
        var outrasInfos = document.getElementById("outrasInfos").value(oldOutrasInfos).trim();
=======
        document.querySelector("[name='nome']").value = "ola";
        document.querySelector("[name='tempo']").value = oldTempoRua;
        document.querySelector("[name='local']").value = oldLocalização;
        document.querySelector("[name='info']").value = oldOutrasInfos;
        //var nomePessoa = document.getElementById("nomePessoa").value.trim(oldNomePessoa);
        //var tempoRua = document.getElementById("tempoRua").value.trim(oldTempoRua);
        //var localização = document.getElementById("localização").value.trim(oldLocalização);
        //var outrasInfos = document.getElementById("outrasInfos").value.trim(oldOutrasInfos);
>>>>>>> 430726e1e1f71a37b71cb4e31eb00fd9b19e976f
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
