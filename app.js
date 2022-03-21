import { getDogs, dogQuery } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');
const dogSearchForm = document.getElementById('name-input');
const dogSearchButton = document.getElementById('dog-button');

let allDogs = [];


const dogList = document.getElementById('dog-list-container');
// on load
window.addEventListener('load', async() => {
    //sends request
    allDogs = await getDogs();

    //render and append response
    for (let dog of allDogs) {
        const dogEl = renderDogCard(dog);

        dogList.append(dogEl);
    }
});
// fetch all dogs
// render and append all dog cards to the container

dogSearchButton.addEventListener('click', async() => {
    dogListContainer.innerHTML = '';
    const data = dogSearchForm.value;
    const foundDog = await dogQuery(data);

    const dogEl = renderDogCard(foundDog);

    dogList.append(dogEl);
    
    
    //const allDogs = await getDogs();
});