import React from "react";
import { Link } from "react-router-dom";
import './Carousel.scss';
import {Button, Col, Row, Carousel, Spinner} from "react-bootstrap";



const CarouselMovies = (props) => {
    const {movies} = props;
    if(movies.loading || !movies.result){
        return <Spinner animation="grow" />;
    }

    const { results } = movies.result;

    return (
        <Col className="p-0 m-0">
            <Row className="p-0 m-0">
                <Col className="d-flex justify-content-center p-0 m-0">
                    <Carousel  className="carousel-movies p-0 m-0">
                        {results.map(movie => (
                            <Carousel.Item className="p-0 m-0" key={movie.id}>
                                <Movie  movie={movie}/>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </Col>
    )
};

const Movie =(props)=> {
    const {
        movie: {id, backdrop_path, title}
    } = props;

    const backdropPath = `http://image.tmdb.org/t/p/original${backdrop_path}`;

    return (
        <div>
            <img style={{height:'100vh', width:'100vw'}}
                 className="d-block"
                 src={`${backdropPath}`}
                 alt=""
            />
            <Carousel.Caption className="carousel-caption">
                <h1>"{title}"</h1>
                <Link to={`/movie/${id}`}>
                    <Button variant="outline-primary">Ver más</Button>
                </Link>
            </Carousel.Caption>
        </div>
    )

};

export default CarouselMovies;
