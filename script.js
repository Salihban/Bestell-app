function init(){
    renderBurger();
    renderPizza();
    renderSalad();
    renderBasket();
}


function renderBurger() {
    let contentRef = document.getElementById("burgerCard");
    contentRef.innerHTML = "";

    for (let i = 0; i < burgerMenu.length; i++) {
        contentRef.innerHTML += getBurgerTemplate(burgerMenu[i], i);
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


let basket = [];

function addToBasket(index) {
    basket.push(burgerMenu[index]);

    renderBasket();
}

function renderBasket() {
    cartRef = document.getElementById("cart");

    cartRef.innerHTML = "<h2>Your Basket</h2>";

    for (let i = 0; i < basket.length; i++) {
        cartRef.innerHTML += getBasketTemplate(basket[i]);
    }
}

function deleteItem(index) {
    basket.splice(index, 1);

    renderBasket();
}