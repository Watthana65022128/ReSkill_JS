const header = document.querySelector('.header-con')
const navAbout = document.querySelector('.nav-about')
const navSkill = document.querySelector('.nav-skill');
const navProfi = document.querySelector('.nav-profi');
const navContact = document.querySelector('.nav-contact');
const navName = document.getElementById('nav-name');
const ClickBtn = document.querySelector('.Click-btn');
let lastScrollY = 0;

ClickBtn.addEventListener('click', () => {
    document.querySelector('.about-me').scrollIntoView({
        behavior: 'smooth'
    });
})

navName.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        header.classList.add('hide');
    }
    else {
        header.classList.remove('hide');
    }
    lastScrollY = window.scrollY;
});

navAbout.addEventListener('click', () => {
    document.querySelector('.about-me').scrollIntoView({
        behavior: 'smooth'
    });
});

navSkill.addEventListener('click', () => {
    document.querySelector('.skill').scrollIntoView({
        behavior: 'smooth'
    });
});

navProfi.addEventListener('click', () => {
    document.querySelector('.portfolio').scrollIntoView({
        behavior: 'smooth'
    });
});

navContact.addEventListener('click', () => {
    document.querySelector('.contact-form').scrollIntoView({
        behavior: 'smooth'
    });
});