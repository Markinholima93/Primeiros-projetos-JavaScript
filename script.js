let botaoProximo = document.querySelector(".proximo")
let botaoAnterior = document.querySelector(".anterior")
let listaImagens = document.querySelectorAll("img")
let contador = 0

botaoProximo.onclick = function passarSlide(){
    document.querySelector("img.ativo").classList.remove("ativo")
    
    if(contador <2){
        contador = contador + 1
    }else {
        contador = 0
    }
    
    listaImagens[contador].classList.add("ativo")
}

botaoAnterior.onclick = function voltarSlide(){
    document.querySelector("img.ativo").classList.remove("ativo")

    if(contador > 0){
        contador = contador - 1
    }else{
        contador = 2
    }

    listaImagens[contador].classList.add("ativo")

    
}

