document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("a:not(.footnote-back):not(.footnote-ref)").forEach(link => {
        link.setAttribute("target", "_blank"); // Apre in una nuova scheda
        link.setAttribute("rel", "noopener noreferrer");
    });
});
