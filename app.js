function ocultarImagemTituloResultado() {
    let imagem = document.getElementById('imagem_lupa');
    let titulo = document.getElementById('texto_titulo_resultado');

    imagem.style.display = 'none';
    titulo.style.display = 'none';
}

function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function criptografarTexto(texto) {
    let textoSemAcento = removerAcentos(texto.toLowerCase());
    let chave = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let textoCriptografado = textoSemAcento.replace(/[eiou]/g, letra => chave[letra]);

    return textoCriptografado;
}

function descriptografarTexto(textoCriptografado) {
    let chaveInvertida = {
      'enter': 'e',
      'imes': 'i',
      'ai': 'a',
      'ober': 'o',
      'ufat': 'u'
    };
  
    let textoDescriptografado = textoCriptografado.replace(/(enter|imes|ai|ober|ufat)/g, chave => chaveInvertida[chave]);
  
    return textoDescriptografado;
}

function criptografar() {
    let textarea = document.getElementById('texto');
    let resultado = document.getElementById('texto_resultado');
    let imagem = document.getElementById('imagem_lupa');

    let textoOriginal = textarea.value;
    let textoCriptografado = criptografarTexto(textoOriginal);

    resultado.textContent= textoCriptografado;
    ocultarImagemTituloResultado();
}

function descriptografar() {
    let textarea = document.getElementById('texto');
    let resultado = document.getElementById('texto_resultado');
    let imagem = document.getElementById('imagem_lupa');

    let textoCriptografado = textarea.value;
    let textoDescriptografado = descriptografarTexto(textoCriptografado);

    resultado.textContent = textoDescriptografado;
    ocultarImagemTituloResultado();
}

function copiarTexto() {
    let resultado = document.getElementById('texto_resultado');
    let textoCopiado = resultado.textContent;

    navigator.clipboard.writeText(textoCopiado).then(function() {

    }).catch(function(err) {
        console.error('Erro ao copiar o texto: ', err);
    });
}