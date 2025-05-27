
document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.querySelector(".text-container");
    const text = textContainer.innerHTML;
    textContainer.innerHTML = "";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            textContainer.innerHTML += text[index];
            index++;
            setTimeout(typeText, 100); // Ajuste a velocidade da digitação aqui
        }
    }

    typeText();
});

