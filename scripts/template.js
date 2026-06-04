function getBurgerTemplate(burger) {
    return /*html*/`
    <div class="menu-card">
        <img src="./assets/${burger.image}" alt="${burger.name}">
        <h3>${burger.name}</h3>
        <p>${burger.description}</p>
        <span>${burger.price}€</span>
        <button>Add to basket</button>
    </div>
    `;
}

function getPizzaTemplate(pizza) {
    return /*html*/`
    <div class="menu-card">
        <img src="./assets/${pizza.image}" alt="${pizza.name}">
        <h3>${pizza.name}</h3>
        <p>${pizza.description}</p>
        <span>${pizza.price}€</span>
        <button>Add to basket</button>
    </div>
    `;
}

function getSaladTemplate(salad) {
    return /*html*/`
    <div class="menu-card">
        <img src="./assets/${salad.image}" alt="${salad.name}">
        <h3>${salad.name}</h3>
        <p>${salad.description}</p>
        <span>${salad.price}€</span>
        <button>Add to basket</button>
    </div>
    `;
}