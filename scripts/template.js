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

function getBasketTemplate(item, index) {
    let totalItemPrice = item.price * item.count;

    return /*html*/`
    <div class= "basket-item-card">
        <div class="item-card-header">
            <span>${$item.name}</span>
            <button onclick="deleteFromBasket(${index})">X</button>
        </div>
        <div class="item-card-footer">
            <div>
            <button onclick="minusAmount(${index})">-</button>
            <span>${item.count}</span>
            <button onclick="plusAmount(${index})">+</button>
            </div>
            <span>${totalItemPrice.toFixed(2)}€</span>
        </div>
    </div>
    `
}