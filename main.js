const botao = document.querySelector('.botao-1');

botao.forEach(botao => botaos.addEventListener('click'), () => botaoClicked(botao));

const botaoClicked = (botao) => {
    const contents = document.querySelector('content');

    contents.forEach(content => content.classlist.remove('show'));

    const contentid = tab.getAttribute('content-id');
    const content = document.getElementById(contentid);

    content.classList.add('show');
} 
