document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('sbarForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Captura os dados do formulário
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Verifica se jsPDF está disponível
        if (window.jspdf && window.jspdf.jsPDF) {
            const { jsPDF } = window.jspdf;
            // Cria um novo documento PDF
            const doc = new jsPDF();

            // Configurações para o PDF
            let yPos = 10;
            const lineHeight = 10;
            const margin = 10;

            // Adiciona o título ao PDF
            doc.setFontSize(16);
            doc.text('SBAR - UTI ADULTO', margin, yPos);
            yPos += lineHeight;

            // Adiciona cada campo do formulário ao PDF
            Object.keys(data).forEach(key => {
                doc.setFontSize(12);
                doc.text(`${key}: ${data[key]}`, margin, yPos);
                yPos += lineHeight;
                // Adiciona nova página se o texto ultrapassar o limite
                if (yPos > 280) {
                    doc.addPage();
                    yPos = margin;
                }
            });

            // Salva o documento PDF
            doc.save('formulario.pdf');
        } else {
            console.error('jsPDF não está disponível');
        }
    });
});
