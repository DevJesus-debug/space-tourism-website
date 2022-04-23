const url = "/space-tourism-website-main/starter-code/data.json";




async function getData(){
        const dataFetch = await fetch(url);
        const data = await dataFetch.json()

        console.log(data)
}

getData();