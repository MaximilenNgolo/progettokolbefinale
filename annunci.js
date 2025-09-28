


 
fetch("./annunci.json")
.then((response) => response.json())
.then((data) => {
    let radiowrapper = document.querySelector("#radiowrapper");
    let cardWrapper = document.querySelector(`#cardWrapper`)


    data.sort((a,b) => a.price - b.price)

    function RadioCreate() {
      let categories = data.map((annuncio) => annuncio.category);

     /*  let uniqueCategories = []; */
      
      /*     categories.forEach((category) => {
        if ( !uniqueCategories.includes) {
            uniqueCategories.push(category);
            } 
            }); */
            
            
            let uniqueCategories = Array.from(new Set(categories));
            

            uniqueCategories.forEach((category)=>{
                let div = document.createElement(`div`)
                div.classList.add(`form-check`)
                div.innerHTML= `
                    <input class="form-check-input" type="radio" name="categories" id="${category}">
                  <label class="form-check-label" for="${category}">
                    ${category}
                  </label>
        
                `
                radiowrapper.appendChild(div)
            })
    
}
RadioCreate();

 function truncateword(string){
    if (string.length > 15){
        return string.split(``)[0] + `...`;
    }else{
        return string;
    }

 }

function showCards(Array) {
        cardWrapper.innerHTML = '';
        Array.forEach ((annuncio, i)=>{
        let div = document.createElement (`div`);
        div.classList.add(`card-custom`);
        div.innerHTML = `
            <img src="https://picsum.photos/${300 + i}"class="img-fluid img-card"
            <p class="h2" title= "${annuncio.name}"> ${ truncateword(annuncio.name)}</p>
            <p class="h3">${annuncio.category}</p>
            <p class="lead">${annuncio.price} €</p>
         `;
         cardWrapper.appendChild(div);
    })
    
};
showCards(data);

let radioButtons = document.querySelectorAll(`.form-check-input`);

function filterBycategory(array){
    
    let arrayFromNodelist = Array.from(radioButtons);
    let button = arrayFromNodelist.find((bottone) => bottone.checked);
    let categoria = button.id;
    
    
    /* 
    let categoria = Array.from(radioButtons).find((button)=> button.checked).id; */
    if (categoria != 'All') {
        let filtered = array.filter((annuncio)=> annuncio.category == categoria);
        console.log(categoria);
        
        
        return filtered;
    }else{
        return array;
    }
}
radioButtons.forEach((button)=>{
    button.addEventListener( `click`, ()=>{

        SetpriceInput(filterBycategory(data));
    GlobalFiltri();
    
    


    })
    
});

let priceInput = document.querySelector(`#priceInput`)
let PriceValue = document.querySelector(`#PriceValue`)


function SetpriceInput(array){

    let prices = array.map ((annuncio)=> +annuncio.price);
    prices.sort( (a,b) => a-b);
    let maxPrice = Math.ceil(prices.pop());
    priceInput.max = maxPrice;
    priceInput.value = maxPrice;
    PriceValue.innerHTML = maxPrice;
}

SetpriceInput(filterBycategory(data));


function filterByPrice(array){
    let filtered = array.filter((annuncio)=> +annuncio.price <= priceInput.value);
        return filtered;
}

priceInput.addEventListener( `input`,()=>{
    PriceValue.innerHTML = priceInput.value
    GlobalFiltri();
})

// --- Filtre par mot-clé
let wordInput = document.querySelector("#wordInput");

function filterByWord(array) {
    let filtered = array.filter((annuncio) =>
        annuncio.name.toLowerCase().includes(wordInput.value.toLowerCase())      /* al posto word input.value era parola */
    );
    return filtered;
}

wordInput.addEventListener('input', () => {
    GlobalFiltri();
});

  function GlobalFiltri(){

    let maxim = filterBycategory(data);
    let kolbe = filterByPrice(maxim);
    
    let filteredByWord = filterByWord(kolbe);

    showCards(filteredByWord);
 
  }

  

  }); 