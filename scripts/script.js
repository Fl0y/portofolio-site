document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".header-navbar");
    const container = document.querySelector(".container-header");
    const preview = document.querySelector(".main-preview");

    if (!navbar || !preview) {
        console.error("Navbar или main-preview не найдены!");
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    navbar.classList.add("scrolled");
                    container.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                    container.classList.remove("scrolled");
                }
            });
        },
        { threshold: 0.2 } // когда видимость preview меньше 20%, включается эффект
    );

    observer.observe(preview);

    // --- Script for menu categories ---
    const buttons = document.querySelectorAll('.menu-options button');
    const categories = document.querySelectorAll('.menu-block');

    buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;

        categories.forEach(cat => cat.classList.remove('active'));
        document.querySelector(`.menu-block[data-category="${category}"]`)
        .classList.add('active');
    });
    });

    // Показываем первую категорию по умолчанию
    categories[0].classList.add('active');

    // Menu mobile
    const menuBtn = document.getElementById("navbar__menu-btn");
    const navLinks = document.getElementById("navbar-links");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("activeMenu");
        menuBtn.classList.toggle("activeMenu")
    });
});