(function () {
    const close = document.getElementById("modal-close");
    const modal = document.getElementById("modal");
    const modalOpen = document.getElementById("modal-open");

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
    });

    close.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "initial";
    });
})();
