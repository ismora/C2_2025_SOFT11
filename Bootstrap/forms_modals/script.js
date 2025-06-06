document.addEventListener("DOMContentLoaded", () => {
    // Modal base
    const botonAceptar = document.getElementById("botonAceptar");
    
    if (botonAceptar) {
      botonAceptar.addEventListener("click", () => {
        alert("Popup nativo al aceptar modal");
      });
    }
  
    // Formulario con validacion y agrupacion
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
  
    // Login en modal
    const loginForm = document.getElementById("loginForm");
    
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const email = document.getElementById("loginEmail");
        const password = document.getElementById("loginPassword");
        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");
        
        // Resetear errores
        email.classList.remove("is-invalid");
        password.classList.remove("is-invalid");
        emailError.textContent = "";
        passwordError.textContent = "";
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
          email.classList.add("is-invalid");
          emailError.textContent = "Ingresa un correo electrónico válido";
          return;
        }
        
        // Validar contraseña (mínimo 6 caracteres)
        if (password.value.length < 6) {
          password.classList.add("is-invalid");
          passwordError.textContent = "La contraseña debe tener al menos 6 caracteres";
          return;
        }
        
        // Simular inicio de sesión exitoso
        alert(`Inicio de sesión exitoso para: ${email.value}`);
        
        // Cerrar el modal después de 1 segundo
        setTimeout(() => {
          const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
          modal.hide();
          loginForm.reset();
        }, 1000);
      });
    }
  });