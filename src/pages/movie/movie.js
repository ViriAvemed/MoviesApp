import React from "react";
import {Row, Col, Button, Spinner} from "react-bootstrap";
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/fetch'
import { URL_API, API } from "../../utils/constants";
import './movie.scss';
import allActions from "../../actions";
import { useDispatch} from 'react-redux'


const Movie = () => {

    // Get inf. of each movie
    const {id} = useParams();
    const movieInfo = useFetch(
        `${URL_API}/movie/${id}?api_key=${API}&language=es-MX`
    );

    // Loading
    if(movieInfo.loading || !movieInfo.result){
        return <Spinner animation="grow" />;
    }

    //    To send inf. of API to component
    return <RenderMovie movieInfo={movieInfo.result}/>;
};


// Component with background image and column of inf.
const RenderMovie =(props)=> {
    const {
        movieInfo: { backdrop_path, poster_path}
    } = props;

    const backdropPath =`http://image.tmdb.org/t/p/original${backdrop_path}`;

    return (
        <Row className="movie m-0 p-0" style={{backgroundImage: `url('${backdropPath}')` }}>
            <Col className="movie_dark">
                <Row className="movie-poster">
                    <Col  xs={12} md={5} className="movie_poster">
                        <PosterMovie image={poster_path}/>
                    </Col>
                    <Col  xs={12} md={6} className="movie_info pr-5 pl-5 pt-0 pb-0" >
                        <MovieInfo movieInfo={props.movieInfo}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )

};

const PosterMovie=(props)=> {
    const { image } = props;
    const posterPath= `http://image.tmdb.org/t/p/original${image}`;
    return <div style={{backgroundImage: `url('${posterPath}')`}}/>;
};

// Component whit the second image and the text about movie
const MovieInfo =(props)=> {
    const { movieInfo: { release_date, overview, genres, title,vote_average, original_language, runtime, revenue, budget} }= props;

    const dispatch = useDispatch();

    return (
        <Row className="movie_info-header h-100" >
            <Row className="p-0 m-0">
                <Col className="p-0 m-0">
                    <h1>{title}{" "}{" "}
                        <Button variant="outline-warning" onClick={() => dispatch(allActions.counterActions.addMovie({"title":title}))}>Agregar a Favoritas</Button>
                    </h1>
                    <span>{release_date}</span>
                </Col>
            </Row>
            <Row>
                <Col className=" d-flex justify-content-center">
                    <div className="movie_info-content">
                        <p>Calificación: {vote_average}    | Duración: {runtime} min.  |  Idioma de origen: {original_language} </p>
                        <p>Presupuesto: ${budget}    | Recaudación: ${revenue}</p>
                        <h3>Sipnosis: </h3>
                        <p>{overview}</p>
                        <h3>Generos</h3>
                        <ul>{genres.map(genre =>
                            <li key={genre.id}>{genre.name}</li>
                        )}
                        </ul>
                    </div>
                </Col>
            </Row>
        </Row>
    )
};

export default Movie;
