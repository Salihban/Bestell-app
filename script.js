function init(){
    renderBurger();
}


function renderBurger() {
    let contentRef = getElementById("burgerCard");
    contentRef.innerHTML = "";

    for (let i = 0; i < burgerCard.length; i++) {
        contentRef.innerHTML += getBurgerTemplate(burgerMenu[i]);
    }
}