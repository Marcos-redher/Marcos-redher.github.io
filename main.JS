
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    btn.textContent = "¡Hola!";
    setTimeout(() => {
        btn.textContent = "Saludar!";
    }, 1000);
});