
const inputNomeInserido = document.getElementById('amigo');
const ulListaAmigos = document.getElementById('listaAmigos');
const ulResultado = document.getElementById('resultado');
let nomes = [];

function adicionarAmigo() {
    ulResultado.innerHTML = ''; 
    
    if (inputNomeInserido.value === '') {
        alert ('Por favor, insira o nome de um amigo.');
        return;
    }

    if (nomes.includes(inputNomeInserido.value)) {
        alert ('Esse amigo já foi adicionado.');
        return;
    }

    nomes.push(inputNomeInserido.value)
    atualizarLista();

    inputNomeInserido.value = '';
}

function atualizarLista() {
    ulListaAmigos.innerHTML = ''; 

nomes.forEach((nome) => {
        const item = document.createElement('li');
        item.textContent = nome;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert ('A lista está vazia. Adicione amigos antes de sortear.');
        return;
    }

const indiceAleatorio = Math.floor(Math.random() * nomes.length);
const nomeSorteado = nomes[indiceAleatorio];

ulResultado.textContent = `Nome Sorteado: ${nomeSorteado}`;
nomes = [];
atualizarLista();
}
