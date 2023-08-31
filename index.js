window.addEventListener("scroll", function(){
    let top = document.querySelector(".top");
    let principal = document.querySelector(".principal");
    top.classList.toggle("borrar",window.scrollY>0);
    principal.classList.toggle("cambiar",window.scrollY>0);

});