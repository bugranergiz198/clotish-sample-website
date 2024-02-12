// quantity 1 olduğunda ve azaltma butonuna tıkladığında alert atan bir html formu yaz (kaldırmayla aynı olucak şekilde.) bu fomrda submit olduğunda ürünü kaldırsın
// bunun için addeventlistener atayacağız. quantity içerisindeki değer 1 olduğunda bu alerti yansıtıcak
let decreasebutton = document.querySelectorAll("#decreaseButton");
let amounts= document.querySelectorAll(".amount");
const alertd = document.querySelector(".alertdiv");
const generaldiv = document.querySelector(".generaldiv");


//alertdiv:
for (let index = 0; index < decreasebutton.length; index++) {
    decreasebutton[index].addEventListener("click",()=>{
        if (parseInt(amounts[index].innerHTML) == 1){
            event.preventDefault();
            alertd.style.opacity = "1";
            alertd.style.visibility = "visible";
            generaldiv.style.opacity = "0.3";
        }
        
    });
}

//do not remove the item:
function dontremove(){
    alertd.style.opacity = "0";
    alertd.style.visibility = "hidden";
    generaldiv.style.opacity = "1";
    
}