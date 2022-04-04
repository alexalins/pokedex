//pega os pokemon 
const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
//pega os card dos pokemon 
const pokemonCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemon.forEach( pokemon => {
    //ouvindo evento click
    pokemon.addEventListener('click', () => {
        //remove as classe que estao em aberto
        const cataoPokemonAberto = document.querySelector('.aberto')
        cataoPokemonAberto.classList.remove('aberto')
        //remove as classe que estao em ativo
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')
        //
        //pegando id do pokemon selecionado
        const idPokemonSelecionado = pokemon.attributes.id.value
        const cartaoPokemonParaAbrir = document.getElementById(`cartao-${idPokemonSelecionado}`)
        //setando a classe de aberto para ele aparecer
        cartaoPokemonParaAbrir.classList.add('aberto')
        //pegando id do pokemon selecionado na listagem
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        //setando a classe de ativo pra mudar a cor na listagem
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})