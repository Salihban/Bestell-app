function init(){
    renderBurger();
    renderPizza();
    renderSalad();
}


function renderBurger() {
    let contentRef = document.getElementById("burgerCard");
    contentRef.innerHTML = "";

    for (let i = 0; i < burgerMenu.length; i++) {
        contentRef.innerHTML += getBurgerTemplate(burgerMenu[i]);
    }
}

function renderPizza() {
    let contentRef = document.getElementById("pizzaCard");
    contentRef.innerHTML = "";

    for (let i = 0; i < burgerMenu.length; i++) {
        contentRef.innerHTML += getPizzaTemplate(pizzaMenu[i]);
    }
}

function renderSalad() {
    let contentRef = document.getElementById("saladCard");
    contentRef.innerHTML = "";

    for (let i = 0; i < burgerMenu.length; i++) {
        contentRef.innerHTML += getSaladTemplate(saladMenu[i]);
    }
}