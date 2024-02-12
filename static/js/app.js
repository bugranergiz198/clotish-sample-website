

const hamburger = document.querySelector(".hamburgerbutton");
const stickone = document.querySelector(".one");
const sticktwo = document.querySelector(".two");
const stickthree = document.querySelector(".three");
const responsivenavbar = document.querySelector("nav ul");
const navbar = document.querySelector("nav");
const decrease = document.querySelector(".decrease")

const minus = document.querySelector(".fa-square-minus")
const plus = document.querySelector(".fa-square-plus")


const user = document.querySelector(".profilebox i");
const profile = document.querySelector(".profile");
const sepetlink = document.querySelector(".sepetlink");
const productsinbasket = document.querySelector(".productsinbasket");
/*js toggle: css'te pseudoları class gibi yanına 
yazıyoruz (active için: .hamburger.active) iki nokta ile değil.
burda harekete geçiriyoruz.*/

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    responsivenavbar.classList.toggle("active");
});



window.addEventListener("scroll", () =>{
  let valueofnavbar = window.scrollY;
  
  if(valueofnavbar > 0){
      navbar.style.backgroundColor = "black";
  }
  else{
    navbar.style.backgroundColor = "transparent";
  }
});

sepetlink.addEventListener("click",()=>{
  productsinbasket.classList.toggle("active");
});
  
user.addEventListener("click",()=>{
  profile.classList.toggle("active");
});