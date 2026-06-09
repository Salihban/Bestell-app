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
    let basketRef = document.getElementById('basket-cart');
    basketRef.innerHTML = "";

    for (let i = 0; i < basket.length; i++) {
        let item = basket[i];
    }

    basketRef.innerHTML += getBasketTemplate();
}

function addDishToBasket(dishId) {
    const dish = getDishById(dishId);
    if (!dish) return;
    const foundItem = basket.find((item) => item.id === dishId);
    if (foundItem) {
        foundItem.amount++;
    } else {
        basket.push({
            id: dish.id,
            name: dish.name,
            price: dish.price,
            amount: 1,
        });
    }
    renderBasket();
}

function plusAmount(index) {
    basket[index].count++;
    renderBasket();
}

function minusAmount (index) {
    if (basket[index].count > 1) {
        basket[index].count--;
    } else {
        basket.splice(index, 1);
    }
    renderBasket();
}

function deleteFromBasket(index) {
    basket.splice(index, 1);
    renderBasket();
}