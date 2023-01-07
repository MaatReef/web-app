import react from "react";
import Card from 'react-bootstrap/card';
import ListGroup from 'react-bootstrap/ListGroup';
import "bootstrap/dist/css/bootstrap.min.css";

const Listado = () => {
    return(
        <>
            <h1>Pokemon</h1>
            <div className="content-wrap">
                <div className="content">
                    <div className="row gap-3">
                        <Card className="mx-auto" style={{ width: '18rem' }}>
                        <Card.Header>Tipo: Fantasma</Card.Header>
                        <Card.Img width="80" height="100" variant="top" src="https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif" className="d-block mx-auto w-50"/>
                        <Card.Body>
                            <Card.Title className="text-center">Gengar</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Hp: ##</ListGroup.Item>
                                <ListGroup.Item>Ataque: ##</ListGroup.Item>
                                <ListGroup.Item>Defensa: ##</ListGroup.Item>
                                <ListGroup.Item>E.Ataque: ##</ListGroup.Item>
                                <ListGroup.Item>E.Defensa: ##</ListGroup.Item>
                                <ListGroup.Item>Velocidad: ##</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        </Card>

                        
                        <Card className="mx-auto" style={{ width: '18rem' }}>
                        <Card.Header>Tipo: Fantasma</Card.Header>
                        <Card.Img width="80" height="100" variant="top" src="https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif" className="d-block mx-auto w-50"/>
                        <Card.Body>
                            <Card.Title className="text-center">Gengar</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Hp: ##</ListGroup.Item>
                                <ListGroup.Item>Ataque: ##</ListGroup.Item>
                                <ListGroup.Item>Defensa: ##</ListGroup.Item>
                                <ListGroup.Item>E.Ataque: ##</ListGroup.Item>
                                <ListGroup.Item>E.Defensa: ##</ListGroup.Item>
                                <ListGroup.Item>Velocidad: ##</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        </Card>

                        <Card className="mx-auto" style={{ width: '18rem' }}>
                        <Card.Header>Tipo: Fantasma</Card.Header>
                        <Card.Img width="80" height="100" variant="top" src="https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif" className="d-block mx-auto w-50"/>
                        <Card.Body>
                            <Card.Title className="text-center">Gengar</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Hp: ##</ListGroup.Item>
                                <ListGroup.Item>Ataque: ##</ListGroup.Item>
                                <ListGroup.Item>Defensa: ##</ListGroup.Item>
                                <ListGroup.Item>E.Ataque: ##</ListGroup.Item>
                                <ListGroup.Item>E.Defensa: ##</ListGroup.Item>
                                <ListGroup.Item>Velocidad: ##</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        </Card>

                        
                    </div>
                </div>
            </div>
        </>
    )
};

export default Listado;