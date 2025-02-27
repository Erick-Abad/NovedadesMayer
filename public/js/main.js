document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", async function(event) {
            event.preventDefault(); // Evita el recargo de la página

            const formData = {
                name: document.getElementById("name").value.trim(),
                phone: document.getElementById("phone").value.trim(),
                email: document.getElementById("email").value.trim(),
                message: document.getElementById("message").value.trim()
            };

            if (!formData.name || !formData.phone || !formData.email || !formData.message) {
                alert("Por favor, completa todos los campos.");
                return;
            }

            try {
                const response = await fetch("/api/send-email", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();
                if (result.success) {
                    alert("Correo enviado con éxito");
                    contactForm.reset();
                } else {
                    alert("Error al enviar el correo. Intenta de nuevo.");
                }
            } catch (error) {
                console.error("Error en la petición:", error);
                alert("Hubo un error al enviar el formulario.");
            }
        });
    }
});
