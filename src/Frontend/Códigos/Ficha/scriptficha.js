

var user = {
  insert() {
    var roupas = document.getElementById("roupas");
    var alimentos = document.getElementById("alimentos");
    var higiene = document.getElementById("higiene");
    var atividades = document.getElementById("atividades");
    var educador = document.getElementById("educador");

    // if (roupas.checked) {
    $.ajax({
      type: "POST",
      url:  "/inficha",
      data: {roupas: roupas, alimentos:alimentos, higiene:higiene, atividades:atividades, educador:educador},
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
