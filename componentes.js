/**
 * Global Tour - Componentes Dinámicos
 */

// 1. Datos De Contacto Y Canales De Atención
const contacto = {
    direccion: "Orozco 25-54 y García Moreno. Riobamba, Ecuador",
    telefono: "59335006824",
    whatsapp1: "593996397672",
    whatsapp2: "593996817208",
    email: "agenciaglobaltour@yahoo.es",
    horarioLV: "09:00 a 19:00",
    horarioS: "09:00 a 13:00",
    redes: {
        facebook: "https://facebook.com/agenciaglobaltour",
        instagram: "https://instagram.com/agenciaglobaltour",
        tiktok: "https://tiktok.com/@agenciaglobaltour"
    }
};

// 2. Generar el Encabezado (Header) con tu Logo corregido
const headerHTML = `
    <header>
        <div class="container navbar">
            <a href="index.html" class="logo">
                <img src="imagenes/logo-global.png" alt="Global Tour" style="height: 75px; vertical-align: middle;">
            </a>
            
            <ul class="nav-menu">
                <li class="nav-item"><a href="index.html" class="nav-link">Inicio</a></li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Viajes <i class="fas fa-chevron-down" style="font-size:0.7rem;"></i></a>
                    <div class="dropdown-content">
                        <a href="boletos.html">Boletos Aéreos</a>
                        <a href="nacional.html">Turismo Nacional</a>
                        <a href="internacional.html">Turismo Internacional</a>
                    </div>
                </li>
                <li class="nav-item"><a href="visas.html" class="nav-link">Visas</a></li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Servicios <i class="fas fa-chevron-down" style="font-size:0.7rem;"></i></a>
                    <div class="dropdown-content">
                        <a href="asesoria.html">Asesoramiento de Viaje</a>
                        <a href="seguros.html">Seguros de Viajes</a>
                        <a href="estudios.html">Seguros de Estudios</a>
                    </div>
                </li>
                <li class="nav-item"><a href="recomendaciones.html" class="nav-link">Tips</a></li>
                <li class="nav-item"><a href="index.html#nosotros" class="nav-link">Nosotros</a></li>
                <li class="nav-item"><a href="index.html#contacto" class="nav-link">Contacto</a></li>
            </ul>

            <a href="https://wa.me/${contacto.whatsapp1}" class="cta-header"><i class="fab fa-whatsapp"></i> Cotizar</a>
        </div>
    </header>
`;

// 3. Generar el Pie de Página (Footer)
const footerHTML = `
    <footer style="background-color: var(--azul-oscuro); color: var(--blanco); padding: 60px 0;">
        <div class="container" id="contacto">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px;">
                
                <div class="footer-col">
                    <h3 style="font-family: 'Montserrat';">Global Tour</h3>
                    <p style="margin-top: 15px; color: #ccc;">Agencia de Viajes y Turismo.<br>Expertos en Visas y Destinos Mundiales.</p>
                    <div style="margin-top: 20px; font-size: 0.9rem; color: #aaa;">
                        <p><strong>Horarios:</strong></p>
                        <p>Lun - Vie: ${contacto.horarioLV}</p>
                        <p>Sáb: ${contacto.horarioS}</p>
                    </div>
                </div>

                <div class="footer-col">
                    <h4 style="font-family: 'Montserrat'; border-bottom: 2px solid var(--dorado); display: inline-block; margin-bottom: 20px;">Atención al Cliente</h4>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 10px;"><i class="fas fa-map-marker-alt" style="color: var(--dorado); margin-right: 10px;"></i> ${contacto.direccion}</li>
                        <li style="margin-bottom: 10px;"><i class="fas fa-phone" style="color: var(--dorado); margin-right: 10px;"></i> ${contacto.telefono}</li>
                        <li style="margin-bottom: 10px;"><i class="fab fa-whatsapp" style="color: var(--dorado); margin-right: 10px;"></i> ${contacto.whatsapp1} / ${contacto.whatsapp2}</li>
                        <li style="margin-bottom: 10px;"><i class="fas fa-envelope" style="color: var(--dorado); margin-right: 10px;"></i> ${contacto.email}</li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4 style="font-family: 'Montserrat'; border-bottom: 2px solid var(--dorado); display: inline-block; margin-bottom: 20px;">Síguenos</h4>
                    <div class="social-icons" style="display: flex; gap: 15px; margin-top: 10px;">
                        <a href="${contacto.redes.facebook}" target="_blank" style="color: white; font-size: 1.5rem;"><i class="fab fa-facebook-f"></i></a>
                        <a href="${contacto.redes.instagram}" target="_blank" style="color: white; font-size: 1.5rem;"><i class="fab fa-instagram"></i></a>
                        <a href="${contacto.redes.tiktok}" target="_blank" style="color: white; font-size: 1.5rem;"><i class="fab fa-tiktok"></i></a>
                    </div>
                    <p style="margin-top: 20px; font-size: 0.85rem; color: #ccc;">Riobamba, Chimborazo – Ecuador</p>
                </div>

            </div>

            <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
                <p>&copy; 2026 Global Tour Agencia de Viajes. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
`;

// 4. Inyección en el DOM
document.addEventListener("DOMContentLoaded", function() {
    const headerElement = document.getElementById("main-header");
    const footerElement = document.getElementById("main-footer");

    if (headerElement) headerElement.innerHTML = headerHTML;
    if (footerElement) footerElement.innerHTML = footerHTML;
});

document.addEventListener("DOMContentLoaded", function() {
    // ... tu código anterior de header y footer ...

    // NUEVO: Inyectar el botón flotante automáticamente
    const btnWhatsApp = document.createElement('a');
    btnWhatsApp.href = `https://wa.me/${contacto.whatsapp1}`; // Usa el 593996397672 que ya pusimos en 'contacto'
    btnWhatsApp.className = 'whatsapp-float';
    btnWhatsApp.target = '_blank';
    btnWhatsApp.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(btnWhatsApp);
});