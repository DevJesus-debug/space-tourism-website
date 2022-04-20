
async function getData(){
        const dataFetch = await fetch("./data.json");
        const data = await dataFetch.json()

        console.log(data)
}

getData();