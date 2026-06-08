function init(){

}

function renderMenu() {
renderSection("dish-section-Burger", 0);
renderSection("dish-section-Pizza", 1);
renderSection("dish-section-Salad", 2);
}


function renderSection() {
    let contentRef = document.getElementById("menuData");
    contentRef.innerHTML = "";

    for (let i = 0; i < burgerMenu.length; i++) {
        contentRef.innerHTML += getDishesTemplate(menuData[i]);
    }
}