
import { WildPokemonController } from "./Controllers/WildPokemonController.js";

class App {
  wildPokemonController = new WildPokemonController()
}

window["app"] = new App();
