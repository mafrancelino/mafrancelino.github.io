var hamburguer = document.querySelector(".hamburguer");
hamburguer.addEventListener("click", function(){
    /*menu oculto ou exibido*/
   document.querySelector(".container").classList.toggle("show-menu");
});