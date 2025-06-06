// 📌 1. Ejemplo de Modal: Evento al hacer clic en "Aceptar"
document.addEventListener("DOMContentLoaded", () => {
    const botonAceptar = document.getElementById("botonAceptar");
    
    if (botonAceptar) {
      botonAceptar.addEventListener("click", () => {
        alert("¡Has aceptado el modal!");
      });
    }
  
    // 📌 2. Ejemplo de Formulario: Validación con Regex
    const formulario = document.getElementById("miFormulario");
    
    if (formulario) {
      formulario.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensajeExito = document.getElementById("mensajeExito");
        
        // Limpiar errores previos
        const errorAnterior = document.querySelector(".invalid-feedback");
        if (errorAnterior) errorAnterior.remove();
        document.getElementById("email").classList.remove("is-invalid");
  
        // Validación con regex para email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
        // Validar campos
        if (!nombre || !email) {
          alert("Todos los campos son obligatorios.");
          return;
        }
  
        if (!emailRegex.test(email)) {
          const emailError = document.createElement("div");
          emailError.className = "invalid-feedback";
          emailError.textContent = "Por favor, ingresa un correo valido (ej: usuario@dominio.com).";
          document.getElementById("email").classList.add("is-invalid");
          document.getElementById("email").after(emailError);
          return;
        }
  
        // Si pasa la validación
        mensajeExito.textContent = `¡Gracias, ${nombre}! (Email registrado: ${email})`;
        mensajeExito.classList.remove("d-none");
  
        // Limpiar formulario después de 3 segundos
        setTimeout(() => {
          formulario.reset();
          mensajeExito.classList.add("d-none");
        }, 3000);
      });
    }
  });