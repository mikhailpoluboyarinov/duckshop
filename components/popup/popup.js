document.addEventListener("DOMContentLoaded", () => {
    const popup = document.querySelector(".popup");
    const openPopupButton = document.querySelector(".header__callback");
    const closePopupButton = document.querySelector(".popup__close-button");
    const form = document.querySelector(".form"); // Находим форму
    const firstInput = form.querySelector(".form__input"); // Первое поле ввода

    openPopupButton.addEventListener("click", () => {
        popup.classList.add("popup--open");
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    });
    const closePopup = () => {
        popup.classList.remove("popup--open");
    }

    closePopupButton.addEventListener("click", closePopup);
    popup.addEventListener("click", (event) => {
        if (!event.target.closest(".popup__container")) {
            closePopup();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closePopup();
        }
    });

    form.addEventListener("submit", (event) => {
        if (!form.checkValidity()) {
            event.preventDefault();
            alert("Пожалуйста, заполните все поля правильно!");
        }
    });
});