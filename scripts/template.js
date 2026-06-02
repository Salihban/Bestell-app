function getBurgerTemplate(i) {
    return /*html*/`
    <div class="content">
        <div>
            <img src="./assets/img/${burgerMenu[i]}.id" alt="">
        </div>

        <div>
            <h3>${burgerMenu[i].name}</h3>
        </div>
    </div>
    `
}