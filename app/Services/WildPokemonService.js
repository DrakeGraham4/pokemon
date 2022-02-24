import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokeApi } from "./AxiosService.js"





class WildPokemonService{
  async getActivePokemon(name) {
      const res = await pokeApi.get(name)
      console.log('[getActivePokemon]', res.data);
      ProxyState.activePokemon = new Pokemon(res.data)
   }
   async getPokemon() {
       const res = await pokeApi.get()
       console.log('[getPokemon]', res.data);
       ProxyState.wildPoke = res.data.results
    }
   

}

export const wildPokemonService = new WildPokemonService()