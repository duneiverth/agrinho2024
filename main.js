const botoes = document.querySelectorAll('.botao-1'); // Usa querySelectorAll para selecionar múltiplos botões

botoes.forEach(botao => botao.addEventListener('click', () => botaoClicked(botao))); // Adiciona o evento de clique

const botaoClicked = (botao) => {
    const contents = document.querySelectorAll('.content'); // Selecione todos os elementos com a classe 'content'

    contents.forEach(content => content.classList.remove('show')); // Corrige classList

    const contentid = tab.getAttribute('content-id');
    const content = document.getElementById(contentid);

    content.classList.add('show');
    }

