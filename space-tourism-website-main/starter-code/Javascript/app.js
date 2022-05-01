const hamburgerMenu = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const closeLine1 = document.querySelector(".hamburger .line-1");
const closeLine2 = document.querySelector(".hamburger .line-2");
const closeLine3 = document.querySelector(".hamburger .line-3");




hamburgerMenu.addEventListener("click",()=>{
    nav.classList.toggle("active-menu");
    closeLine2.classList.toggle("active-close");
    closeLine1.classList.toggle("active-close");
    closeLine3.classList.toggle("active-close");
})