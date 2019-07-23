function cadastrar() {

    let formulario = [];

    let nome = valida_nome(document.getElementById('nome').value);
    formulario.push(nome);

    let fone = valida_fone(document.getElementById('fone').value);
    formulario.push(fone);

    let cidade = document.getElementById('cidade').value;
    formulario.push(cidade);

    let sexo = '';

    if (document.getElementById('masc').checked) {
        sexo = 'Masculino';
    } else if (document.getElementById('fem').checked) {
        sexo = 'Feminino';
    } else {
        sexo = 'Prefiro não comentar';
    }

    formulario.push(sexo);

    console.log(formulario);

    limpar_formulario();

}

function limpar_formulario() {
    document.getElementById('nome').value = '';
    document.getElementById('fone').value = '';
    document.getElementById('cidade').value = 'Natal';
    document.getElementById('masc').checked = true;
    document.getElementById('nome').focus;

}

function valida_nome(nome){
    let texto = nome.trim().toUpperCase();

    for (let i = 0; i < texto.length; i++) {
        if (eh_numero(texto[i])){
            return false;
        }
    }
    return texto;
}

function eh_numero(numero){   
        if (numero){
            return false;
        }
    
}