import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

const dogList = document.getElementById('dog-list-container');
// on load
window.addEventListener('load', async() => {
    //sends request
    const allDogs = await getDogs();

    //render and append response
    for (let dog of allDogs) {
        const dogEl = renderDogCard(dog);

        dogList.append(dogEl);
    }
});
// fetch all dogs
// render and append all dog cards to the container
