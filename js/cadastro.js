function cadastrar() {

    let id = document.getElementById('id').value;

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


    insere_na_tabela(id, nome, fone, sexo, cidade);

    limpar_formulario();

}

function limpar_formulario() {
    document.getElementById('id').value = '0';
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

function insere_na_tabela(id, nome, fone, sexo, cidade) {
    let tabela = document
    .getElementById('lista-contatos')
    .getElementsByTagName('tbody')[0];

    let ultima_linha = tabela.rows.length;    
    
    if (id == 0){

        let linha = tabela.insertRow(ultima_linha);
    
        let campo_id = linha.insertCell(0);
        let campo_nome = linha.insertCell(1);
        let campo_fone = linha.insertCell(2);
        let campo_sexo = linha.insertCell(3);
        let campo_cidade = linha.insertCell(4);
        let acoes = linha.insertCell(5);
        
        campo_id.innerHTML = ultima_linha + 1 ;
        campo_nome.innerHTML = nome;
        campo_fone.innerHTML = fone;
        campo_sexo.innerHTML = sexo;
        campo_cidade.innerHTML = cidade;
        acoes.innerHTML = insere_botoes_acoes(ultima_linha+1);

    } else {        

    let linha = id - 1;
    tabela.rows[linha].cells[1].innerHTML = nome;
    tabela.rows[linha].cells[2].innerHTML = fone;
    tabela.rows[linha].cells[3].innerHTML = sexo;
    tabela.rows[linha].cells[4].innerHTML = cidade;

    }

    
}

function insere_botoes_acoes(id){

    let botao_editar = '<button type="button" onClick = "editar_linha_tabela(' + id + ')" class="btn btn-outline-primary btn-sm">';
    botao_editar += '<i class="fas fa-pencil-alt"></i>';
    botao_editar += '</button>'

    let botao_excluir = '<button type="button" onClick = "excluir_linha(' + id + ')" class="btn btn-outline-danger btn-sm">';
    botao_excluir += '<i class="fas fa-trash-alt"></i>';
    botao_excluir += '</button>';
    
    return botao_editar + botao_excluir;

}



function editar_linha_tabela(id){

    let corpo_tabela = document
    .getElementById('lista-contatos')
    .getElementsByTagName('tbody')[0];

    let qtd_linhas = corpo_tabela.rows.length;

    for (let i = 0; i < qtd_linhas; i++){

        if  (corpo_tabela.rows[i].cells[0].innerHTML == id){

            let id_editado = document.getElementById('id');
            id_editado.value = corpo_tabela.rows[i].cells[0].innerHTML;

            let input_nome = document.getElementById('nome');
            input_nome.value = corpo_tabela.rows[i].cells[1].innerHTML;

            let input_fone = document.getElementById('fone');
            input_fone.value = corpo_tabela.rows[i].cells[2].innerHTML;

            let input_sexo = corpo_tabela.rows[i].cells[3].innerHTML;
            if (input_sexo == 'Masculino') {                
                document.getElementById('masc').checked = true;
            } else if (input_sexo == 'Feminino') {                
                document.getElementById('fem').checked = true;
            } else {
                document.getElementById('indef').checked = true;
            }
            
            let input_cidade = document.getElementById('cidade');
            input_cidade.value = corpo_tabela.rows[i].cells[4].innerHTML;
            return;
        }
    }

}

function excluir_linha (id) {

    let tabela = document
    .getElementById('lista-contatos')
    .getElementsByTagName('tbody')[0];

    let linha = tabela.deleteRow(id-1);


}