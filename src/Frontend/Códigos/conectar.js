$(document).ready(function(){

    $("#header").load("header.html", function() {
    $("#btn").on('click', showmenu);
    });
    
    });
    
    function showmenu(){
    nav.classList.toggle('active');
    }