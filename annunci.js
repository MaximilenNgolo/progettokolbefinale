


 
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


function filterBycategory(categoria){
    if (categoria != 'All') {
        let filtered = data.filter((annuncio)=> annuncio.category == categoria)
        
        showCards(filtered);
    }else{
        showCards(data)
    }
    
    
}

filterBycategory(`Musica`)


 let radioButtons = document.querySelectorAll(`.form-check-input`);

radioButtons.forEach((button)=>{
    button.addEventListener( `click`, ()=>{
    
        filterBycategory(button.id)
        

    })
    
}) 

let priceInput = document.querySelector(`#priceInput`)
let PriceValue = document.querySelector(`#PriceValue`)


function SetpriceInput(){

    let prices = data.map ((annuncio)=> +annuncio.price);
    prices.sort( (a,b) => a-b);
    let maxPrice = Math.ceil(prices.pop());
    priceInput.max = maxPrice;
    priceInput.value = maxPrice;
    PriceValue.innerHTML = maxPrice;
}

SetpriceInput()


function filterByPrice(){
    let filtered = data.filter((annuncio)=> +annuncio.price <= priceInput.value)
    showCards(filtered)
}

priceInput.addEventListener( `input`,()=>{
    PriceValue.innerHTML = priceInput.value
    filterByPrice();
})

// --- Filtre par mot-clé
let wordInput = document.querySelector("#wordInput");

function filterByWord(parola) {
    let filtered = data.filter((annuncio) =>
        annuncio.name.toLowerCase().includes(parola.toLowerCase())
    );
    showCards(filtered);
}

wordInput.addEventListener('input', () => {
    filterByWord(wordInput.value);
});



  }); 