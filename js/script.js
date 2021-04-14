'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger'),
        navbar = document.querySelector('.navbar'),
        header = document.querySelector('.header'),
        sections = document.querySelectorAll('section'),
        links = document.querySelectorAll('.menu__link');

    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    window.addEventListener('scroll', () => {
        let current = '';
        burger.classList.remove('active');
        navbar.classList.remove('active');

        (window.pageYOffset > 60) ? header.classList.add('active') : header.classList.remove('active');

        sections.forEach(section => {
            const sectionTop = section.offsetTop,
                sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - sectionHeight / 10)) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.classList.contains(current)) {
                link.classList.add('active');
            }
        });
    });

    navbar.addEventListener('click', function(event) {
        let target = event.target;
        if (target.classList.contains('menu__link')) {
            burger.classList.remove('active');
            this.classList.remove('active');
        }
    });
});