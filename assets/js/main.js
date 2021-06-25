
console.log('test')

const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const navLink = document.querySelectorAll('.nav--link')



//check if user click toggle to show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show--menu')
    })
}
//check if user want to close menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show--menu')
    })
}

// remove menu in mobile
function linkAction() {
    //clicked on nav-link remove show--menu
    navMenu.classList.remove('show--menu')
}
navLink.forEach(link => link.addEventListener('click', linkAction))



/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/