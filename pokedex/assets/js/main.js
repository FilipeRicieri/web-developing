
/*
fetch(url)
        
        .then((response) => {//quando isso der certo, chame essa função pra manipular o resultado da reuquisição //fetch retorna uma promisse
        return response.json() 
        })
        .then(function (jsonBody) {
                console.log(jsonBody) //retorna o body ja ocnvertido em json
        }) //processamento assíncrono
        
        .catch(function (error) { //para manipular o fracasso
                console.log(error)
        })
        .finally(function () {
                console.log('Requisição concluída') //para executar qualquer operação caso seja bem ou mal sucedido
        }) 

        // "=>"  arrow functions (é um método de fazer funções de maneira genérica e simplicada quando não há contextos isolados ou para fazer callbacks) 
        /*
        a seguir toda essa mesma ógica com sintaxe simplificada com arrow function:
        */

const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
        return `
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
        
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
        
                        <img src="${pokemon.photo}"
                            alt="${pokemon.name}">
                    </div>
                </li>
            `
}

function loadPokemonItens(offset, limit) {
        pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
                const newHtml = pokemons.map(convertPokemonToLi).join('')
                pokemonList.innerHTML += newHtml
        })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
        offset += limit
        const qtdRecordsWithNexPage = offset + limit

        if (qtdRecordsWithNexPage >= maxRecords) {
                const newLimit = maxRecords - offset
                loadPokemonItens(offset, newLimit)

                loadMoreButton.parentElement.removeChild(loadMoreButton)
        } else {
                loadPokemonItens(offset, limit)
        }
}) 

