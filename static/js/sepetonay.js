const add_address = document.querySelectorAll(".newaddress");
const addresspage = document.getElementById("addresspage");
const cancel = document.getElementById("closeaddresspage");
const addressinputs = document.querySelectorAll(".addressarea");

const kurumsal = document.querySelectorAll("#kurumsal");
const bireysel = document.querySelectorAll("#bireysel");
const corpinputaddress = document.querySelectorAll(".corpinputaddress");
const individualaddress = document.querySelectorAll(".addressinputs");
const addressbutton = document.querySelector(".subbutton");

Array.from(add_address).forEach((element, index) => {
    element.addEventListener("click",()=>{
        addresspage.style.opacity = "1";
        addresspage.style.top = "50%";
        addresspage.style.visibility = "visible";
        if (index == 0){
            addressbutton.value = "putaddress";
            //console.log(addressbutton.value);
        }
        else if (index == 1){
            addressbutton.value = "putaddressbill";
            //console.log(addressbutton.value);
        }
        
    });
});

cancel.addEventListener("click",()=>{
    addresspage.style.opacity = "0";
    addresspage.style.visibility = "hidden";
    addresspage.style.top = "-100%";
    for (let index = 0; index < addressinputs.length; index++) {
        const eachaddressinputs = addressinputs[index];
        eachaddressinputs.value = '';
    }
});

function checkthebutton(){
    if (kurumsal[0].checked == false){
        kurumsal[0].checked = true;
        bireysel[0].checked = false;
        corpinputaddress[0].style.display = "flex";
        individualaddress[0].style.display = "none";
    }
}

function checkthebutton2(){
    if (bireysel[0].checked == false){
        bireysel[0].checked = true;
        kurumsal[0].checked = false;
        corpinputaddress[0].style.display = "none";
        individualaddress[0].style.display = "flex";
    }
}