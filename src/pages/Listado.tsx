import react, {useEffect, useState} from "react";
import Card from 'react-bootstrap/card';
import ListGroup from 'react-bootstrap/ListGroup';
import "bootstrap/dist/css/bootstrap.min.css";

import { getPokemons } from "../controller/getPokemon";
import { Pokemon } from "../models/pokemon.m"; 


// El metodo slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará. 

const Listado = () => {
    // Obtenemos la data de acuerdo al formato del modelo
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    // Llamamos al controller y los obtenemos a todos
    useEffect(() => {
        const ObtenerTodos = async() => {
            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
        };
        ObtenerTodos();
    });

    return(
        <>
            <h1>Pokemon</h1>
            <div className="content-wrap">
                <div className="content">
                    <div className="row gap-3">

                        {pokemons?.slice(0,151).map((pokemon) => (
                            <Card className="mx-auto" style={{ width: '18rem' }}>
                            <Card.Header><b>Tipo:</b> {pokemon.type}</Card.Header>
                            <Card.Img width="80" height="100" variant="top" src={pokemon.imggif} className="d-block mx-auto w-50"/>
                            <Card.Body>
                                <Card.Title className="text-center">{pokemon.id} - {pokemon.name}</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><b>Hp:</b> {pokemon.hp}</ListGroup.Item>
                                    <ListGroup.Item><b>Ataque:</b> {pokemon.attack}</ListGroup.Item>
                                    <ListGroup.Item><b>Defensa:</b> {pokemon.defense}</ListGroup.Item>
                                    <ListGroup.Item><b>E.Ataque:</b> {pokemon.sp_atk}</ListGroup.Item>
                                    <ListGroup.Item><b>E.Defensa:</b> {pokemon.sp_def}</ListGroup.Item>
                                    <ListGroup.Item><b>Velocidad:</b> {pokemon.speed}</ListGroup.Item>
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