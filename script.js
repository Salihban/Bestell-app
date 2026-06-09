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
    



}

function addToBasket(basketEmpty) {
    let foundItem = basket.find((items) => items.id === dishId);

    if (foundItem) {
        foundItem.count++;
    } else {
        basket.push({
            id: dish.id,
            name: dish.name,
            price: dish.price,
            count: 1
        })
    }
    
    renderBasket();
}