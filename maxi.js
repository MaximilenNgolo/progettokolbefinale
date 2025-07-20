let navbar= document.querySelector(`#navbar`);

window.addEventListener(`scroll`, ()=>{
    let scrolled = window.scrollY;

    if (scrolled > 0) {
        navbar.classList.remove(`bg-black`);
        navbar.classList.add(`bg-yellowS`);

        
    }
})