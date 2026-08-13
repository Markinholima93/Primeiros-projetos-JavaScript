let inputTarefa = document.getElementById("inputTarefa")

inputTarefa.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    adicionarTarefa()
  }
})

function adicionarTarefa() {
  let tarefa = inputTarefa.value

  if (tarefa === "") {
    document.getElementById("mensagem").textContent = "Por favor, descreva uma tarefa"
  } else {
    document.getElementById("mensagem").textContent = "Tarefa adicionada com sucesso!"

    let listaTarefas = document.getElementById("listaTarefas")
    let novaTarefa = document.createElement("li")
    novaTarefa.textContent = tarefa

    novaTarefa.onclick = function () {
      novaTarefa.remove()
    }

    listaTarefas.appendChild(novaTarefa)
    inputTarefa.value = ""
  }
}