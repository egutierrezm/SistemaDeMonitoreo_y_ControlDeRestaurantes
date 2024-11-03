document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[data-target]');
    const contents = document.querySelectorAll('.content');

    // Función para mostrar el contenido seleccionado
    function showContent(targetId) {
        contents.forEach(content => {
            content.classList.remove('active'); // Ocultar todas las secciones
        });
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.add('active'); // Mostrar solo la sección seleccionada
        }
    }

    // Manejar clics en los enlaces del menú
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar que el enlace se comporte como un enlace normal
            const targetId = link.getAttribute('data-target');
            showContent(targetId);
        });
    });

    // Mostrar la primera sección al cargar
    showContent('inicio');
});
