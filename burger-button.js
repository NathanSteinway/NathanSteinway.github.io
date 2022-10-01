const burgerButton = document.getElementsByClassName('burger-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

burgerButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})