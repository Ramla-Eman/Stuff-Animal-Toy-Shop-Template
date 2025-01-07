const navToggle = document.getElementById('nav-toggle');
const navContent = document.getElementById('nav-content');

navToggle.addEventListener('click', () => {
    navContent.classList.toggle('hidden');
});

// document.getElementById("shop-link").classList.add("active");