// Manejo del cambio de pestañas (Tabs)
function cambiarTab(tabId) {
    // Ocultar todas las pestañas activas
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('activo'));

    // Desactivar todos los enlaces del menú
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('activo'));

    // Mostrar la pestaña seleccionada
    const selectedTab = document.getElementById('tab-' + tabId);
    if (selectedTab) {
        selectedTab.classList.add('activo');
    }

    // Resaltar el enlace seleccionado
    const selectedLink = document.getElementById('link-' + tabId);
    if (selectedLink) {
        selectedLink.classList.add('activo');
    }

    // Desplazamiento suave al inicio de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Inicializador cuando el DOM se encuentra totalmente cargado
document.addEventListener('DOMContentLoaded', () => {

    // Carrusel dinámico de Testimonios
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonio-slide');

    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 4000); // Cambia cada 4 segundos
    }

});