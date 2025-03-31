document.addEventListener("DOMContentLoaded", () => {
    const popup = document.querySelector(".popup");
    const openPopupButton = document.querySelector(".header__callback");
    const closePopupButton = document.querySelector(".popup__close-button");
    const form = document.querySelector(".form");
    const nameInput = document.getElementById("name-input");
    const telephoneInput = document.getElementById("telephone-input");

    openPopupButton.addEventListener("click", () => {
        document.body.classList.add("body_no-scroll");
        popup.classList.add("popup--open");

        if (nameInput) {
            setTimeout(() => nameInput.focus(), 100);
        }
    });
    const closePopup = () => {
        document.body.classList.remove("body_no-scroll");
        popup.classList.remove("popup--open");
    };

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

    telephoneInput.addEventListener("keydown", (event) => {
        if (!/^\d$/.test(event.key) && event.key !== "Backspace") {
            event.preventDefault();
        }
    });

    const validateName = () => {
        const value = nameInput.value.trim();
        const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]+$/;

        if (value.length < 2) {
            nameInput.setCustomValidity("Имя должно содержать минимум 2 буквы.");
        } else if (!nameRegex.test(value)) {
            nameInput.setCustomValidity("Имя должно содержать только буквы.");
        } else {
            nameInput.setCustomValidity("");
        }
    };

    const validateTelephone = () => {
        const value = telephoneInput.value.trim();
        const onlyNumbers = value.replace(/\D/g, "");

        if (onlyNumbers.length < 7) {
            telephoneInput.setCustomValidity("Телефон должен содержать минимум 7 цифр.");
        } else if (!/^\d+$/.test(onlyNumbers)) {
            telephoneInput.setCustomValidity("Телефон должен содержать только цифры.");
        } else {
            telephoneInput.setCustomValidity("");
        }
    };

    nameInput.addEventListener("input", validateName);
    telephoneInput.addEventListener("input", validateTelephone);

    form.addEventListener("submit", (event) => {
        validateName();
        validateTelephone();

        if (!form.checkValidity()) {
            event.preventDefault();
            alert("Пожалуйста, заполните все поля правильно!");
        }
    });
});