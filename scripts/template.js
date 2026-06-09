function getDishesTemplate(dish) {
    return /*html*/`
    <div class="menu-cards">

        <img src="./assets/${dish.image}" alt="${dish.name}">

        <div class="menu-info">
        <h3>${dish.name}</h3>
        <p>${dish.description}</p>
        </div>

        <div class="menu-action">
        <span>${dish.price.toFixed(2)}€</span>
        <button class="btn-cart${dish.id}" onclick="addToBasket('${dish.id}')">Add to basket</button>
        </div>

    </div>
    `;
}

function getBasketTemplate(item) {
    return /*html*/`
    <div class= "basket-item-card">
        <div class="item-card-header">
            <span>${$item.name}</span>
            <button>X</button>
        </div>
        <div class="item-card-footer">
            <div>
            <button>+</button>
            <span>1</span>
            <button>-</button>
            </div>
            <span>${item.price}</span>
        </div>
    </div>
    `
}