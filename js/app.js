
// create a new array for menu
const arrMenus = ['section 1', 'section 2', 'section 3', 'section 4'];

//search for an id #menus from my html document
const myMenu = document.querySelector('#menus');

// creat a new nav section for my html document
const myNav = document.createElement('nav');

//attach it to class
myNav.classList.add("nav");

//map my array menu to the new nav section i created
myNav.innerHTML = `
<ul>
<li>${arrMenus[0]}</li>
<li>${arrMenus[1]}</li>
<li>${arrMenus[2]}</li>
<li>${arrMenus[3]}</li>
</ul>
`
//check if it's working correctly
console.log(myNav);

//map it to myMenu
myMenu.appendChild(myNav);



// create some cards in the footer
const addfoot= document.querySelector('.foot');

//create an array contain the details of the cards
const myCards = [
    {
        detail1: 'Home',
        detail2: 'Apout Us',
        detail3: 'Contact Us'
    },
    {
        detail1: 'Follow Us',
        detail2: 'Instgram',
        detail3: 'Facebook'
    },
    {
        detail1: 'My blog website',
        detail2: 'Galary',
        detail3: 'Copyright 2024' 
    }
];

//create a function that map the cards array to an elment in html 
function creatCards(card) {

    const myh3 = document.createElement('h3');
    myh3.classList.add("box");
    myh3.innerHTML=`
    ${card.detail1}</br>
    ${card.detail2} </br>
    ${card.detail3}
    `
    addfoot.appendChild(myh3);
}
//use forEach loop to print out the function result for each cards in html
myCards.forEach(creatCards);

