// Loader script for Vianmax
window.addEventListener('DOMContentLoaded', function () {
    // Create loader element if not present
    var loader = document.getElementById('vmax-loader');
    if (!loader) {
        loader = document.createElement('div');
        loader.id = 'vmax-loader';
        loader.innerHTML = '<div class="vmax-spinner"></div>';
        document.body.appendChild(loader);
    }

    // Hide loader after page load
    window.addEventListener('load', function () {
        setTimeout(function () {
            loader.classList.add('vmax-loader-hide');
        }, 1200); // Increased from 200ms to 1200ms
    });

    // Show loader only for real page navigations (not anchors, mailto, tel, or same-page)
    var links = document.querySelectorAll('a[href]');
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            var href = link.getAttribute('href');
            // Ignore anchors, mailto, tel, target, or same-page links
            if (
                !href ||
                href.startsWith('#') ||
                href.startsWith('mailto:') ||
                href.startsWith('tel:') ||
                link.target ||
                href === window.location.pathname.replace(/^\//, '') ||
                href === window.location.pathname ||
                href === ''
            ) {
                return;
            }
            // Show loader for external page navigation only
            loader.classList.remove('vmax-loader-hide');
            // Only append if not already in DOM
            if (!document.body.contains(loader)) {
                document.body.appendChild(loader);
            }
        });
    });
});
