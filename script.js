const burgerMenu = document.querySelector('.burger-menu');
const navLinksContainer = document.querySelector('.nav-links-container');
const navUserCabinet = document.querySelector('.nav-user-cabinet');
const navBarBackground = document.querySelector('.nav-bar-background');
const poster = document.querySelector('.poster');
let navMenu = false;

burgerMenu.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    navUserCabinet.classList.toggle('active');
    
    navMenu = !navMenu;
    
    if (navMenu) {
        navBarBackground.classList.add('remove-opacity'); 
        navBarBackground.classList.remove('add-opacity');
    } else {
        scrollChecker(); 
    }
});

window.addEventListener('scroll', scrollChecker);

function scrollChecker() {
    const navBarBackground = document.querySelector('.nav-bar-background');
    
    if (window.scrollY < poster.clientHeight && !navMenu) {
        navBarBackground.classList.remove('remove-opacity');
        navBarBackground.classList.add('add-opacity');
    } else {
        navBarBackground.classList.add('remove-opacity');
        navBarBackground.classList.remove('add-opacity');
    }
}

scrollChecker();
