function init(){
    renderBurger();
}


function renderBurger() {
    let contentRef = document.getElementById("burgerCard");
    contentRef.innerHTML = "";

    for (let i = 0; i < burgerMenu.length; i++) {
        contentRef.innerHTML += getBurgerTemplate(burgerMenu[i]);
    }
}