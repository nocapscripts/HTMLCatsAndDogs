const cat_result = document.querySelector('#cat_result');
const dog_result = document.querySelector('#dog_result');
const catbtn = document.querySelector('#cat_btn');
const dogbtn = document.querySelector('#dog_btn');

catbtn.addEventListener('click', getRandomCat);

function getRandomCat(){
    const url = "http://api.thecatapi.com/v1/images/search";
    
   fetch(url)
    .then(response => response.json())
    .then(data =>{
        console.log(data[0]);
        cat_result.innerHTML = `<img scr=${data[0].url} alt="cat">`;
   });


}
dogbtn.addEventListener('click', getRandomDog);

function getRandomDog(){
    const url = "https://dog.ceo/api/breeds/image/random";
    
   fetch(url)
    .then(response => response.json())
    .then(data =>{
        console.log(data[0]);
        dog_result.innerHTML = `<img scr=${data.message} alt="dog">`;
    });


}