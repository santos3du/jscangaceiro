class NegociacaoController {

    constructor() {
        //a ideia é que $ seja o querySelector
        let $ = document.querySelector.bind(document);

        //buscando os elementos
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        //cancelando a submissao do formulario
        event.preventDefault();
        //verificando o tipo
        //console.log(typeof(this._inputData.value));
        let data = new Date(this._inputData.value.split('-'));

        let negociacao = new Negociacao(data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
            );
        console.log(data);

    }

}