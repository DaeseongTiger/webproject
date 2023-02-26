//taggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scrool
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetTopHeight;
        let id = sec.getAttribute('id')
        
        if(top >= offset&& top < offset +height) {
            navLink.forEach(link =>{
                link.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('acrive')

            });
        };
        });
    };
    //scroll reveral
    ScrollReveal({ 
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });
    ScrollReveal().reveal('.home-content,.heading', { origin: top });
    ScrollReveal().reveal('.home-img,.skill-container,.portfolio-container,', { origin: bottom });