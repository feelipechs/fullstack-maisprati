document.addEventListener("DOMContentLoaded", function() {
    const servicoInput = document.getElementById("servico");
    const valorInput = document.getElementById("valor");
    
    servicoInput.addEventListener("change", function() {
        const servicoSelecionado = servicoInput.value;

        let valorCalculado;
        switch (servicoSelecionado) {
            case "pintura":
                valorCalculado = "R$ 150,00";
                break;
            case "manutencao":
                valorCalculado = "R$ 400,00";
                break;
            case "bodykit":
                valorCalculado = "R$ 1000,00";
                break;
            default:
                valorCalculado = "";
                break;
        }
        
        valorInput.value = valorCalculado;
    });
});
