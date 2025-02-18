js
Copiar
Editar
console.log("Matrix.js está funcionando!");
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Ajustar tamaño del canvas
function resizeCanvas() {
    canvas.width = window.innerWidth || 800; // Valor por defecto si window.innerWidth falla
    canvas.height = window.innerHeight || 600;
}

resizeCanvas(); // Llamar antes de calcular columnas

const greekLetters = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ".split("");
const fontSize = 20;
const columns = Math.max(1, Math.floor(canvas.width / fontSize)); // Evitar 0 o valores negativos
const drops = Array(columns).fill(1);

function getRandomColor() {
    const colors = ["#00aaff", "#00ff00", "#ffcc00"]; // Azul, Verde, Amarillo
    const probabilities = [0.6, 0.3, 0.1]; // 60% Azul, 30% Verde, 10% Amarillo

    let rand = Math.random();
    let cumulative = 0;
    
    for (let i = 0; i < colors.length; i++) {
        cumulative += probabilities[i];
        if (rand <= cumulative) {
            return colors[i];
        }
    }
    return colors[0]; // Fallback
}

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = greekLetters[Math.floor(Math.random() * greekLetters.length)];
        ctx.fillStyle = getRandomColor(); // Color aleatorio basado en probabilidades
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

// Ajustar tamaño cuando se redimensiona la pantalla
window.addEventListener("resize", () => {
    resizeCanvas();
});
4️⃣ Archivo script.js (Código extra)
📌 Ubicación:

bash
Copiar
Editar
sudo nano /srv/dev-disk-by-uuid-91d711af-e0c1-4de2-9edd-fc745ccf3f9d/vallux-web/script.js
🔹 Contenido:

js
Copiar
Editar
document.addEventListener("DOMContentLoaded", function () {
    console.log("Script.js funcionando correctamente.");
});
5️⃣ Comprobación Final
🚀 Para asegurarte de que todo funciona bien, ejecuta:

bash
Copiar
Editar
sudo systemctl restart nginx
y luego abre la página en tu navegador.
