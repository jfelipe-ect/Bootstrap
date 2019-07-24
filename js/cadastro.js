function cadastrar() {

    let nome = valida_nome(document.getElementById('nome').value);
    if(nome == false) {
        alert('Insira um nome válido!')
        document.getElementById('nome').focus();
        return;
    }

    let fone = document.getElementById('fone').value;
  
    let cidade = document.getElementById('cidade').value;   

    let sexo = '';

    if (document.getElementById('masc').checked) {
        sexo = 'Masculino';
    } else if (document.getElementById('fem').checked) {
        sexo = 'Feminino';
    } else {
        sexo = 'Prefiro não comentar';
    }


    insere_na_tabela(nome, fone, sexo, cidade);

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
        return !isNaN(numero);
}

function insere_na_tabela(nome, fone, sexo, cidade) {
    let tabela = document
    .getElementById('lista-contatos')
    .getElementsByTagName('tbody')[0];

    let ultima_linha = tabela.rows.length;

    let linha = tabela.insertRow(ultima_linha);

    let campo_id = linha.insertCell(0);
    let campo_nome = linha.insertCell(1);
    let campo_fone = linha.insertCell(2);
    let campo_sexo = linha.insertCell(3);
    let campo_cidade = linha.insertCell(4);
    let acoes = linha.insertCell(5);

    campo_id.innerHTML = ultima_linha;
    campo_nome.innerHTML = nome;
    campo_fone.innerHTML = fone;
    campo_sexo.innerHTML = sexo;
    campo_cidade.innerHTML = cidade;
    acoes.innerHTML = insere_botoes_acoes();
}

function insere_botoes_acoes(){

    let botao_editar = '<button class="btn btn-outline-primary btn-sm">';
    botao_editar += '<i class="fas fa-pencil-alt"></i>';
    botao_editar += '</button>'

    let botao_excluir = '<button class="btn btn-outline-danger btn-sm">';
    botao_excluir += '<i class="fas fa-trash-alt"></i>';
    botao_excluir += '</button>';
    
    return botao_editar + botao_excluir;

}