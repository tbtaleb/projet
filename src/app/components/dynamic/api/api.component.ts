import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  name = 'Angular ' + VERSION.major;
  pokemons: string[] = [];
  pokeStats: any[] = [];

  async getPokemons() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      data.results.forEach((pokemon: { url: string }) => {
        this.pokemons.push(pokemon.url);
      });
    } catch (error) {
      console.error('the error: ' + error);
    }
  }

  async getStatsPokemon() {
    await this.getPokemons();

    for (let i = 0; i < this.pokemons.length; i++) {
      try {
        const response = await fetch(this.pokemons[i]);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.pokeStats.push(data);
      } catch (error) {
        console.log('Ethe error: ' + error);
      }
    }
    console.log(this.pokeStats);
  }
}
