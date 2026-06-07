function getBurgerTemplate(burger) {
    return /*html*/`
    <div class="menu-cards">

        <img src="./assets/${burger.image}" alt="${burger.name}">

        <div class="menu-info">
        <h3>${burger.name}</h3>
        <p>${burger.description}</p>
        </div>

        <div class="menu-action">
        <span>${burger.price}€</span>
        <button id="btn-cart" onclick="addTobasket()">Add to basket</button>
        </div>

    </div>
    `;
}

function getPizzaTemplate(pizza) {
    return /*html*/`
    <div class="menu-cards">

        <img src="./assets/${pizza.image}" alt="${pizza.name}">

        <div class="menu-info">
        <h3>${pizza.name}</h3>
        <p>${pizza.description}</p>
        </div>

        <div class="menu-action">
        <span>${pizza.price}€</span>
        <button id="btn-cart" onclick="toggleCart()">Add to basket</button>
        </div>
        
    </div>
    `;
}

function getSaladTemplate(salad) {
    return /*html*/`
    <div class="menu-cards">

        <img src="./assets/${salad.image}" alt="${salad.name}">

        <div class="menu-info">
        <h3>${salad.name}</h3>
        <p>${salad.description}</p>
        </div>

        <div class="menu-action">
        <span>${salad.price}€</span>
        <button id="btn-cart" onclick="toggleCart()">Add to basket</button>
        </div>

    </div>
    `;
}


function getBasketTemplate(item) {
    return /*html*/`
    <div>
        <h4>${item.name}</h4>
    </div>

    <div>- 1 +</div>

    <span>${item.price}€</span>
    `;
}