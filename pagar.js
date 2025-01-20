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
}

const metodo = document.querySelector('input[name="metodo"]:checked');
if(metodo){
    usuario.metodoPagamento = metodo.value;
}

if(usuario.metodoPagamento === 'cartao'){
    usuario.detalhesCartao.numero = document.getElementById('numero-cartao').value;
    usuario.detalhesCartao.validade = document.getElementById('validade').value;
    usuario.detalhesCartao.cvv = document.getElementById('cvv').value;
}