const cancel = document.getElementById("closepage");
const canceltwo = document.getElementById("closeaddresspage");

const passwordpage = document.getElementById("passwordpage");
const changepasswordbutton = document.querySelector(".changepassword");
const addaddress = document.querySelector(".title");
const passwordinputs = document.querySelectorAll("#password");
const addresspage = document.getElementById("addresspage");
const addressinputs = document.querySelectorAll(".addressarea");

const closedeye = document.querySelectorAll(".closedeye");
const openeye = document.querySelectorAll(".openeye");

const kurumsal = document.querySelectorAll("#kurumsal");
const bireysel = document.querySelectorAll("#bireysel");
const corpinputaddress = document.querySelectorAll(".corpinputaddress");
const individualaddress = document.querySelectorAll(".addressinputs");


const deliverbill = document.getElementById("deliverbill");

/* Checking addresses */


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
/*
function checkthebutton3(){
    if (kurumsal[1].checked == false){
        kurumsal[1].checked = true;
        bireysel[1].checked = false;
        corpinputaddress[1].style.display = "flex";
        individualaddress[1].style.display = "none";
    }
}

function checkthebutton4(){
    if (bireysel[1].checked == false){
        bireysel[1].checked = true;
        kurumsal[1].checked = false;
        corpinputaddress[1].style.display = "none";
        individualaddress[1].style.display = "flex";
    }
}
*/
//check the bill address
/*
function checkbilladdress(){
    if(deliverbill.checked == false){
        billaddress.style.display = "none";
    }
    else{
        billaddress.style.display = "block"
    }
}
*/

changepasswordbutton.addEventListener("click",()=>{
    passwordpage.style.opacity = "1";
    passwordpage.style.top = "50%";
    passwordpage.style.visibility = "visible";
});
addaddress.addEventListener("click",()=>{
    addresspage.style.opacity = "1";
    addresspage.style.top = "50%";
    addresspage.style.visibility = "visible";
});

cancel.addEventListener("click",()=>{
    passwordpage.style.opacity = "0";
    passwordpage.style.visibility = "hidden";
    passwordpage.style.top = "-50%";
    for (let index = 0; index < passwordinputs.length; index++) {
        const eachpasswordinputs = passwordinputs[index];
        eachpasswordinputs.value = '';
    }
});    

canceltwo.addEventListener("click",()=>{
    addresspage.style.opacity = "0";
    addresspage.style.visibility = "hidden";
    addresspage.style.top = "-100%";
    for (let index = 0; index < addressinputs.length; index++) {
        const eachaddressinputs = addressinputs[index];
        eachaddressinputs.value = '';
    }
});


/* SHOW/HIDE PASSWORD */

for (let index = 0; index < openeye.length; index++) {
    const openeyeelements = openeye[index];
    const closedeyeelements = closedeye[index];
    closedeyeelements.addEventListener("click",()=>{
        if(passwordinputs[index].type == "password"){
            passwordinputs[index].type = "text";
            closedeyeelements.style.visibility = "hidden";
            openeyeelements.style.visibility = "visible";
            openeyeelements.style.color = "red";
        }
    });
    openeyeelements.addEventListener("click",()=>{
        if(passwordinputs[index].type == "text"){
            passwordinputs[index].type = "password";
            closedeyeelements.style.visibility = "visible";
            openeyeelements.style.visibility = "hidden";
        }        
    });
}