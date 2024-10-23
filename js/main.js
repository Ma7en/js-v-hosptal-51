

/* === start header === */

let menu = document.querySelector('.header #menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.addEventListener("click", () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.addEventListener("scroll", () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
});


/* === start header === */

/*
==============================================
==============================================
*/


/* ===== start scroll spy ===== */




/* ===== end scroll spy ===== */

/*
==============================================
==============================================
*/

/* === start scroll secticon acrive link === */

let sections = document.querySelectorAll("section[id]");

function scrollActive() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {

        let sectionHeight = current.offsetHeight,
            sectionTop =current.offsetTop - 100 , // -58
            sectionId = current.getAttribute("id")

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
}

window.addEventListener('scroll', scrollActive);


/* === end scroll secticon acrive link === */

/*
==============================================
==============================================
*/



















