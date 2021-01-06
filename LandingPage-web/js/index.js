$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

//scroll navbar

function scrollNavbar() {
    window.addEventListener("scroll", function() {
        const header = document.querySelector(".box-color");
        header.classList.toggle("sticky", window.scrollY > 0);
    });
}
setTimeout(scrollNavbar(), 3000);

// toggle mobie
function toggleMenu() {
    const menuToggle = document.querySelector(".menuToggle");
    const active = menuToggle.classList.toggle("active");
    const navbarShow = document.querySelector(".box-color");
    const hideNavbar = document.querySelector(".box-color");
    (active) ? navbarShow.style.display = "block": hideNavbar.style.display = "none";
}
toggleMenu();