const planetImg = document.querySelector(".planet-cont img");
const moonBtn = document.querySelector(".moon");
const marsBtn = document.querySelector(".mars");
const europaBtn = document.querySelector(".europa");
const titanBtn = document.querySelector(".titan");
const planetCont = document.querySelector(".planet-img-cont");
const planetTitle = document.querySelector(".planet-name");
const planetDescrip = document.querySelector(".description");
const distance = document.querySelector(".distance");
const timeDistance = document.querySelector(".time");
const url = "/space-tourism-website-main/starter-code/data.json";

//Event Listeners

moonBtn.addEventListener("click", ()=>{
        planetCont.innerHTML = " "
        planetTitle.innerHTML = " "
        createHtml(0);
})

marsBtn.addEventListener("click", ()=>{
        planetCont.innerHTML = " "
        planetTitle.innerHTML = " "
        createHtml(1);

})

europaBtn.addEventListener("click", ()=>{
        planetCont.innerHTML = " "
        planetTitle.innerHTML = " "
        createHtml(2);

})

titanBtn.addEventListener("click", ()=>{
        planetCont.innerHTML = " ";
        planetTitle.innerHTML = " "
        createHtml(3);
})

// moonBtn.addEventListener("click", ()=>{
//         createHtml(0);
// })

// moonBtn.addEventListener("click", ()=>{
//         createHtml(0);
// })



 async function staticInfo(){
        const dataFetch = await fetch(url);
        const data = await dataFetch.json();
        const planetImg = document.createElement("img");
        planetImg.classList.add("planet-img");
        planetImg.src = data.destinations[0].images.png
        planetCont.appendChild(planetImg)
        console.log(data)
        //creating planet name element
        const planetName = document.createElement("h1")
        planetName.innerHTML = data.destinations[0].name.toUpperCase();
        planetTitle.appendChild(planetName)
        planetDescrip.innerHTML = data.destinations[0].description;
        distance.innerHTML = data.destinations[0].distance;
        timeDistance.innerHTML = data.destinations[0].travel;
  
        
}

staticInfo()


 async function createHtml(number){
        const dataFetch = await fetch(url);
        const data = await dataFetch.json();
        const planetImg = document.createElement("img");
        planetImg.classList.add("planet-img");
        planetImg.src = data.destinations[number].images.png
        planetCont.appendChild(planetImg)
        //creating planet name element
        const planetName = document.createElement("h1")
        planetName.innerHTML = data.destinations[number].name.toUpperCase();
        planetTitle.appendChild(planetName)
        planetDescrip.innerHTML = data.destinations[number].description;
        distance.innerHTML = data.destinations[number].distance;
        timeDistance.innerHTML = data.destinations[number].travel;
        
}




// async function getData(){
//         const dataFetch = await fetch(url);
//         const data = await dataFetch.json();
        
// }




