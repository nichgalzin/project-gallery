const projects = {
    'Hobby page' : {
        description : 'A page dedicated to the appreciation and study of green wood working. From the techniques  of carving, to what wood and tools to use this a short introduction to the craft. It’s therapeutic and fills your life with beautiful and  handmade objects!',
        imgSrc : './resources/Images/Screenshoots/hobby-page-screenshot.png',
        link : 'https://nichgalzin.github.io/greenwood/'
    },
    'Movie Data' : {
        description : 'A practice in object manipulation and user interactivity in JavaScript. This site lets you see in fun facts about your favourite movies and lets you post new posters and facts to the wall.',
        imgSrc : './resources/Images/Screenshoots/movie-data-screenshot.png',
        link : 'https://nichgalzin.github.io/movie-data/'
    },
    'Website' : {
        description : 'An autobiographical website about my background as a performing circus artist and teacher and my interest and progress so far retraining to be a developer. Built with responsive design in mind and a start to my understanding of what are good development principles for accessibility.',
        imgSrc : './resources/Images/Screenshoots/website-screenshot.png',
        link : 'https://nichgalzin.github.io/about-me/'
    },
    'Game' : {
        description : 'A simple game for a simple blob! Dodge the spawning blocks keep away from the edge to stay alive for as long as you can. What’s you high score? My first experiment working with the html canvas element and using js for animation.',
        imgSrc : './resources/Images/Screenshoots/blob-survival-screenshot.png',
        link : 'https://nichgalzin.github.io/blob-survival/'
    }
}

// Value and keys arrays

const titles = Object.keys(projects);
const values = Object.values(projects);
const description = values.map(el => el.description);
const imgSrc = values.map(el => el.imgSrc);
const links = values.map(el => el.link);
const cardArray = [];

// Dom Access

const container = document.querySelector('main');

for (let i = 0; i < titles.length; i++) {

    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardArray.push(cardDiv);
}

// Make show more button 

function showMoreBtn (i) {

    //Make container and button

    let showMoreDiv = document.createElement('div');
    let displayMore = document.createElement('button');

     //Assign classes

    displayMore.classList.add('more-btn')
    showMoreDiv.classList.add('see-more')

    //Assign Values
    displayMore.innerHTML = 'See more';


    //Insert to DOM

    showMoreDiv.append(displayMore);
    cardArray[i].append(showMoreDiv);

    //Add event listeners

    displayMore.addEventListener('click', () => {
        showDescription(i);
    })
}


// Function to make and insert cards

function makeCards() {
    for (let i = 0; i < values.length; i++) {
        
        // Make elements
        let imgDiv = document.createElement('div');
        let img = document.createElement('img');


        // Assign values

        img.src = imgSrc[i];

        // Add to DOM
        imgDiv.append(img);
        cardArray[i].append(imgDiv);
        container.append(cardArray[i]); 

        showMoreBtn(i);
    }
}

makeCards();

//Function to make desrciptions 

function showDescription(i) {

    //Make Elements
    let showLessDiv = document.createElement('div');
    let paragraph = document.createElement('p');
    let link = document.createElement('a')
    let showLess =document.createElement('button')

    //Assign values

    showLessDiv.classList.add('see-less');
    showLess.innerHTML = 'Show less';
    showLess.classList.add('less-btn')

    paragraph.innerHTML = description[i];

    link.innerHTML = 'Go to live site';
    link.href = links[i];
    link.target = '_blank';

    //Add to DOM 
    cardArray[i].removeChild(cardArray[i].children[1])
    showLessDiv.append(paragraph, link, showLess)
    cardArray[i].append(showLessDiv);

    // Show less event listener

    showLess.addEventListener('click', () => {
        cardArray[i].removeChild(cardArray[i].children[1])
        showMoreBtn(i);
    })
}
