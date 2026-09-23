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
