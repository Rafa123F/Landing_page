
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
