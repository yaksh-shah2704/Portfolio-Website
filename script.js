let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let heading = document.querySelector('.heading');
const status = document.getElementById('status');
const readMoreBtn = document.getElementById('readMore');
const aboutText = document.querySelector('.about-text');
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");
const dots = document.querySelectorAll('.dot');
const totalProjects = 6;
const animationDuration = 80000;
let currentIndex = 0;
const wrapper = document.querySelector('.projects .wrapper');
wrapper.innerHTML += wrapper.innerHTML;


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Full-Stack Developer', 'AI/ML Developer', 'Web Designer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1200,
    loop: true,
});

readMore.addEventListener('click', function (e) {
    e.preventDefault();

    if (aboutText.classList.contains('collapsed')) {
        aboutText.classList.remove('collapsed');
        aboutText.classList.add('expanded');
        readMoreBtn.textContent = 'Read Less';
    } else {
        aboutText.classList.remove('expanded');
        aboutText.classList.add('collapsed');
        readMoreBtn.textContent = 'Read More';
    }
});

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});


function updateDot(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}
setInterval(() => {
    currentIndex = (currentIndex + 1) % dots.length;
    updateDot(currentIndex);
}, 5000);