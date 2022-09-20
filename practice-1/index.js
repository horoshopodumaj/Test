(function () {
    const close = document.getElementById("modal-close");
    const modal = document.getElementById("modal");
    const modalOpen = document.getElementById("modal-open");
    const body = document.querySelector("body");

    if (!close || !modalOpen || !modal) {
        return;
    }

    modalOpen.addEventListener("click", () => {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
        document.body.addEventListener("keydown", (event) => {
            if (event.code === "Escape") {
                modal.style.display = "none";
                document.body.style.overflow = "initial";
            }
        });
        modal.addEventListener("click", (event) => {
            if (event.target.className === "modal") {
                modal.style.display = "none";
                document.body.style.overflow = "initial";
            }
        });
    });

    close.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "initial";
    });
})();

(function () {
    const inputFile = document.getElementById("file");
    const buttonSubmit = document.querySelector(".button__submit");
    const modalFile = document.querySelector(".modal__file");

    buttonSubmit.addEventListener("click", () => {
        if (inputFile.validity.valid) {
            return;
        } else {
            if (document.querySelector(".modal__error")) {
                return;
            } else {
                modalFile.insertAdjacentHTML(
                    "beforeend",
                    "<p class='modal__error'>Файл не выбран</p>"
                );
            }
        }
        const modalError = document.querySelector(".modal__error");

        if (inputFile.validity.valid) {
            modalError.innerHTML = "";
        }
    });
})();
