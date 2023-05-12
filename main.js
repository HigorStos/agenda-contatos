const form = document.getElementById('form-contato');

const numerosAgenda = [];
const nomesAgenda = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    addLinha();
    attTabela();
});

function addLinha(){
    const inputNome = document.getElementById('nomeAgenda');
    const inputNumero = document.getElementById('numeroAgenda');

    if (numerosAgenda.includes(inputNumero.value) && nomesAgenda.includes(inputNome.value)){
        alert(`O número ${inputNumero.value} já está cadastrado na agenda!\nO nome ${inputNome.value} já está cadastrado na agenda. Por favor, escolha outro nome para o contato.`);
    }
    else if (numerosAgenda.includes(inputNumero.value)){
        alert(`O número ${inputNumero.value} já está cadastrado na agenda.`);
    }
    else if (nomesAgenda.includes(inputNome.value)){
        alert(`O nome ${inputNome.value} já está cadastrado na agenda. Por favor, escolha outro nome para o contato.`);
    }
    else {
        numerosAgenda.push(inputNumero.value);
        nomesAgenda.push(inputNome.value);

        let linha = `<tr>`;
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNome.value = ''
    inputNumero.value = ''
}

function attTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}