// Alerta de sucesso no formulário
function enviarFormulario() {
    const alert = document.getElementById('success-alert');
    alert.classList.remove('d-none');
    alert.textContent = 'Sua mensagem foi enviada com sucesso!';
    setTimeout(() => alert.classList.add('d-none'), 3000);
    return false; // Impede o envio real do formulário
}
