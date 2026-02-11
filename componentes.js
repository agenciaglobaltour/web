/**
 * Global Tour - Componentes Dinámicos Finales
 */

const contacto = {
    direccion: "Orozco 25-54 y Garc&iacute;a Moreno. Riobamba, Ecuador",
    telefono: "59335006824",
    whatsapp1: "593996397672",
    email: "agenciaglobaltour@yahoo.es",
    horarioLV: "09:00 a 19:00",
    horarioS: "09:00 a 13:00",
    redes: {
        facebook: "https://facebook.com/agenciaglobaltour",
        instagram: "https://instagram.com/agenciaglobaltour",
        tiktok: "https://tiktok.com/@agenciaglobaltour"
    }
};

const headerHTML = `
    <header>
        <div class="container navbar">
            <a href="index.html" class="logo">
                <img src="imagenes/logo-global.png" alt="Global Tour">
            </a>
            
            <div class="menu-toggle" id="mobile-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <ul class="nav-menu" id="nav-list">
                <li class="nav-item"><a href="index.html" class="nav-link">Inicio</a></li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Viajes <i class="fas fa-chevron-down"></i></a>
                    <div class="dropdown-content">
                        <a href="boletos.html">Boletos A&eacute;reos</a>
                        <a href="nacional.html">Turismo Nacional</a>
                        <a href="internacional.html">Turismo Internacional</a>
                    </div>
                </li>
                <li class="nav-item"><a href="visas.html" class="nav-link">Visas</a></li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Servicios <i class="fas fa-chevron-down"></i></a>
                    <div class="dropdown-content">
                        <a href="asesoria.html">Asesoramiento</a>
                        <a href="seguros.html">Seguros de Viaje</a>
                        <a href="estudios.html">Seguros de Estudio</a>
                    </div>
                </li>
                <li class="nav-item"><a href="recomendaciones.html" class="nav-link">Tips</a></li>
                <li class="nav-item"><a href="index.html#contacto" class="nav-link">Contacto</a></li>
            </ul>

            <a href="https://wa.me/${contacto.whatsapp1}" class="cta-header"><i class="fab fa-whatsapp"></i> Cotizar</a>
        </div>
    </header>
`;

const footerHTML = `
    <footer>
        <div class="container" id="contacto">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px;">
                <div class="footer-col">
                    <h3 style="color: var(--dorado);">Global Tour</h3>
                    <p style="margin-top: 15px; color: #ccc;">Agencia de Viajes y Turismo.<br>Expertos en Visas y Destinos Mundiales.</p>
                </div>
                <div class="footer-col">
                    <h4 style="color: var(--dorado); margin-bottom: 15px;">Atenci&oacute;n</h4>
                    <ul style="color: #ddd; font-size: 0.9rem;">
                        <li><i class="fas fa-map-marker-alt"></i> ${contacto.direccion}</li>
                        <li><i class="fas fa-phone"></i> ${contacto.telefono}</li>
                        <li><i class="fab fa-whatsapp"></i> ${contacto.whatsapp1}</li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 style="color: var(--dorado); margin-bottom: 15px;">S&iacute;guenos</h4>
                    <div class="social-icons">
                        <a href="${contacto.redes.facebook}" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a href="${contacto.redes.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="${contacto.redes.tiktok}" target="_blank"><i class="fab fa-tiktok"></i></a>
                    </div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.8rem; color: #aaa;">
                <p>&copy; 2026 Global Tour Agencia de Viajes. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
`;

document.addEventListener("DOMContentLoaded", function() {
    const headerElement = document.getElementById("main-header");
    const footerElement = document.getElementById("main-footer");

    if (headerElement) headerElement.innerHTML = headerHTML;
    if (footerElement) footerElement.innerHTML = footerHTML;

    // LÓGICA MENÚ MÓVIL
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }

    // BOTÓN WHATSAPP FLOTANTE
    const btnWhatsApp = document.createElement('a');
    btnWhatsApp.href = `https://wa.me/${contacto.whatsapp1}`;
    btnWhatsApp.className = 'whatsapp-float';
    btnWhatsApp.target = '_blank';
    btnWhatsApp.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(btnWhatsApp);
});
