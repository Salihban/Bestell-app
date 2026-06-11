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

    let deliveryFee = 0;
    if (basket.length > 0) {
        deliveryFee = 4.90;
    }

    let total = subtotal + deliveryFee;
    document.getElementById("subtotal-price").innerHTML = subtotal.toFixed(2) + "€";
    
    document.getElementById("delivery-price").innerHTML = deliveryFee.toFixed(2) + "€";

    document.getElementById("total-price").innerHTML = total.toFixed(2) + "€";

    document.getElementById("buy-now-btn").innerHTML = `Buy now (${total.toFixed(2)}€)`;
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
    renderPrice();
    updateMobilBasketCounter();
}


function plusAmount(id) {
    let basketItem = basket.find(item => item.id === id);

    basketItem.amount++;
    renderBasket();
    renderPrice();
    updateMobilBasketCounter();
}

function minusAmount(id) {
    let basketItem = basket.find(item => item.id === id);

    basketItem.amount--;

    if (basketItem.amount <= 0) {
        deleteFromBasket(id);
    }
    renderBasket();
    renderPrice();
    updateMobilBasketCounter();
}


function deleteFromBasket(id) {
    let index = basket.findIndex(item => item.id === id);

    basket.splice(index, 1);
    renderBasket();
    renderPrice();
    updateMobilBasketCounter();
}


function buyNow() {
    if (basket.length === 0) {
        return;
    }
    const dialog = document.getElementById("order-dialog");
    dialog.classList.remove("d-none");
}

function closeOrderDialog() {
    const dialog = document.getElementById("order-dialog");
    dialog.classList.add("d-none");

    basket = [];
    renderBasket();
    renderPrice();
    updateMobilBasketCounter();
    closeMobileBasket();
}


function updateMobilBasketCounter() {
    let amount = 0;

    for (let i = 0; i < basket.length; i++) {
        amount += basket[i].amount;
    }
    document.getElementById("mobile-basket-counter").innerHTML = amount;
}

function openMobileBasket() {
    document.getElementById("basket-aside").classList.toggle("basket-mobil-open");
}

function closeMobileBasket() {
    document.getElementById("basket-aside").classList.remove("basket-mobil-open");
}