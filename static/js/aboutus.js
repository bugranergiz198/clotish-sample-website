let section = document.querySelector('section');
let text = document.querySelector('.text');
let innerText = document.querySelector('.innertext');
let qualityheader = document.querySelector(".qualityheader");
const quality = document.querySelector(".quality");
const somesamples = document.querySelector(".somesamples");
const imagesaboutquality = document.querySelector(".imagesaboutquality");
const imgexplanation = document.querySelector(".imgexplanation");
const secondimgexplanation = document.querySelector(".secondimgexplanation");
const secondimage = document.querySelector(".secondimgandexp img");
const secondpart = document.querySelector(".secondimgandexp");
const firstimage = document.querySelector(".firstimgandexpl");
const innerrealtext = document.querySelector(".innerrealtext");
const spacedivimage = document.querySelector(".spacediv img");
window.addEventListener("scroll", () =>{
    let value = window.scrollY;
    section.style.clipPath = "circle("+value+"px at center center)";
    text.style.left= 100 - value/5 + "%"; //yüzde yazdık çünkü css'te 100% diye gösteriyoruz. value/5 yazdık çünkü sadece calue yazdığımızda çok hızlı oluyor işlem.
    innerText.style.left = 100 - value/5 + "%";
    if(value >= 2800){
        imagesaboutquality.style.left = "0";
    }
    else if (value <2800){
        imagesaboutquality.style.left = "-100%";
    }
    if(value >=3100){
        imgexplanation.style.transform = "translateX(0)";
    }
    else if (value <3100){
        imgexplanation.style.transform = "translateX(-600px)";
    }
    if(value >= 3900){
        firstimage.style.filter = "opacity(0)";
        firstimage.style.transform = "translateX(-1000px)";
    }
    else if(value<3900){
        firstimage.style.filter = "opacity(1)";
        firstimage.style.transform = "translateX(0)";
    }
    if(value >= 4200){
        secondpart.style.display = "flex";
        firstimage.style.display = "none";
    }
    else if(value<4200){
        secondpart.style.display = "none";
        firstimage.style.display = "flex";
    }
    if(value>= 4700){
        
        secondimage.style.transform = "translateX(0)";
        secondimgexplanation.style.transform = "translateX(0)";
    }
    else if(value<4700){
        secondimage.style.transform = "translateX(850px)";
        secondimgexplanation.style.transform = "translateX(-1200px)";
    }
    if(value>= 6700){
        
        innerrealtext.style.transform = "translateX(0)";
        spacedivimage.style.transform = "translateX(0)";
    }
    else if(value<6700){
        innerrealtext.style.transform = "translateX(800px)";
        spacedivimage.style.transform = "translateX(-800px)";
    }

});

//Scrollmagic

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    duration: 3400,
    triggerElement: quality,
    triggerHook: 0
})
.setPin(quality)
.addTo(controller)
.textAnimation(qualityheader);

/*Text animation*/





