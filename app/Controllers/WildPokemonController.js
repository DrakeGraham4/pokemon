import { ProxyState } from "../AppState.js";
import { wildPokemonService } from "../Services/WildPokemonService.js";
import { Pop } from "../Utils/Pop.js";




function _drawWildPoke() {
    let template = ''
    ProxyState.wildPoke.forEach(p => template += `<li class="selectable" onclick="app.wildPokemonController.getActivePokemon('${p.name}')">${p.name}</li>`)
    document.getElementById('api-poke-list').innerHTML = template
}

function _drawActivePokemon() {
    let pokemon = ProxyState.activePokemon
    if (pokemon.name) {
        document.getElementById('active-pokemon').innerHTML = ProxyState.activePokemon.Template
    } else {
        document.getElementById('active-pokemon').innerText = 'Catch em All'
    }
}


async function _getPokemon() {
    try {
        await wildPokemonService.getPokemon()
    } catch (error) {
        Pop.toast(error.message, 'error')
        console.error(error);
    }
}


export class WildPokemonController{
    constructor() {
        console.log('[wild pokemon controller]');
        ProxyState.on('wildPoke', _drawWildPoke);
        ProxyState.on('activePokemon', _drawActivePokemon)
        
        _getPokemon()

    }

    async getActivePokemon(name) {
        try {
            console.log('getting active Pokemon', name);
            await wildPokemonService.getActivePokemon(name)
        } catch (error) {
            Pop.toast(error.message, 'error')
            console.error(error);
        }
    }
}