const Logo = () => {
    return `
    <div class="header__top-bar">
        <div class="logo-box">
            <img src="./images/logo.png" alt="" class="logo" />
            <h3>Task Book</h3>
        </div>
        <button class="settings__button">
            <svg class="search__icon">
                <use xlink:href="./images/sprite.svg#icon-filter"></use>
            </svg>
        </button>
    </div>
    `
}

module.exports = Logo;