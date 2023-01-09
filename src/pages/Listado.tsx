import {useEffect, useState} from "react";
// Importando librerías de Bootstrap
import Card from 'react-bootstrap/card';
import ListGroup from 'react-bootstrap/ListGroup';
// Llamando a Listado de Pokemon
import Figure from 'react-bootstrap/Figure';
// Llamando al Modelo 
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

import { getPokemons } from "../controller/getPokemon";
import { Pokemon } from "../models/pokemon.m"; 


// El metodo slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará. 

const Listado = () => {
    // Obtenemos la data de acuerdo al formato del modelo
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [query, setQuery] = useState("");

    // Llamamos al controller y los obtenemos a todos
    useEffect(() => {
        const ObtenerTodos = async() => {
            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
        };
        ObtenerTodos();
    });

    const filtrarpokemon = pokemons?.slice(0,151).filter((pokemon) => {
        return pokemon.name.toLowerCase().match(query.toLowerCase());
    });

    return(
        <>
            <h1 className="text-center mt-4 mb-4">PokemonDex</h1>
            <header className="text-center mt-4 mb-4" >
                <input 
                    className="search-type"
                    value={query}
                    placeholder="Buscar Pokemon" 
                    onChange={(event) => setQuery(event.target.value.trim())}
                    type="text"
                />
            </header>
            <div className="content-wrap">
                <div className="content">
                    <div className="row gap-3">

                        {filtrarpokemon?.slice(0,151).map((pokemon) => (
                            <Card className="mx-auto figure" style={{ width: '18rem' }}>
                            <Card.Header className="text-center mb-2 type_pokemon"><b>Tipo:</b> {pokemon.type}</Card.Header>
                            <Card.Img width="80" height="100" variant="top" src={pokemon.imggif} className="d-block mx-auto w-50 image mb-2 mt-2"/>
                            <Card.Body>
                                <Card.Title className="text-center type_pokemon">{pokemon.id} - {pokemon.name}</Card.Title>
                                <ListGroup variant="flush" className="item-list-group">
                                    <ListGroup.Item className="item-list">
                                        <Figure.Image
                                        width={16}
                                        height={16}
                                        src="https://cdn-icons-png.flaticon.com/128/833/833472.png"
                                        />
                                        <b> Hp :</b> {pokemon.hp}
                                    </ListGroup.Item>
                                    <ListGroup.Item className="item-list">
                                        <Figure.Image
                                        width={16}
                                        height={16}
                                        src="https://cdn-icons-png.flaticon.com/512/3522/3522092.png"
                                        />
                                        <b > Ataque :</b> {pokemon.attack}</ListGroup.Item>
                                    <ListGroup.Item className="item-list">
                                        <Figure.Image
                                        width={16}
                                        height={16}
                                        src="https://cdn-icons-png.flaticon.com/512/929/929429.png"
                                        />
                                        <b> Defensa :</b> {pokemon.defense}</ListGroup.Item>
                                    <ListGroup.Item className="item-list">
                                        <Figure.Image
                                        width={16}
                                        height={16}
                                        src="https://cdn-icons-png.flaticon.com/512/1671/1671062.png"
                                        />                                        
                                        <b> E.Ataque :</b> {pokemon.sp_atk}</ListGroup.Item>
                                    <ListGroup.Item className="item-list">
                                        <Figure.Image
                                        width={16}
                                        height={16}
                                        src="https://cdn-icons-png.flaticon.com/512/1671/1671062.png"
                                        />
                                        <b> E.Defensa :</b> {pokemon.sp_def}</ListGroup.Item>
                                    <ListGroup.Item className="item-list">
                                        <Figure.Image
                                        width={16}
                                        height={16}
                                        src="https://cdn-icons-png.flaticon.com/512/8853/8853763.png"
                                        />
                                        <b> Velocidad :</b> {pokemon.speed}</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                            </Card>  
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Listado;