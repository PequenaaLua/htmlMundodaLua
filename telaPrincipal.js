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

//Ação ao clicar em "Comprar"
document.querySelectorAll('.botao-comprar').forEach(button =>{
    button.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho!');
    });
});