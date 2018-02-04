const openButton = document.querySelector(".burger");

const navPanel = document.querySelector(".nav-panel");

const bodyModal = document.body;

openButton.addEventListener('click', function(){
    openButton.classList.toggle("burger-active");
    navPanel.classList.toggle("nav-panel-active");
    bodyModal.classList.toggle("body-modal-open");
    
});