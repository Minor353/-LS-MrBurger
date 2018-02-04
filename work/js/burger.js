const openButton = document.querySelector(".burger");

const navPanel = document.querySelector(".nav-panel");

openButton.addEventListener('click', function(){
    openButton.classList.toggle("burger-active");
    navPanel.classList.toggle("nav-panel-active");
});