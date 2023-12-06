
// Navbar
let top1 = document.querySelector('.top1');
let principal = document.querySelector('.principal');

window.addEventListener('scroll', function(){

    if (window.scrollY>250){
        console.log(window.scrollY);
        
        top1.style.display = 'none';
        principal.style.top = '0';
        principal.style.backgroundColor = "rgba(69, 64, 123,1)" ;
        
    }else{
        top1.style.display = 'flex';
        principal.style.top = '40px';
        principal.style.backgroundColor = "rgba(69, 64, 123,1)"
    }
});
const menuLinks = document.querySelectorAll('.menu-hamburguesa a');
const menu = document.querySelector('.menu-hamburguesa');
botonAbrir = document.querySelector(".abrir-menu");
botonCerrar = document.querySelector(".cerrar-menu");
botonAbrir.addEventListener("click", function(){
    // menu.style.display = "contents";
    botonAbrir.style.display = "none";
    botonCerrar.style.display = "block";
    menu.classList.remove("desactivar");
    menu.classList.add("activar");

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Cierra el menú al hacer clic en un enlace
            menu.classList.remove('activar');
            botonAbrir.style.display = "block";
        });
    });
   
    
});

botonCerrar.addEventListener("click", function(){
    // menu.style.display = "none";
    botonAbrir.style.display = "block";
    botonCerrar.style.display = "none";
    menu.classList.add("desactivar");
    menu.classList.remove("activar");
});

addEventListener("resize", ()=>{
    if(innerWidth > 750) {
        botonAbrir.style.display = "none";
    }
    else{
        botonAbrir.style.display = "block";
    }
});



// Scroll to specific values
// scrollTo is the same
window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
  });
  
  // Scroll certain amounts from current position 
  window.scrollBy({ 
    top: 100, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });
  
  // Scroll to a certain element
  document.querySelector('.hello').scrollIntoView({ 
    behavior: 'smooth' 
  });