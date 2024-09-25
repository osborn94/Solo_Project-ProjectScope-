// menu button
const menuBtn = document.querySelector('.menuIcon')
        const navlinks = document.querySelector('.nav-links')
        menuBtn.addEventListener('click',()=>{
            navlinks.classList.toggle('mobile-menu')
        })
// scroll to Blog section
function scrollToClass(className) {
    const element = document.querySelector(`.${className}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
// scroll to Blog section
function scrollToClass(className) {
    const element = document.querySelector(`.${className}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}