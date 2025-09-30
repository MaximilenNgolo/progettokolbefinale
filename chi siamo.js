let opener = document.querySelector(`.opener`);
let Wrappercircle = document.querySelector(`.circle`)



let teachers= [
    {name: `merlin`, description:`Colin Morgan est un acteur britannique, né le 1ᵉʳ janvier 1986 à Armagh en Irlande du Nord.`, url:`./merlin.jpeg`},
    {name: `gaius`, description:`Richard Wilson, né le 9 juillet 1936 à Gree`, url:`./gaius.jpeg`},
    {name: `arthur`, description:`giovane calciatore`, url:`./arthur.jpeg`},
    {name: `guenievre`, description:`serva`, url:`./guenievre.jpeg`},
];


   teachers.forEach((docente)=>{
    let div = document.createElement(`div`);
    div.classList.add(`moved`)
    div.style.backgroundImage = `url(${docente.url})`
    Wrappercircle.appendChild(div)

   })

let movedDivs = document.querySelectorAll(`.moved`)
let flipCard = document.querySelector(`.flip-card`)

let check = false;


opener.addEventListener( `click`,()=>{

   if (check==false) {
     opener.style.transform = `rotate(45deg)`
    movedDivs.forEach((moved,i)=>{
        let angle = (360 * i) /movedDivs.length;
        moved.style.transform =`rotate(${angle}deg) translate(150px)  rotate( -${angle}deg)`;
    });

    check=true;
    
   }else{
    check =false;

    opener.style.transform = `rotate(0deg)`
     movedDivs.forEach((moved,i)=>{
        moved.style.transform =`rotate(0deg) translate(0px)`;
    });
    flipCard.classList.add(`d-none`)
   }

})

let innerFace = document.querySelector(`.inner-face`);
let cardName = document.querySelector(`#cardName`)
let cardDescription = document.querySelector(`#cardDescription`)



movedDivs.forEach((moved,i)=>{
    moved.addEventListener(`click`, ()=>{
        flipCard.classList.remove(`d-none`)

        let docente = teachers[i]
        innerFace.style.backgroundImage = `url(${docente.url})`
        cardName.innerHTML = docente.name;
        cardDescription.innerHTML = docente.description

    })
})