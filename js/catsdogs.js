const cat_result = document.querySelector('#cat_result');
const cat_details = document.querySelector('#cat_details');
const dog_result = document.querySelector('#dog_result');
const dog_details = document.querySelector('#dog_details');
const catbtn = document.querySelector('#cat_btn');
const dogbtn = document.querySelector('#dog_btn');
window.WEB = {};


catbtn.addEventListener('click', getRandomCat);

/* {

    {
        "id": "9d7",
        "height": 373,
        "width": 560,
        "url": "https://cdn2.thecatapi.com/images/9d7.jpg"
    }


} */

function getRandomCat(){
    const url = "https://api.thecatapi.com/v1/images/search"; // api link
    
    // axios get saaja meetod
    axios.get(url)
    .then(response => {
         // andmete reastusest välja filtreerimine kuna andmed on array olekus
        const data = response.data[0]; 

       
        WEB.Debug("log", data)

       
       
        cat_result.innerHTML = `<img src='${data.url}' alt="cat">`; // uue elemendi lisamine õige andmega
        cat_details.innerHTML = `
            <p> MIISU </p>
            <p> ID: ${data.id} </p>
            <p> Pikkus: ${data.height} </p>
            <p> Laius: ${data.width} </p>
        
        `;
        $('#cat_details').show();
        $('#dog_details').hide();
    }, error => {
        console.log(error);
    });

   console.log("Cat")
}
dogbtn.addEventListener('click', getRandomDog);

function getRandomDog(){
    const url = "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";

    axios.get(url)
    .then(response => {
        const data = response.data[0];
        WEB.Debug("stringify", data);
       
        dog_result.innerHTML = `<img src='${data.url}' alt="dog">`;

        dog_details.innerHTML = `
            <p> KOER </p>
            <p> ID: ${data.id} </p>
            <p> Pikkus: ${data.height} </p>
            <p> Laius: ${data.width} </p>
        
        `;
        $('#dog_details').show();
        $('#cat_details').hide();
    }, error => {
        console.log(error);
    });
    

    console.log("Dog")

}

// lambine debug lahendus
WEB.Debug = function(type, data) {
    switch (type) {
        case 'stringify':
            console.log("Stringified: ", JSON.stringify(data));
            break;
        case 'log':
            console.log("Debug: ", data);
            break;
        case 'parse':
            console.log("Parsed: ", JSON.parse(data));
            break
        
        
    }

   
}