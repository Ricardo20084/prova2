// script.js
function avaliarValor() {
    // 1. Captura o texto do input
    const textoDigitado = document.getElementById('valorInput').value;
    
    // 2. Converte para número
    const valor = Number(textoDigitado);
    
    // 3. Seleciona a div onde a mensagem vai aparecer
    const divResultado = document.getElementById('resultado');

    // Validação de segurança: checa se está vazio ou não é um número
    if (textoDigitado === "" || isNaN(valor) || valor < 0) {
        divResultado.innerText = "Erro: Digite um número válido (0 ou maior).";
        divResultado.style.color = "#ff4c4c"; // Vermelho para erro
        return; 
    }

    // Volta para a cor azul padrão caso tenha dado erro antes
    divResultado.style.color = "#0d6efd";

    // 4. Lógica de Decisão (if / else if / else)
    if (valor >= 0 && valor < 10) {
        divResultado.innerText = "Insuficiente";
    } 
    else if (valor >= 10 && valor <= 15) {
        divResultado.innerText = "Bom";
    } 
    else if (valor > 15) {
        divResultado.innerText = "Muito Bom";
    }
}