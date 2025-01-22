//Simula o armazenamento temporário dos dados do usuário
const usuario = {
    nome: '',
    email: '',
    telefone: '',
    metodoPagamento: '',
    detalhesCartao: '',
};


//Função para salvar dados do formulário de pagamento
function salvarPagamento(event){
    event.preventDefaut(); //Evita o envio do formulário para testar localmente

    //Coletar dados dos campos de pagamento
    usuario.nome = document.getElementById('nome').value;
    usuario.email = document.getElementById('email').value;
    usuario.telefone = document.getElementById('telefone').value;

    const metodo = document.querySelector('input[name="metodo"]:checked');
    if(metodo){
        usuario.metodoPagamento = metodo.value;
    }

    if(usuario.metodoPagamento === 'cartao'){
        usuario.detalhesCartao.numero = document.getElementById('numero-cartao').value;
        usuario.detalhesCartao.validade = document.getElementById('validade').value;
        usuario.detalhesCartao.cvv = document.getElementById('cvv').value;
    }

    //Exibe dados coletados no console para simulação
    console.log('Dados do usuario:', usuario);

    //Redeirecionar para a página de confirmação
    window.location.href = 'confirmação.html';

}

//Função para exibir mensagem de confirmação
function carregarConfirmação(){
    const mensagem = document.getElementById('mensagem-confirmação');
    if (mensagem && usuario.none) {
        mensagem.textContent = 'Obrigado pelo pagamento, ${usuario.none}!'
    }
}

//Event listener para salvar o pagamento ao enviar o formulário
const formPagamento = document.querySelector('.pagamento form');
if (formPagamento) {
    formPagamento.addEventListener('submit', salvarPagamento)
}

//Carregar dado sna página de confirmação
window.addEventListener('DOMContentLoaded', carregarConfirmacao);