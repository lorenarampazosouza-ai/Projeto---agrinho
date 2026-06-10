document.addEventListener('DOMContentLoaded', () => {

    // --- Sistema de Abas Interativas (Tecnologias) ---
    const techButtons = document.querySelectorAll('.tech-btn');
    const techPanes = document.querySelectorAll('.tech-pane');

    techButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove classe ativa de todos os botões e painéis
            techButtons.forEach(btn => btn.classList.remove('active'));
            techPanes.forEach(pane => pane.classList.remove('active'));

            // Adiciona classe ativa ao botão clicado
            button.classList.add('active');
            
            // Ativa o painel correspondente pelo ID
            const targetId = button.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // --- Simulador / Calculadora de Economia de Água ---
    const btnCalcular = document.getElementById('btn-calcular');
    const inputHectares = document.getElementById('hectares');
    const resultBox = document.getElementById('resultado');
    const txtLitros = document.getElementById('litros-economizados');

    btnCalcular.addEventListener('click', () => {
        const hectares = parseFloat(inputHectares.value);

        if (isNaN(hectares) || hectares <= 0) {
            alert('Por favor, insira um número válido de hectares.');
            return;
        }

        // Base de cálculo hipotética e realista: 
        // A economia média anual do gotejamento vs aspersão comum pode chegar a ~1.500.000 litros por hectare ao ano dependendo da cultura.
        const economiaPorHectare = 1500000; 
        const totalEconomizado = hectares * economiaPorHectare;

        // Formatação do número para o padrão brasileiro (Ex: 15.000.000)
        txtLitros.textContent = totalEconomizado.toLocaleString('pt-BR');

        // Mostra o quadro de resultados removendo a classe 'hidden'
        resultBox.classList.remove('hidden');
        
        // Rola suavemente até o resultado
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});
