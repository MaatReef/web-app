import {Pokemon} from '../models/pokemon.m';
export async function getPokemons(): Promise<Pokemon[]>{
    // Llamando a la API REST
    // La API Fetch proporciona una interfaz Js para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas.
    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");
    
    const datos = await response.json();
    const pokemons = datos.results.map((pokemon:any ) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        imggif: CorreguirNombre(pokemon.sprites['animated']),
        imgnormal: CorreguirNombre(pokemon.sprites['normal']),
        imglarge: CorreguirNombre(pokemon.sprites['large']),
        total: pokemon.total,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        sp_atk: pokemon.sp_atk,
        sp_def: pokemon.sp_def,
        speed: pokemon.speed,
        type: pokemon.type[0]
    }));

    // Filtramos la información para retornar los únicos, evitando los repetidos
    const unicosPokemons = pokemons.filter(
        (pokemon: any, index: number) => 
        pokemons.findIndex((other:any) => other.id === pokemon.id) === index
    );

    return unicosPokemons;
}

// Correguir texto con su nombre correcto
export function CorreguirNombre(name:string): string{
    if(name.includes("farfetch'd")){
        return name.replace("farfetch'd", "farfetchd");
    }else if (name.includes("mr.-mine")){ 
        return name.replace("mr.-mine", "mr-mine");
    }else if (name.includes("♀")){ 
        return name.replace("♀", "-f");
    }else if (name.includes("♂")){ 
        return name.replace("♂", "-m");
    }else{ 
        return name;
    }
}