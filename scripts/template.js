function getDishesTemplate(dish) {
    
    return /*html*/`
    <div class="menu-cards">

        <img src="./assets/${dish.image}" alt="${dish.name}">

        <div class="menu-info">
        <h3>${dish.name}</h3>
        <p>${dish.description}</p>
        </div>

        <div class="menu-action">
        <span>${dish.price}€</span>
        <button class="btn-cart${dish.id}" onclick="addToBasket('${dish.id}')">Add to basket</button>
        </div>

    </div>
    `;
}


function getBasketTemplate(item, index) {
    return /*html*/`
    <section class="basket-wrapper">
        <div >
        <div class="close-btn-wrapper">
            <button class="close-btn">X</button>
        </div>
        <h2>Your Basket</h2>
        <div id="cart-content"></div>
        <table>
            <tbody>
                <tr class="total">
                    <td>Total</td>
                    <td>00,00€</td>
                </tr>
            </tbody>
        </table>
        <button class="buy-btn">Buy Now</button>
        </div>
    </section>
    `
}