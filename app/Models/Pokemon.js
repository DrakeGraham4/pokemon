export class Pokemon{
    constructor(data) {
        this.name = data.name,
        this.img = data.sprites.other["official-artwork"].front_default 
        this.weight = data.weight
        this.height = data.height
        this.user = data.user

    }

    get Template() {
        return `
        <div class="bg-light shadow p-4">
      <div class="text-center">
        <h2>${this.name}</h2>
        <h4>Height: ${this.height}" | Weight: ${this.weight} | User: ${this.user}</h4>
        <img class="img-fluid" src="${this.img}" alt="">
        <div class="d-flex justify-content-between align-items-baseline">
       </div>
      </div>
    </div>
        `
    }
}

