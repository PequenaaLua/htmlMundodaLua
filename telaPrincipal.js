documento.addEventListener('DOMContentLoaded', () => {
    console.log('Página inicial carregada com sucesso!');

//Navegação entre páginas
document.querySelectorAll('.cabecalho a').forEach (link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if(href){
            window.location.href = href;
        }

    });
});

//Função para o menu suspenso 
const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener('mouseover', () => {
            dropdown.querySelector('.submenu').style.display = 'block';
        });
        dropdown.addEventListener('mouseout', () => {
            dropdown.querySelector('.submenu').style.display = 'none';
        });
    });
});



//Ação ao clicar em "Comprar"
document.querySelectorAll('.botao-comprar').forEach(button =>{
    button.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho!');
    });
});