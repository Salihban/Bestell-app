function init(){
renderMenu();
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
    const basketEmpty = "";

}

function addToBasket(basketEmpty) {
    if (basketEmpty  === "") {
        basketEmpty = `<p>Your baket ist empty!</p>`
    }
}