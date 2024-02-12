const registerr= document.getElementById("register");
const loginn= document.getElementById("login");
const button= document.getElementById("btn");
const mypassword = document.querySelector(".mypassword");
const sendemail = document.querySelector(".sendemail");
const xmark = document.querySelector(".closepage");
const emailpass = document.querySelector(".emailpass");
/* INPUTS */
const namee = document.getElementById("name");
const surname = document.getElementById("surname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_confirm = document.getElementById("password_confirm");
const checkbox = document.getElementById("registerbox");
/* ERROR DIVS */
const nameerror = document.getElementById("nameerror");
const surnameerror = document.getElementById("surnameerror");
const usernameerror = document.getElementById("usernameerror");
const passworderror = document.getElementById("passworderror");
const confirmerror = document.getElementById("confirmerror");
const emailerror = document.getElementById("emailerror");
const checkboxerror = document.getElementById("checkboxerror");


function register(){
    loginn.style.transform = "translate(-50%)";
    registerr.style.transform = "translate(-50%)";
    button.style.transform = "translate(150px)";
}
function login(){
    loginn.style.transform = "translate(50%)";
    registerr.style.transform = "translate(50%)";
    button.style.transform = "translate(0px)";
}
//alert div starts here.

mypassword.addEventListener("click",()=>{
    sendemail.style.top = "50%";
});
xmark.addEventListener("click",()=>{
    sendemail.style.top = "-50%";
    emailpass.value = '';
});

/*input validators*/

registerr.addEventListener("submit",(e)=>{
    let namemessages = []
    let surnamemessages = []
    let usernamemessages = []
    let emailmessages = []
    let passwordmessages = []
    let confirmmessages = []
    let checkboxmessages = []
    /*name validation*/
    if (namee.value === '' || surname.value == null){
        namemessages.push("*Bu alan zorunludur.")
    }
    /* surname validation */
    if (surname.value === '' || surname.value == null){
        surnamemessages.push("*Bu alan zorunludur.")
    }
    /* username validation */
    if (username.value === '' || username.value == null){
        usernamemessages.push("*Bu alan zorunludur.")
    }
    else if (username.value.length < 6 || username.value.length >25){
        usernamemessages.push("*kullanıcı adı uzunluğu 6'dan küçük veya 25'ten büyük olamaz!")
    }
    else if (!username.value.match(/^[A-Za-z\._\-0-9]*/)){
        usernamemessages.push("*Özel karakterler kullanılamaz!")
    }
    /*Email validation*/
    if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailmessages.push("*lütfen geçerli eposta giriniz.")
    }
    /* password confirmation */
    if (password.value === '' || password.value == null){
        passwordmessages.push("*Bu alan zorunludur.")
    }
    else if (password.value.length < 6 || password.value.length >30){
        passwordmessages.push("*kullanıcı adı uzunluğu 6'dan küçük veya 30'ten büyük olamaz!")
    }
    else if (!password.value.match(/^(?=.*[a-zA-Z])(?=.*\d).+$/)){
        passwordmessages.push("*Şifrenizde sayı ve harf olmak zorunda.")
    }
    if (password_confirm.value === '' || password.value == null){
        confirmmessages.push("*Bu alan zorunludur.")
    }
    else if (password_confirm.value !== password.value){
        confirmmessages.push("*Lütfen aynı parolayı girin.")
    }
    //checkbox control
    if (!checkbox.checked) {
        checkboxmessages.push("*Bu alan zorunludur.")
    }

    if (namemessages.length > 0){
        e.preventDefault()
        nameerror.innerText = namemessages.join(', ')
    }
    if (surnamemessages.length > 0){
        e.preventDefault()
        surnameerror.innerText = surnamemessages.join(', ')
    }
    if (usernamemessages.length > 0){
        e.preventDefault()
        usernameerror.innerText = usernamemessages.join(', ')
    }
    if (emailmessages.length > 0){
        e.preventDefault()
        emailerror.innerText = emailmessages.join(', ')
    }
    if (passwordmessages.length > 0){
        e.preventDefault()
        passworderror.innerText = passwordmessages.join(', ')
    }
    if (confirmmessages.length > 0){
        e.preventDefault()
        confirmerror.innerText = confirmmessages.join(', ')
    }
    if (checkboxmessages.length > 0){
        e.preventDefault()
        checkboxerror.innerText = namemessages.join(', ')
        console.log(checkboxmessages)
    }
});