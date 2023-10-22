        const nombreInput = document.getElementById("nombreInput");
        const mensaje = document.getElementById("mensaje");
        
        nombreInput.addEventListener("input", function() {
            if (nombreInput.value === "last night in soho") {
                nombreInput.style.borderColor = "green";
                mensaje.textContent = "¡Felicidades! Adivinaste el nombre.";
                mensaje.style.color = "green";
            } else {
                nombreInput.style.borderColor = "red";
                mensaje.textContent = "Nombre incorrecto";
                mensaje.style.color = "red";
            }
        });