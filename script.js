document.addEventListener("DOMContentLoaded", function() {
    var pdfEmbed = document.getElementById("pdf-embed");

    // Intenta cargar el PDF y detecta errores
    pdfEmbed.addEventListener('error', function() {
        // Redirige a la descarga del PDF
        window.location.href = "documento.pdf";
    });

    // Verifica si el PDF se ha cargado correctamente
    setTimeout(function() {
        var isPdfLoaded = pdfEmbed.contentDocument && pdfEmbed.contentDocument.body.childNodes.length > 0;
        if (!isPdfLoaded) {
            pdfEmbed.dispatchEvent(new Event('error'));
        }
    }, 1000);
});
