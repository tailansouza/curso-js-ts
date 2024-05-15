const novaTarefaInput = document.querySelector('.input-nova-tarefa');
const btnAddTarefa = document.querySelector('.btn-add-tarefa');
const tarefa = document.querySelector('.lista-tarefas');


function criaLi() {
    //cria um li
    const li = document.createElement('li');
    return li;
}

novaTarefaInput.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!novaTarefaInput.value) return;
        criarTarefa(novaTarefaInput.value);

    }
});

function limpaTarefa() {
    novaTarefaInput.value = '';
    novaTarefaInput.focus();
}

//cria botao apagar
function criaBotao(li) {
    li.innerText += '   ';
    const btnApagar = document.createElement('button');
    btnApagar.setAttribute('class', 'apagar')
    btnApagar.setAttribute('title', 'apagar')
    btnApagar.innerText = 'apagar';
    li.appendChild(btnApagar);

}
document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvaTarefas()
    }
});

//cia tarefa
function criarTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefa.appendChild(li);
    limpaTarefa();
    criaBotao(li)
    salvaTarefas();
}



btnAddTarefa.addEventListener('click', function () {
    //confirma se a caixa ta vasia
    if (!novaTarefaInput.value) return;
    criarTarefa(novaTarefaInput.value);

})

function salvaTarefas() {
    const liTarefas = tarefa.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefas of liTarefas) {
        let tarefaTexto = tarefas.innerText;
        tarefaTexto = tarefaTexto.replace('apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefaJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefa', tarefaJSON);
}

function adicionaTarefasSauvas() {
    const tarefa = localStorage.getItem('tarefa');
    const listaDeTarefas = JSON.parse(tarefa);

    for (let tarefa of listaDeTarefas) {
        criarTarefa(tarefa);
    }
}
adicionaTarefasSauvas()