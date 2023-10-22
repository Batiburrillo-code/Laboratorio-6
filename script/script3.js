        const nombreInput = document.getElementById("nombreInput");
        const mensaje = document.getElementById("mensaje");
        
        nombreInput.addEventListener("input", function() {
            if (nombreInput.value === "la la land") {
                nombreInput.style.borderColor = "green";
                mensaje.textContent = "¡Felicidades! Adivinaste el nombre.";
                mensaje.style.color = "green";
            } else {
                nombreInput.style.borderColor = "red";
                mensaje.textContent = "Nombre incorrecto";
                mensaje.style.color = "red";
            }
        });