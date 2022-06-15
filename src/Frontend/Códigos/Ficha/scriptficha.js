api = "http://localhost:1324/";

var user = {
  insert() {
    var roupas = prompt("");
    var alimentos = document.getElementById("alimentos");
    var higiene = document.getElementById("higiene");
    var atividades = document.getElementById("atividades");
    var educador = document.getElementById("educador");

    // if (roupas.checked) {
    $.ajax({
      type: "POST",
      url: api + "/inficha",
      data: { roupas: roupas },
      success: function () {
        console.log("fui");
      },
    })
      .done(function () {
        console.log(roupas);
      })
      .fail(function (msg) {
        //console.log('FAIL');
      })
      .always(function (msg) {
        //console.log('ALWAYS');
      });
    // }
  },
};
