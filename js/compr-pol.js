function converterComprimento() {
            const polegadasInput = document.getElementById('polegadasInput');
            const polegadas = parseFloat(polegadasInput.value);
            const resultadoDiv = document.getElementById('resultadoDiv');
            if (isNaN(polegadas)) {
                resultadoDiv.innerHTML = '<span class="text-red-400">Por favor, digite um número válido!</span>';
                return;
            }

            const fatorConversao = 25.4;
            const milimetros = polegadas * fatorConversao;
            resultadoDiv.innerHTML = `${polegadas} polegadas equivalem a ${milimetros.toFixed(2)} milímetros.`;
        }

        document.addEventListener('DOMContentLoaded', (event) => {
            const polegadasInput = document.getElementById('polegadasInput');
            if (polegadasInput) {
                polegadasInput.addEventListener('keydown', function(event) {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        converterComprimento();
                    }
                });
            }
        });