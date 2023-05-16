/* NAVBAR */
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
        link.style.animation
           ? (link.style.animation = "")
           : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }
    
    handleClick() { 
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
        }

}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

/* BOTÃO DE NAVEGAÇÃO */

function scrolll(){
    let left = document.querySelector(".scroll-imagens");
    left.scrollBy(550, 0)
}

function scrolllr(){
    let right = document.querySelector(".scroll-imagens");
    right.scrollBy(-550, 0)
}

/* BOTÃO DE VOLTAR AO TOPO */

const btn = document.getElementById("btnTop")

btn.addEventListener("click", function(){
    window.scrollTo(0,0)
})

document.addEventListener(`scroll`, ocultar)

function ocultar(){
    if(window.scrollY > 10){
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
}

ocultar()

/* BOLHAS */

function createBolhas(){
    const section = document.getElementById("bolhas");
    const createElement = document.createElement("span");
    var size = Math.random() * 60;

    createElement.style.width = 20 + size + "px";
    createElement.style.height = 20 + size + "px";
    createElement.style.left = Math.random() * innerWidth + "px";
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove();
    },4000)
}
setInterval(createBolhas, 50);