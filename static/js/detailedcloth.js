

const bodytable = document.querySelector(".bodytable");
const productdetails = document.querySelector(".productdetails");
const bodytablediv = document.querySelector(".bodytablediv");
const buttonicon = document.getElementById("tablebutton");
const crossbutton = document.getElementById("crossbutton");




bodytable.addEventListener("click",()=>{
    bodytable.style.width = "150px";
    buttonicon.style.transform = "rotate(180deg)";
    bodytablediv.style.right = "50%";
    bodytablediv.style.transform = "translateX(50%)";
    
});
crossbutton.addEventListener("click",()=>{
    bodytable.style.width = "130px";
    buttonicon.style.transform = "rotate(0deg)";
    bodytablediv.style.right = "-100%";
    
});



