function verificarSoma() {
           
    const numero1Input = document.getElementById('numero1');
    const numero2Input = document.getElementById('numero2');
    const numero3Input = document.getElementById('numero3');
          
    const resultadoDiv = document.getElementById('resultadoSoma');

            
    const num1 = parseFloat(numero1Input.value);
    const num2 = parseFloat(numero2Input.value);
    const num3 = parseFloat(numero3Input.value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        resultadoDiv.innerHTML = '<span class="text-red-500 font-semibold">Por favor, digite números válidos em todos os campos!</span>';
        return;
    }

    const soma = num1 + num2 + num3;


    if (soma > 50) {
        resultadoDiv.innerHTML = `<span class="text-green-700 font-bold">A soma (${soma.toFixed(2)}) é maior que 50!</span>`;
    } else {
        resultadoDiv.innerHTML = `<span class="text-blue-800">A soma (${soma.toFixed(2)}) não é maior que 50.</span>`;
    }
}

/**
* @event DOMContentLoaded
* @description
* 
*/
document.addEventListener('DOMContentLoaded', (event) => {
    const numberInputs = document.querySelectorAll('input[type="number"]');

    numberInputs.forEach(input => {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Previne o comportamento padrão do 'Enter'
                verificarSoma(); // Chama a função de verificação
            }
        });
    });
});