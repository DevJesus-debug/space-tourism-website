const techNameCont = document.querySelector(".technology-text-cont .tech-name-cont");
const techTextCont = document.querySelector(".technology-text-cont .tech-text-cont");
const techImgCont = document.querySelector(".technology-img-wrap .tech-img-cont");
const buttons = document.querySelectorAll(".number-btns li");
const url = "/space-tourism-website-main/starter-code/data.json";


for(let i = 0; i < buttons.length ;i++){
        buttons[i].addEventListener("click",(e)=>{
                const innerNumb = buttons[i].innerText - 1;
                if(!e.target.classList.contains("active-numb")){
                        buttons.forEach(btn=>{btn.classList.remove("active-numb")})
                        buttons[i].classList.add("active-numb")
                }
                
                if(e.target){
                        techNameCont.innerHTML = "";
                        techImgCont.innerHTML = "";
                        techTextCont.innerHTML = "";
                        createHtml(innerNumb);
                }
        })
}

async function createHtml(number){
        const dataFetch = await fetch(url);
        const data = await dataFetch.json();
        //Creating and appending info
        const techName = document.createElement("h2");
        techName.innerHTML = data.technology[number].name.toUpperCase();
        techNameCont.appendChild(techName);
        techTextCont.innerHTML = data.technology[number].description;
        const techImg = document.createElement("img");
        techImg.src = data.technology[number].images.portrait;
        techImgCont.appendChild(techImg);
}

createHtml(0)

startingInfo();