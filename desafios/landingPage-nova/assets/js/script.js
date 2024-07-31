document.addEventListener("DOMContentLoaded", function () {
    const servicoInput = document.getElementById("servico");
    const valorInput = document.getElementById("valor");

    if (servicoInput && valorInput) {
        servicoInput.addEventListener("change", function () {
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
    }

    const buttons = document.querySelectorAll('.load-content');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const serviceId = this.getAttribute('data-service-id');
            loadServiceContent(serviceId);
        });
    });

    function loadServiceContent(serviceId) {
        let content = '';

        switch (serviceId) {
            case 'pintura':
                content = `
                  <h2>Pintura</h2>
                  <p>Personalize seu veículo com cores vibrantes e acabamentos profissionais.</p>
                  <form>
                      <div class="mb-3">
                          <label for="nome" class="form-label">Nome</label>
                          <input type="text" class="form-control" id="nome" placeholder="Seu nome">
                      </div>
                      <div class="mb-3">
                          <label for="email" class="form-label">Email</label>
                          <input type="email" class="form-control" id="email" placeholder="seuemail@exemplo.com">
                      </div>
                      <div class="mb-3">
                          <label for="pedido" class="form-label">Pedido</label>
                          <textarea class="form-control" id="pedido" rows="3" placeholder="Detalhe seu pedido"></textarea>
                      </div>
                      <button type="submit" class="btn btn-primary">Enviar</button>
                  </form>
              `;
                break;
            case 'manutencao':
                content = `
                  <h2>Manutenção</h2>
                  <p>Garanta a longevidade do seu veículo com nossa manutenção especializada.</p>
                  <form>
                      <div class="mb-3">
                          <label for="nome" class="form-label">Nome</label>
                          <input type="text" class="form-control" id="nome" placeholder="Seu nome">
                      </div>
                      <div class="mb-3">
                          <label for="email" class="form-label">Email</label>
                          <input type="email" class="form-control" id="email" placeholder="seuemail@exemplo.com">
                      </div>
                      <div class="mb-3">
                          <label for="pedido" class="form-label">Pedido</label>
                          <textarea class="form-control" id="pedido" rows="3" placeholder="Detalhe seu pedido"></textarea>
                      </div>
                      <button type="submit" class="btn btn-primary">Enviar</button>
                  </form>
              `;
                break;
            case 'maldade':
                content = `
                  <h2>Personalização & Tunagem</h2>
                  <p>Transforme seu veículo com nossos bodykits exclusivos, tunagens fora de série e muito mais. </p>
                  <form>
                      <div class="mb-3">
                          <label for="nome" class="form-label">Nome</label>
                          <input type="text" class="form-control" id="nome" placeholder="Seu nome">
                      </div>
                      <div class="mb-3">
                          <label for="email" class="form-label">Email</label>
                          <input type="email" class="form-control" id="email" placeholder="seuemail@exemplo.com">
                      </div>
                      <div class="mb-3">
                          <label for="pedido" class="form-label">Pedido</label>
                          <textarea class="form-control" id="pedido" rows="3" placeholder="Detalhe seu pedido"></textarea>
                      </div>
                      <button type="submit" class="btn btn-primary">Enviar</button>
                  </form>
              `;
                break;
            default:
                content = '<h2>Serviço não encontrado</h2><p>O serviço solicitado não existe.</p>';
        }

        document.getElementById('service-content').innerHTML = content;

        const modal = new bootstrap.Modal(document.getElementById('serviceModal'));
        modal.show();
    }
});