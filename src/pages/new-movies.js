import React, {useState, useEffect } from "react";
import {Row, Col, CardColumns, Spinner } from "react-bootstrap";
import { URL_API, API } from "../utils/constants";
import MovieCatalog from "../components/MovieCatalog";
import Pagination from '../components/Pagination';
import Footer from "../components/Footer";

// Component of new movies
const NewMovies = () => {
    const[ movieList, setMovieList] = useState([]);
    const [page, setPage] = useState(1);

    // An asynchronous promise is used to update the information from the source api
    useEffect( () => {
        (async () => {
            const response = await fetch(
                `${URL_API}/movie/now_playing?api_key=${API}&language=es-MX&page=${page}`
            );

            const movies = await response.json();
            setMovieList(movies);
        })();
    },[page]);

    const onChangePage = page => (
        setPage(page)
    );

    return (
        <Row >
            <Row className="w-100">
                <Col className="d-flex justify-content-center">
                    <h1 className="text-center h1 mt-5 pt-5 mb-5 " >
                        ÚLTIMOS ESTRENOS
                    </h1>
                </Col>
            </Row>
            <CardColumns style={{width:'100vw', padding:'0 10%'}} className="card-column">
                {movieList.results ? (
                    <MovieCatalog movies={movieList}/>
                ) : (
                    <Col>
                        <Spinner animation="grow" />
                    </Col>
                )}
            </CardColumns>
            <Row className="w-100 p-2">
                <Col className="d-flex justify-content-center">
                  /*A component was created that contains the page of all the films*/
                    <Pagination
                        className="pagination"
                        currentPage={movieList.page}
                        totalItems={movieList.total_results}
                        onChangePage={onChangePage}/>
                </Col>
            </Row>
            <Footer/>
        </Row>
    )
};

export default NewMovies;
