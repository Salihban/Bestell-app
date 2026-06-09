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
        <button class="btn-cart" onclick="addDishToBasket('${dish.id}')">Add to basket</button>
        </div>

    </div>
    `;
}

function getBasketTemplate(items) {

    return /*html*/`
    <div class= "basket-item-card">
        <div class="item-card-header">
            <span class="basket-card-titel">${items.amount}X ${items.name}</span>
            <button onclick="deleteFromBasket(${items.id})">🗑</button>
        </div>
        <div class="item-card-footer">
            <div>
            <button onclick="minusAmount(${items.id})">-</button>
            <span>${items.count}</span>
            <button onclick="plusAmount(${items.id})">+</button>
            </div>
            <span>${items.Price.toFixed(2)}€</span>
        </div>
    </div>
    `
}