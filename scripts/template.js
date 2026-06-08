function getDishesTemplate(index) {
    return /*html*/`
    <div class="menu-cards">

        <img src="./assets/${burger.image}" alt="${burger.name}">

        <div class="menu-info">
        <h3>${burger.name}</h3>
        <p>${burger.description}</p>
        </div>

        <div class="menu-action">
        <span>${burger.price}€</span>
        <button id="btn-cart${burger.id}" onclick="addToBasket(${index})">Add to basket</button>
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