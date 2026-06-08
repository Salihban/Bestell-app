function init(){

}

function renderMenu() {

}


function renderSection() {
    let contentRef = document.getElementById("menuData");
    contentRef.innerHTML = "";

    for (let i = 0; i < burgerMenu.length; i++) {
        contentRef.innerHTML += getDishesTemplate(menuData[i]);
    }
}