function mostrarAlerta(message, type) {
    const alertBox = document.createElement('div');
    alertBox.textContent = message;

    // Adiciona classes para estilo
    alertBox.classList.add('custom-alert', type, 'show');

    // Insere a caixa de alerta no início do corpo do documento
    document.body.insertBefore(alertBox, document.body.firstChild);

    // Remove a caixa de alerta após 3 segundos
    setTimeout(() => {
        alertBox.remove();
    }, 3000);
}

document.getElementById('questionnaire-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const terms = document.getElementById('terms');
    if (!terms.checked) {
        mostrarAlerta('Você deve aceitar os termos e condições.', 'error');
        return;
    }

    // Validação simples dos campos
    const fields = ['name', 'age', 'gender', 'hypertension', 'diabetes', 'memory_issues', 'high_cholesterol'];
    let valid = true;

    fields.forEach(function(field) {
        const element = document.getElementById(field);
        if (!element.value) {
            mostrarAlerta('Por favor, preencha todos os campos.', 'error');
            valid = false;
            return;
        }
    });

    if (valid) {
        mostrarAlerta('Formulário enviado com sucesso!', 'success');
        // Aqui você pode adicionar código para enviar os dados do formulário para o servidor
         window.location.href = './inicio/inicio.html';
    }
});