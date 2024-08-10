const botoes = document.querySelectorAll('.botao-1'); // Usa querySelectorAll para selecionar múltiplos botões

botoes.forEach(botao => botao.addEventListener('click', () => botaoClicked(botao))); // Adiciona o evento de clique

const botaoClicked = (botao) => {
    const contents = document.querySelectorAll('.content'); // Selecione todos os elementos com a classe 'content'

    contents.forEach(content => content.classList.remove('show')); // Corrige classList

    const contentid = botao.getAttribute('content-id'); // Corrige para usar 'botao'
    const content = document.getElementById(contentid);

    if (content) {
        content.classList.add('show'); // Adiciona a classe 'show' se o conteúdo existir
    }
};
