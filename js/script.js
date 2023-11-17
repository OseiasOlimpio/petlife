var elementosDuvida = document.querySelectorAll('.duvida');

elementosDuvida.forEach/*executa uma funçãopara cada elemento*/(function(duvida){
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa')
    })
})

/*function nome(argumento) {
    conteudo da funçao
}*/