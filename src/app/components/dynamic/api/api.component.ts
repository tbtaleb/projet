import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent implements OnInit {
  ngOnInit(): void {
    this.getStatsPokemon();
  }
  name = 'Angular ' + VERSION.major;
  pokemons: string[] = [];
  pokeStats: any[] = [];
  originalPokeStats: any[] = [];
  searchTerm: string = '';
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchTerm: [''],
    });

     this.searchForm
       .get('searchTerm')
       ?.valueChanges.pipe(
         debounceTime(300), // Délai de latence de 300 millisecondes
         distinctUntilChanged() // Évite les appels si la valeur n'a pas changé
       )
       .subscribe((value) => {
        console.log(value);
        
         this.searchPokemon(value);
       });
  }
  async getPokemons() {
    try {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151'
      );
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
   
  }
  searchPokemon(searchTerm: string) {
    // Vous pouvez appeler l'API de recherche ici avec le terme de recherche (searchTerm)
    // Mettez à jour la liste des pokémons en fonction des résultats de la recherche

    // Par exemple, si vous avez déjà la liste complète des pokémons dans pokeStats,
    // vous pouvez filtrer cette liste en fonction du terme de recherche
    if (searchTerm) {
      this.pokeStats = this.pokeStats.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        
      );
      console.log(this.pokeStats);
      
    } else {
      // Si le champ de recherche est vide, réinitialisez la liste des pokémons avec la liste complète
      this.getStatsPokemon(); // Assurez-vous que cette fonction est correctement implémentée dans votre code
    }
  }

}