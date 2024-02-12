const products = document.querySelectorAll(".product");
const productimage = document.querySelectorAll(".productimage");
const nameandpricecontainer = document.querySelectorAll(".nameandpricecontainer");
const colorsizebuy = document.querySelectorAll(".colorsizebuy");


for (let index = 0; index < products.length; index++) {
    const element = products[index];
    element.addEventListener("click",()=>{
        productimage[index].style.transform = "translateY(-30px)";
        nameandpricecontainer[index].style.transform = "translateY(-20px)";
        colorsizebuy[index].style.transform = "translateY(-70px)";
    });
}