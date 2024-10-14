
const head1 = document.querySelector("head");
let rect = head1.getBoundingClientRect();

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
<ul id="myList">
<li name="sec1" class="btn">${arrMenus[0]}</li>
<li name="sec2" class="btn active">${arrMenus[1]}</li>
<li name="sec3" class="btn">${arrMenus[2]}</li>
<li name="sec4" class="btn">${arrMenus[3]}</li>
</ul>
`
//check if it's working correctly
console.log(myNav);

//map it to myMenu
myMenu.appendChild(myNav);


// for click event we take all nav items
const _sec = document.querySelectorAll("li");
//use a loop to creat a click event foe each 
for (let i = 0; i < _sec.length; i++) {
    _sec[i].addEventListener('click', function () {
        //set a condition to check the item in the list and map it to it's section
        // and activate the current element to active class
        if (this.textContent == "section 1") {
            let element = document.querySelector("#sec1");
            element.scrollIntoView({ behavior: 'smooth' });
            
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";

        }
        else if (this.textContent == "section 2") {
            let element = document.querySelector("#sec2");
            element.scrollIntoView({ behavior: 'smooth' });
           
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";

        }
        else if (this.textContent == "section 3") {
            let element = document.querySelector("#sec3");
            element.scrollIntoView({ behavior: 'smooth' });

            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        }
        else {

            let element = document.querySelector("#sec4");
            element.scrollIntoView({ behavior: 'smooth' });

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
             const activeL = document.querySelector(`li[name="${id}"]`);
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



