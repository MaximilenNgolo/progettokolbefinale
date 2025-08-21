 let navbar= document.querySelector(`#navbar`);
let links = document.querySelectorAll(`.nav-link`);
let logoNavbar = document.querySelector(`#logoNavbar`);

let lightsaber = document.querySelector(`#Lightsaber`);
let collapse =document.querySelector(`#collapse`);

console.log(window.logoNavbar.src);









let check = false;



window.addEventListener("scroll" , ()=>{
    let scrolled = window.scrollY;

    if (scrolled > 0) {
        navbar.classList.remove("bg-black");
        navbar.classList.add("bg-yellow");

        collapse.classList.remove("bg-black");
        collapse.classList.add("bg-yellow");
        navbar.style.height= "70px";
        
        
        
        links.forEach( (link)=>{
            link.style.color= `black`;
        });

        logoNavbar.src = './medias/logo-b.png';

        lightsaber.src= `./medias/lightsaber-b.png`

     




    
    


        

        
        
    
    }else{
        navbar.classList.add("bg-black");
        navbar.classList.remove("bg-yellow");


       collapse.classList.add("bg-black");
        collapse.classList.remove("bg-yellow"); 
        navbar.style.height= "140px";

        
        
        links.forEach( (link)=>{
            link.style.color= "yellow";
        });
         logoNavbar.src = './medias/logo-y.png';

         lightsaber.src= `./medias/lightsaber-y.png`


         
         

    }
}); 




window.addEventListener('click', () => {
  if (!check) {
    lightsaber.style.transform = `rotate(-90deg)`;
    check = true;
  } else {
    lightsaber.style.transform = `rotate(0deg)`;
    check = false;
  }
});

let firstNumber = document.querySelector(`#firstNumber`);

let secondNumber = document.querySelector(`#secondNumber`);
let thirdNumber = document.querySelector(`#thirdNumber`);


 let confirm = true;


function createInterval(n,element,time) {
   let counter= 0;


    let interval= setInterval(() => {
        if(counter < n){
            counter++;
            element.innerHTML = counter;

        }else{
            clearInterval(interval);
        }
        
    }, time);

    setTimeout(function() {
    confirm = true;
}, 8000);









    
    
};




let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting && confirm == true){
            createInterval(100, firstNumber,100);
            createInterval(150, secondNumber,50);
            createInterval(100, thirdNumber,100);
            confirm = false;

        }
    })
});



observer.observe(firstNumber);





let reviews =[
    {user:`rossella`,description:`il piu bel film del mondo`, rank: 5},
    {user:   `donnarumma`,description:`max non è un buon attore`, rank: 3},
    {user: `rossa`,description:`max è l'uomo nero`, rank: 4},
    {user: `rossella`,description:`emanuel è forte`, rank: 3},
]


let swiperWrapper= document.querySelector(`.swiper-wrapper`);



reviews.forEach((recensione)=>{
    let div= document.createElement(`div`);
     div.classList.add(`swiper-slide`);
     div.innerHTML = `
      <div class="card-review">
            <p class="lead text-center">${recensione.description}</p>
            <p class="h4 text-center">${recensione.user}</p>

            <div class="d-flex justify-content-center star">
              


            </div>
      </div> `;

       swiperWrapper.appendChild(div);  
});

let stars = document.querySelectorAll(`.star`);

stars.forEach((star,index)=>{
    for (let i = 1; i <= reviews[index].rank; i++) {
        let icon = document.createElement(`i`);
        icon.classList.add(`fa-solid`, `fa-star`);
        star.appendChild(icon);
        
    }

    let difference = 5 - reviews[index].rank;

     for (let i = 1; i <= difference; i++) {
        let icon = document.createElement(`i`);
        icon.classList.add(`fa-regular`, `fa-star`);
        star.appendChild(icon);
        
    }
})


/* swiper */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: "flip",
      grabCursor: true,
       loop: true,

  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


   autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },

 
});