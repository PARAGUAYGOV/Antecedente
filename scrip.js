document.addEventListener("DOMContentLoaded", function() {
    var pdfEmbed = document.getElementById("pdf-embed");
    var errorMessage = document.getElementById("error-message");

    // Intenta cargar el PDF y detecta errores
    pdfEmbed.onerror = function() {
        // Oculta el PDF embed
        pdfEmbed.style.display = "none";
        // Muestra el mensaje de error
        errorMessage.style.display = "block";
    };

    // Verifica si el PDF se ha cargado correctamente
    setTimeout(function() {
        if (!pdfEmbed.contentDocument || pdfEmbed.contentDocument.body.childNodes.length === 0) {
            pdfEmbed.onerror();
        }
    }, 1000);
});
