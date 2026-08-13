function generateColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    document.getElementById("colorPreview").style.background = color;
    document.getElementById("colorCode").textContent = color;
}

function copyColor() {
    const color = document.getElementById("colorCode").textContent;

    navigator.clipboard.writeText(color);
}

function randomNumber() {
    const number = Math.floor(Math.random() * 1000) + 1;

    document.getElementById("randomNumber").textContent = number;
}