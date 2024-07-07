

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    //it add open class to the corresponding element
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}