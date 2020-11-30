const hamburger = document.getElementById('hamburger');
const header = document.querySelector('header');


hamburger.addEventListener('click', () => {
    if(header.classList.contains('open')){
        header.classList.remove('open');
    }
    else {
        header.classList.add('open');
    }
}) 

/*
hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
    if(header.classList.contains('open')){
        header.classList.remove('open');
    }
    else {
        header.classList.add('open');
    }
} */