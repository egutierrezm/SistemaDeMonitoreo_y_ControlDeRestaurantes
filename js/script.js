function showTab(tabName) {
    // Ocultar todas las pestañas
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Mostrar la pestaña seleccionada
    const activeTab = document.getElementById(tabName);
    activeTab.classList.add('active');
}

// Mostrar la pestaña de inicio por defecto
document.addEventListener('DOMContentLoaded', () => {
    showTab('inicio');
});