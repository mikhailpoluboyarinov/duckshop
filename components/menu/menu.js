document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const navItems = document.querySelectorAll(".nav__item");
    const burger = document.querySelector(".header__burger");
    const popupMenu = document.querySelector(".popup__menu");
    const closeButton = document.querySelector(".popup__menu__close");
    const callbackButton = document.querySelector(".popup__menu__callback");
    const popup = document.querySelector(".popup");
    const popupCloseButton = document.querySelector(".popup__close-button");

    const resetActiveClass = () => {
        navItems.forEach(item => item.classList.remove("nav__item--active"));
    };

    if (navItems.length > 0) {
        navItems[0].classList.add("nav__item--active");

        navItems.forEach(item => {
            item.addEventListener("click", () => {
                resetActiveClass();
                item.classList.add("nav__item--active");
            });
        });
    }

    const openPopupMenu =() => {
        popupMenu.classList.add("active");
        body.classList.add("body_no-scroll");
    }

    const closePopupMenu = () => {
        popupMenu.classList.remove("active");
        body.classList.remove("body_no-scroll");
    }

    const openPopupForm =() => {
        popupMenu.classList.remove("active");
        popup.classList.add("popup--open");
        body.classList.add("body_no-scroll");

        const firstInput = popup.querySelector(".form__input");
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    }

    const closePopupForm =() => {
        popup.classList.remove("popup--open");
        body.classList.remove("body_no-scroll");
    }

    burger.addEventListener("click", openPopupMenu);
    closeButton.addEventListener("click", closePopupMenu);
    callbackButton.addEventListener("click", openPopupForm);
    popupCloseButton.addEventListener("click", closePopupForm);

    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            closePopupForm();
        }
    });

    popupMenu.addEventListener("click", (event) => {
        if (event.target === popupMenu) {
            closePopupMenu();
        }
    });
});
