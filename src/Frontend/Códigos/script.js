api = 'http://localhost:1324'

$(document).ready(() => {
   users.login();
});

var users = {
  login() {
      var done = false; 
      var email = document.getElementById("email").value;
      var senha = document.getElementById("senha").value;
      var select = document.getElementById("selecionarCargo");
      var categoria = select.options[select.selectedIndex].value;
      switch(categoria){
        case "educador":
          $.ajax({
            url: api + '/usereducador',
            type: 'GET',
            success: data => {
              data.forEach(element => {
                console.log(element.nome);
                console.log(element.email);
                console.log(element.senha);
                
                if(email === element.email && senha === element.senha){
                  window.location.href = "Voluntarios/lista.html";
                  //console.log(email + "" + senha)
                  done = true;
                }
              });
            }
          });
        case "assistente":
          $.ajax({
            url: api + '/assistente',
            type: 'GET',
            success: data => {
              data.forEach(element => {
                console.log(element.nome);
                console.log(element.email);
                console.log(element.senha)
                
                if(email === element.email && senha === element.senha){
                  window.location = "páginaFichas/index.html";
                  //console.log(email + "" + senha)
                  done = true;
                }         
              });
            }
          })
          
      }
  }
  
};
