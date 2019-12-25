import React from "react";
import { Link } from "react-router-dom";
import './MovieCatalog.scss';
import {Col, Card} from "react-bootstrap";


const MovieCatalog =(props) => {

    const {
        movies: {results}
    } = props;

    return results.map ( movie => (
        <Col key={movie.id}>
            <MovieCard movie={movie}>
            </MovieCard>
        </Col>


    ));

};

const MovieCard =(props) => {
    const { movie: {id, title, poster_path, overview} } = props;
    const posterPath =`http://image.tmdb.org/t/p/original${poster_path}`;

    return (
        <Link to={`/movie/${id}`}>
         <Card
         className="movie-card">
                <Card.Img variant="top" src={posterPath} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {overview}
                    </Card.Text>
                </Card.Body>
         </Card>

        </Link>
    )
};

export default MovieCatalog;
