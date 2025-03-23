document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav__item");
    const burger = document.querySelector(".header__burger");
    const popupMenu = document.querySelector(".popup__menu");
    const closeButton = document.querySelector(".popup__menu__close");
    const callbackButton = document.querySelector(".popup__menu__callback");
    const popup = document.querySelector(".popup");

    const resetActiveClass = () => {
        navItems.forEach(item => item.classList.remove("nav__item--active"));
    }

    if (navItems.length > 0) {
        navItems[0].classList.add("nav__item--active");

        navItems.forEach(item => {
            item.addEventListener("click", () => {
                resetActiveClass();
                item.classList.add("nav__item--active");
            });
        });
    }

    burger.addEventListener("click", () => popupMenu.classList.add("active"));
    closeButton.addEventListener("click", () => popupMenu.classList.remove("active"));
    callbackButton.addEventListener("click", () => {
        popupMenu.classList.remove("active");
        popup.classList.add("popup--open");

        const firstInput = popup.querySelector(".form__input");
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    });
});