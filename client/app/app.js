let controller = new NegociacaoController();

//associa o evento de submissão do formulario a chamada do metodo adiciona
document.querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));
