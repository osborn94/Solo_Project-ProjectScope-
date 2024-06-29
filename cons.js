const  menuBtn = document.querySelector('.menuIcon')
const navlinks = document.querySelector('.nav-links')
menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu')
})