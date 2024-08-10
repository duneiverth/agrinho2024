const botao = document.querySelector('.botao-1');

botao.forEach(botao => botao.addEventListener('click'), () => botaoClicked(botao));

const botaoClicked = (botao) => {
    const content = document.querySelector('content');

    contents.forEach(content => content.classlist.remove('show'));

    const contentid = tab.getAttribute('content-id');

    console.log(contentId);
}