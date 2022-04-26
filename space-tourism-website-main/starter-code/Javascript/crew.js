const crewTitleCont = document.querySelector(".crew-info-cont .crew-title-cont");
const crewNameCont = document.querySelector(".crew-info-cont .crew-name-cont");
const crewImgCont = document.querySelector(".crew-img");
const crewBioCont = document.querySelector(".crew-bio-cont");
const menuBtns = document.querySelectorAll(".circle-menu li");
const url = "/space-tourism-website-main/starter-code/data.json";



function infoButtons(){
    for(let i = 0; i < menuBtns.length ;i++){
       menuBtns[i].addEventListener("click",(e)=>{
            if(e.target === menuBtns[0]){
                crewImgCont.innerHTML = " "
                crewBioCont.innerHTML = " "
                crewNameCont.innerHTML = " "
                crewTitleCont.innerHTML = " "
                createHtml(0)
            }
            if(e.target === menuBtns[1]){
                crewImgCont.innerHTML = "";
                crewBioCont.innerHTML = " "
                crewNameCont.innerHTML = " "
                crewTitleCont.innerHTML = " "
                createHtml(1)
            }
            if(e.target === menuBtns[2]){
                crewImgCont.innerHTML = "";
                crewBioCont.innerHTML = " "
                crewNameCont.innerHTML = " "
                crewTitleCont.innerHTML = " "
                createHtml(2)
            }
            if(e.target === menuBtns[3]){
                crewImgCont.innerHTML = "";
                crewBioCont.innerHTML = " "
                crewNameCont.innerHTML = " "
                crewTitleCont.innerHTML = " "
                createHtml(3)
            }
        })
    }
}

async function createHtml(number){
    const dataFetch = await fetch(url);
    const data = await dataFetch.json();
    const crewImg = document.createElement("img");
    crewImg.classList.add("crew-img");
    crewImg.src = data.crew[number].images.png
    crewImgCont.appendChild(crewImg);
    //creating planet name element
    const crewTitle = document.createElement("h3");
    const crewName = document.createElement("h2");
    crewTitle.innerHTML = data.crew[number].role.toUpperCase();
    crewName.innerHTML = data.crew[number].name.toUpperCase();
    crewTitleCont.appendChild(crewTitle)
    crewNameCont.appendChild(crewName)
    //Creating and retreving Bio information
    const crewBio = document.createElement("p");
    crewBio.innerHTML = data.crew[number].bio;
    crewBioCont.appendChild(crewBio);
}



 async function staticInfo(){
    const dataFetch = await fetch(url);
    const data = await dataFetch.json();
    const crewImg = document.createElement("img");
    crewImg.classList.add("crew-img");
    crewImg.src = data.crew[0].images.png
    crewImgCont.appendChild(crewImg);
    //creating and retreiving role and name information
    const crewTitle = document.createElement("h3")
    const crewName = document.createElement("h2")
    crewTitle.innerHTML = data.crew[0].role.toUpperCase();
    crewName.innerHTML = data.crew[0].name.toUpperCase();
    crewTitleCont.appendChild(crewTitle)
    crewNameCont.appendChild(crewName)
    //Creating and retreving Bio information
     const crewBio = document.createElement("p");
     crewBio.innerHTML = data.crew[0].bio;
     crewBioCont.appendChild(crewBio);
}

infoButtons()
staticInfo()