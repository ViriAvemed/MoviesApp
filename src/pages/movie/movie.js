import React from "react";
import {Row, Col, Button, Spinner} from "react-bootstrap";
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/fetch'
import { URL_API, API } from "../../utils/constants";
import './movie.scss';
import allActions from "../../actions";
import { useDispatch} from 'react-redux'


const Movie = () => {

    const {id} = useParams();
    const movieInfo = useFetch(
        `${URL_API}/movie/${id}?api_key=${API}&language=es-MX`
    );


    if(movieInfo.loading || !movieInfo.result){
        return <Spinner animation="grow" />;
    }

    return <RenderMovie movieInfo={movieInfo.result}/>;
};

const RenderMovie =(props)=> {
    const {
        movieInfo: { backdrop_path, poster_path}
    } = props;

    const backdropPath =`http://image.tmdb.org/t/p/original${backdrop_path}`;


    return (
        <Row className="movie" style={{backgroundImage: `url('${backdropPath}')`, height:'100vh'}}>
            <div className="movie_dark" style={{ paddingTop:'8%'}}>
                <Row className="row-poster">
                    <Col md={{ span:5}}  className="movie_poster">
                        <PosterMovie image={poster_path}/>
                    </Col>
                    <Col md={{ span:6}} className="movie_info mr-3" >
                        <MovieInfo movieInfo={props.movieInfo}/>
                    </Col>
                </Row>
            </div>

        </Row>
    )

};

const PosterMovie=(props)=> {
    const { image } = props;
    const posterPath= `http://image.tmdb.org/t/p/original${image}`;
    return <div style={{backgroundImage: `url('${posterPath}')`}}/>;
};

const MovieInfo =(props)=> {
    const { movieInfo: { release_date, overview, genres, title,vote_average, original_language, runtime, revenue, budget} }= props;

    const dispatch = useDispatch();



    return (
        <Row className="movie_info-header" >
            <Row className="mt-5">
                <Col>
                    <h1 className="mt-5">
                        {title}{" "}{" "}
                        <Button variant="outline-warning" onClick={() => dispatch(allActions.counterActions.addMovie({"title":title}))}>Agregar a Favoritas</Button>
                    </h1>
                    <span>{release_date}</span>
                </Col>
            </Row>
            <Row>
                <Col>
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
