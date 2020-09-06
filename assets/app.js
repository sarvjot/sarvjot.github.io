/* -----------------------------------------Smooth Scroll effect------------------------------------------------ */
import jump from './node_modules/jump.js/dist/jump.module.js';
document.querySelectorAll(".top-btn").forEach((btn) => {
    btn.addEventListener('click',() => {
        jump('#navbar',{
            duration:1000,
            offset: 1
        });
    });
})
document.querySelector("#home-btn").addEventListener('click',() => {
    jump('.container-home',{
        duration:1000,
        offset: 1
    });
});
document.querySelector("#personalize-btn").addEventListener('click',() => {
    jump('.container-personalize',{
        duration:1000,
        offset: 1
    });
});
document.querySelector("#about-btn").addEventListener('click',() => {
    jump('.container-AboutMe',{
        duration: 1000,
        offset: 1
    });
});
document.querySelector("#technologies-btn").addEventListener('click',() => {
    jump('.container-technologies',{
        duration: 1000,
        offset: 1
    });
});
document.querySelector("#projects-btn").addEventListener('click',() => {
    jump('.container-projects',{
        duration: 1000,
        offset: 1
    });
});
document.querySelector("#academics-btn").addEventListener('click',() => {
    jump('.container-academics',{
        duration: 1000,
        offset: 1
    });
});
/* ------------------------------------------------Glider------------------------------------------------- */

window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        scrollLock: true,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
    })
  })
/* ------------------------------------------------Image-Popup------------------------------------------------- */
$('.project-img').magnificPopup({
    type: 'image',
    gallery:{
        enabled:true
    }
});
$('.certificate-btn').magnificPopup({
    type: 'iframe',
    gallery:{
        enabled:true
    }
});
/* --------------------------------------Javascript theme Switcher ----------------------------------------------*/

var body = document.querySelector('body');

// Applying the cached theme on reload

let color = localStorage.getItem("color");
let font = localStorage.getItem("font");

if(color){
    body.classList = [color];
}
if(font){
    body.id = font;
}
updateStyle();

// Color Switcher
document.querySelector("#card-1").addEventListener('click',() => {
    var body = document.querySelector('body');
    if(body.classList.contains("aqua") === false){
        body.classList = ["aqua"];
        localStorage.setItem('color',"aqua");
        updateStyle();
    }
})
document.querySelector("#card-2").addEventListener('click',() => {
    var body = document.querySelector('body');
    if(body.classList.contains("furious") === false){
        body.classList = ["furious"];
        localStorage.setItem('color',"furious");
        updateStyle();
    }
})
document.querySelector("#card-3").addEventListener('click',() => {
    var body = document.querySelector('body');
    if(body.classList.contains("peaceful") === false){
        body.classList = ["peaceful"];
        localStorage.setItem('color',"peaceful");
        updateStyle();
    }
})
document.querySelector("#card-4").addEventListener('click',() => {
    var body = document.querySelector('body');
    if(body.classList.contains("lovely") === false){
        body.classList = ["lovely"];
        localStorage.setItem('color',"lovely");
        updateStyle();
    }
})
// Font-Style Switcher
document.querySelector("#handwriting-card-1").addEventListener('click',() => {
    var body = document.querySelector('body');
    if(body.id !== "sketchy"){
        body.id = "sketchy";
        localStorage.setItem('font',"sketchy");
        updateStyle();
    }
})
document.querySelector("#handwriting-card-2").addEventListener('click',() => {
    var body = document.querySelector('body');
    if(body.id !== "classic"){
        body.id = "classic";
        localStorage.setItem('font',"classic");
        updateStyle();
    }
})
document.querySelector("#handwriting-card-3").addEventListener('click',() => {
    var body = document.querySelector('body');
    if(body.id !== "trendy"){
        body.id = "trendy";
        localStorage.setItem('font',"trendy");
        updateStyle();
    }
})
/*------------------------------------------- Current Style Dashboard -------------------------------------------*/
function updateStyle(){
    document.querySelector("#current-style").textContent = `${body.classList[0]} - ${body.id}`;
}
