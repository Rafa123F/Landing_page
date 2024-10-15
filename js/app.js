//to create our menu , we should map it to the sections in the html
const sections = document.querySelectorAll("section");
// we use a loop to create our list items according to the sections attribute
sections.forEach(function (section) {

    let id = section.getAttribute("id");
    let content = section.dataset.name;
    const list = document.querySelector("#menu");
    const item = document.createElement('li');
   
    item.classList.add("btn");
    item.innerHTML = `${content}`;//<li> Section 1</li>
    item.dataset.name = id; //<li data-name="sec1"> Section 1</li>

    list.appendChild(item);
})
// set first Active class
const firstLi= document.querySelector("li");
let firstActive=firstLi.classList.add("active");

// for click event we take all nav items
const _Item = document.querySelectorAll("li");
const _sec= document.querySelectorAll("section");

//use a loop to creat a click event for each one 
for (let i = 0; i < _sec.length; i++) {
    _Item[i].addEventListener('click', function (event) {

        //set a condition to check the item in the list and map it to it's section
        let sec_name=_sec[i].getAttribute("data-name");

        if (this.textContent == sec_name) {
            event.preventDefault();
            let sId = _sec[i].getAttribute("id");
            console.log(sId);
            let element =document.querySelector(`#${sId}`);
            element.scrollIntoView({ behavior: 'smooth' });

            // and activate the current element to active class
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";

        }
    })
}

//use a separate function to set the active class
function setActive(element) {

    // get the list of the sections
    const ListItems = document.querySelectorAll("li");
// use the loop to remove all active class from the items 
    ListItems.forEach(function(item){
        item.classList.remove("active");
    })
    // add the active class to the current item
    element.classList.add("active");
}



// on scrolling activate current section
document.addEventListener('scroll', function () {

    const sections = document.querySelectorAll("section");
    sections.forEach(function (section) {
        // for each section use the getBoundingClientRect() to detect the element location relative to the viewport
        const rect = section.getBoundingClientRect();
        //use a condition to specify a particular area, and than map it to it's nav item to activate the active class
        if (rect.top <= 100 && rect.bottom >= 100) {
             const id = section.getAttribute("id");
             //check if it's catch the id correctly
             console.log(id);
             const activeL = document.querySelector(`li[data-name="${id}"]`);
             //use a setActive() function to set the active class
             setActive(activeL);

        }

    });

});


// create some cards in the footer
const addfoot = document.querySelector('.foot');

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
        detail1: 'Landing Page',
        detail2: 'Galary',
        detail3: 'Copyright 2024'
    }
];

//create a function that map the cards array to an elment in html 
function creatCards(card) {

    const myh3 = document.createElement('h3');
    myh3.classList.add("box");
    myh3.innerHTML = `
    ${card.detail1}</br>
    ${card.detail2} </br>
    ${card.detail3}
    `
    addfoot.appendChild(myh3);
}
//use forEach loop to print out the function result for each cards in html
myCards.forEach(creatCards);



