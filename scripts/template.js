function getBurgerTemplate(burger) {
    return /*html*/`
    <div class="menu-card">
        <img src="./assets/img/${burger.imge}" alt="${burger.name}">
        <h3>${burger.name}</h3>
        <p>${burger.description}</p>
        <span>${burger.price}€</span>
        <button>Add to basket</button>
    </div>
    `;
}