const but = document.querySelector('button')
const input = document.querySelector('input')
const caixa = document.querySelector('.conteiner')
const tarefas = document.querySelector('ul')


input.addEventListener("keypress", (e)=>{ //Key press é um evento de pressionar de tecla, onde podemos descobrrir qual o código dessa tecla, no meu caso, ele só roda se o Enter  for pressionado pq o keycode do ENTER é 13
    if(e.keyCode === 13){ 
        console.log("ENTER pressionado")
        criaTarefa(input.value)
    }
})

function criaBotaoApagar(li){
    li.innerText += ' '
    const botaoapagar = document.createElement('button')
    botaoapagar.innerText  = 'Apagar'
    li.appendChild(botaoapagar)
    li.classList.add('item')
    botaoapagar.setAttribute('class', 'apagar')
    botaoapagar.setAttribute('title', 'apagar essa tarefa')
}

function criaTarefa(texto){
    const tarefa = texto
    const li = document.createElement('li')
    li.innerHTML += tarefa;
    tarefas.appendChild(li)
    criaBotaoApagar(li)
    input.value = " "
    input.focus() 
    salvarTarefas()
}

but.addEventListener('click', () => {
    if (!input.value) return;
    criaTarefa(input.value)
})

document.addEventListener('click', function(e){
    const el = e.target //Indica onde está acontecendo o click
    if (el.classList.contains('apagar')){
        el.parentElement.remove() //O pai do meu elemento será removido
        salvarTarefas()
    }
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li') //O querySelectorAll serve para me dizer quantos elementos dos quais indiquei estão no documeto, ou nesse caso, na minha lista
    const listaDeTarefas = []
    for(let tarefa of liTarefas){
        let Tarefatexto = tarefa.innerText
        Tarefatexto = Tarefatexto.replace('Apagar', '').trim()
        listaDeTarefas.push(Tarefatexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas) //Eu transformo minha array num String salva no local storage, que funciona como uma mini base de dadso dentro do meu próprio navegador. Assim, tenho ela imutável lá
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas(){
   const tarefas = localStorage.getItem('tarefas')
   const listaDeTarefas = JSON.parse(tarefas)

   for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
   }
}

adicionaTarefasSalvas()