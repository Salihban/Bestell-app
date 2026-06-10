function init(){
renderMenu();
renderBasket();
}


function renderMenu() {
renderSection("dish-section-Burger", 0);
renderSection("dish-section-Pizza", 1);
renderSection("dish-section-Salad", 2);
}

function renderSection(containerId, sectionIndex) {
    let contentRef = document.getElementById(containerId);
    if (!contentRef) return;
    contentRef.innerHTML = "";

    const items = menuData[sectionIndex].items;
    for (let i = 0; i < items.length; i++) {
        contentRef.innerHTML += getDishesTemplate(items[i]);
    }
}

function renderBasket() {
    let basketRef = document.getElementById("basket-cart");
    basketRef.innerHTML = "";

    for (let i = 0; i < basket.length; i++) {
    
    basketRef.innerHTML += getBasketTemplate(basket[i]);
    }
}

function renderPrice() {
    let subtotal = 0;
    
    for (let i = 0; i < basket.length; i++) {
        subtotal += basket[i].price * basket[i].amount;
    }
}


function addToBasket(id) {
    for (let i = 0; i < menuData.length; i++) {

    let foundItem = menuData[i].items.find(item => item.id === id);

    if (foundItem) {
    
    let basketItem = basket.find(item => item.id === foundItem.id);

    if (basketItem) {
        basketItem.amount++;
    } else {
        basket.push({id: foundItem.id, name: foundItem.name, price: foundItem.price, amount: 1});
    }
    }
}
    renderBasket();
}


function plusAmount(id) {
    let basketItem = basket.find(item => item.id === id);

    basketItem.amount++;
    renderBasket();
}

function minusAmount(id) {
    let basketItem = basket.find(item => item.id === id);

    basketItem.amount--;

    if (basketItem.amount <= 0) {
        deleteFromBasket(id);
    }
    renderBasket();
}


function deleteFromBasket(id) {
    let index = basket.findIndex(item => item.id === id);

    basket.splice(index, 1);
    renderBasket();
}