import React from 'react';
import {useSelector, useDispatch,} from 'react-redux';
import allActions from '../actions';
import { getStateLocalStorage } from "../utils/localStorage";
import { Row, Col, Card, Button, Spinner } from "react-bootstrap";

// Component to list favorite movies
// This component uses redux to add and remove movies
const MisMovies = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    let fromStorage = getStateLocalStorage(counter);

    return (
        <Row>
            <Col className="App text-center">
                <h1 className="text-center mb-5 h1" style= {{ marginTop: '10%'}}>
                    TUS PELÍCULAS FAVORITAS
                </h1>
                <Col>
                    {(fromStorage.length> 0) ? fromStorage.map( (movie) => (
                        <Card bg="dark" text="white"  className="my-fav-card mb-2"  movie={movie}>
                            <Card.Header className="text-justify d-flex justify-content-between">
                                {movie.title}
                                <Button variant="outline-warning"  onClick={() => dispatch(allActions.counterActions.deleteMovie(movie.title))}>x</Button>
                            </Card.Header>
                        </Card>
                    )):(
                        <Col>
                            <Spinner animation="grow" />
                        </Col>
                    )}
                </Col>
            </Col>
        </Row>
    )
};

export default MisMovies;

