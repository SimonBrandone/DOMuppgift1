// Simon Brandoné

// Ändrar h3 texten till Potato
let h3Element = document.querySelector('h3');
h3Element.innerText = 'Potato';

// Ändrar namn på Home knappen till Start
let headernav = document.getElementById('header-navigation');
let navElementChildren = headernav.children;
navElementChildren[0].innerText = 'Start';

//Ändrar Contact till Mail Us
let contactMail = document.getElementsByTagName('article');
let contactMailChild = contactMail[3];
let contactEnd = contactMailChild.querySelectorAll('a');
contactEnd[2].innerText = 'Mail Us'

//Ändrar texten på en av Varorna
let pElement = document.querySelectorAll('p');
let pElement2 = pElement[1];
pElement2.innerText = 'Bla bla bla bla ändrat'

// Bytar färg till röd på en knapp
let buttonColor = document.querySelector('button');
buttonColor.style.backgroundColor = 'red'

// Bytar backgroundsfärg på en vara till Grön
let hoodieBackground = document.querySelectorAll('figure');
let hoodieBackgroundChange = hoodieBackground[1];
hoodieBackgroundChange.style.backgroundColor = 'Green'

// Ändrar texten på adressen
let adress = contactMail[4];
let adressAndring = adress.querySelector('p')
adressAndring.innerText = 'Ny gata Ostrong 321 1337, L33T'

// Lägger till en ny vara
let ArtElement = document.querySelector('.art-1');
ArtElement.insertAdjacentHTML('afterend', 
`<article class="art-4">
<figure><img src="img/hoodie-forrest.png"
alt="hoodie"></figure>
<h2>Sinus Hoodie</h2>
<h3>Forrest</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus enim!</p>
<button>buy</button>
</article>`);
let art4 = document.querySelector('.art-4');

// Skapar ny Ul och Li samt namnger li
const liThings = ['Ost', 'Kyckling', 'Banan', 'Päron', 'Pannkakor'];
let nyUl = document.createElement('ul');
for(let i=0; i<5; i++){
    let nyLi = document.createElement('li');
    nyLi.setAttribute('class', 'list-items');
    nyUl.appendChild(nyLi);
    nyLi.innerText = liThings[i];
};

// Lägger till border på Li items
let nyLis = nyUl.children;
for(let i=0; i<nyLis.length; i++){
    nyLis[i].style.border = 'thin solid red';
}; 

// Lägger in Ul i main DIV
let main = document.querySelector('main');
main.appendChild(nyUl);

// Ändrar färg på all "p" text på hemsidan
let pColor = document.getElementsByTagName('p');
for (let i = 0; i < pColor.length; i++) {
    pColor[i].style.color = 'Orange';
};

// Ändrar text på alla "button" på hemsidan
let buttonText = document.querySelectorAll('button');
for (let i = 0; i < buttonText.length; i++) {
    buttonText[i].innerText = 'Cart'
};

// Lägger till class "active" på home i nav
let navHome = navElementChildren[0];
navHome.classList.add('active');

// Simon Brandoné

// Tar bort class "logo" på logobilden
document.querySelector('img').classList.remove('logo');

// Skapar nytt element och lägger till i naven
let Ost = document.createElement('a');
let OstText = document.createTextNode('Ost');
Ost.appendChild(OstText);
Ost.href = '#'
navHome.after(Ost);

// Skapar en reset knapp och lägger in på hemsidan
let resetButton = document.createElement('button');
let resetButtonText = document.createTextNode('Reset');
resetButton.appendChild(resetButtonText);
ArtElement.before(resetButton);

// Lägger till event på resetknappen samt skapar en funktion för att återställa allt på hemsidan
resetButton.addEventListener('click', resetAll);
function resetAll(){
    adressAndring.innerText = `Sinus skateboards 
    Railsvägen 13 
    133 37, Rampnäs`
    hoodieBackgroundChange.style.backgroundColor = 'Orange'
    buttonColor.style.backgroundColor = '#222'
    pElement2.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque sint quaerat consequatur laudantium!'
    contactEnd[2].innerText = 'Contact'
    navElementChildren[0].innerText = 'Home';
    h3Element.innerText = 'Ash';
    Ost.style.display = 'none';
    art4.style.display = 'none';
    let buttonText = document.querySelectorAll('button');
for (let i = 0; i < buttonText.length; i++) {
    buttonText[i].innerText = 'Buy'
};
let pColor = document.getElementsByTagName('p');
for (let i = 0; i < pColor.length; i++) {
    pColor[i].style.color = 'black';
};
    nyUl.style.display = 'none';
    resetButton.style.display = 'none';
    document.querySelector('img').classList.add('logo');
    navHome.classList.remove('active');
}

// Simon Brandoné