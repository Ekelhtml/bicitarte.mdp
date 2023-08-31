let top1 = document.querySelector('.top1');
let principal = document.querySelector('.principal');


window.addEventListener('scroll', function(){
    // top.classList.toggle("borrar",window.scrollY>0);
    // principal.classList.toggle("cambiar",window.scrollY>0);
    if (window.scrollY>250){
        console.log(window.scrollY);
        
        top1.style.display = 'none';
        principal.style.top = '0';
        principal.style.backgroundColor = "rgba(69, 64, 123,1)" ;
        
    }else{
        top1.style.display = 'flex';
        principal.style.top = '40px';
        principal.style.backgroundColor = "rgba(69, 64, 123,.9)"
    }

});