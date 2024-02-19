const menuHamburger = document.querySelector("#menu-icon")
const navLinks = document.querySelector(".nav__links")
menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});

const questionBox = document.getElementsByClassName("question__box");
for(let i = 0; i < questionBox.length; i++){
    questionBox[i].addEventListener("click", function () {
        this.classList.toggle("active");
    });
}