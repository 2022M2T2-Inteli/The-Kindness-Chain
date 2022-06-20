api = 'http://localhost:1324';
var user = {
    insert() {
        var nomeSocial = document.getElementById("nomeSocial").value;
        var CPF_RG = Number(document.getElementById("CPF_RG").value);
        var serviçosSociais = document.getElementById("SSA").value;
        var serviçosSociaisPassados = Number(document.getElementById("SSP").value);
        var dataChegada = Number(document.getElementById("Data").value);
        var encaminhamento = document.getElementById("Encaminhamentos").value;
        var motivosRua = Number(document.getElementById("Motivos").value);
        if (CPF_RG && nomeSocial && serviçosSociais && serviçosSociaisPassados && dataChegada && encaminhamento && motivosRua) {
            // console.log(CPF_RG);
            // console.log(nomeSocial);
            // console.log(serviçosSociais);
            // console.log(serviçosSociaisPassados);
            // console.log(dataChegada);
            // console.log(encaminhamento);
            // console.log(motivosRua);
            // if (Formacao.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + "/assistinsert",
                    data: {CPF_RG: CPF_RG, nomeSocial: nomeSocial, serviçosSociais: serviçosSociais, dataChegada: dataChegada, motivosRua: motivosRua, serviçosSociaisPassados: serviçosSociaisPassados, encaminhamento: encaminhamento},
                }).done(function () {
                    users.list();
                }).fail(function (msg) {
                    //console.log('FAIL');
                }).always(function (msg) {
                    //console.log('ALWAYS');
                });
            // }
        }
    }
    }