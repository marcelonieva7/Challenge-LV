const navbarToggle = document.querySelector("#navbar-toggle");
const navbar = document.querySelector("#nav-bar");

const toggleNavbar = () => {
    navbarToggle.classList.toggle("active");
    navbar.classList.toggle("show-navbar");
}

const dropDowns = document.querySelectorAll('nav ul li a:not(:only-child)')

for (let i = 0; i < dropDowns.length; i++) {
    dropDowns[i].addEventListener("click", ()=>{
        dropDowns[i].nextSibling .nextSibling .classList.toggle("show-navbar");
    })
}
const pricerange = document.querySelector(".price-range");
const togglePrice = document.querySelector("#toggle-price");

const onClicktogglePrice = () => {
    pricerange.classList.toggle("hide-price-range");
    togglePrice.classList.toggle("rotate-arrow");
}

togglePrice.addEventListener("click", onClicktogglePrice);