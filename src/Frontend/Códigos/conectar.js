<<<<<<< Updated upstream
/*$(document).ready(function(){
    $("#header").load("header.html");
});
*/
=======
$(document).ready(function(){

    $("#header").load("header.html", function() {
    $("#btn").on('click', showmenu);
    });
    
    });
    
    function showmenu(){
    nav.classList.toggle('active');
    }
>>>>>>> Stashed changes
