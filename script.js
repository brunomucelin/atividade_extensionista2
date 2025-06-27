function previewImage(event, activityId) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById(`${activityId}-img`);
        const placeholderText = output.nextElementSibling; // O parágrafo "Clique para adicionar imagem"
        output.src = reader.result;
        output.style.display = 'block'; // Mostra a imagem
        if (placeholderText) {
            placeholderText.style.display = 'none'; // Esconde o texto
        }
    };
    reader.readAsDataURL(event.target.files[0]);
}