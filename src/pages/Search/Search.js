import React, {useEffect, useState} from "react";
import { withRouter } from 'react-router-dom';
import './Search.scss';
import MovieCatalog from "../../components/MovieCatalog";
import {URL_API, API} from "../../utils/constants";
import queryString from "querystring";
import {Row, Col, Button, CardColumns, InputGroup, FormControl} from "react-bootstrap";

const Search=(props) => {
    const {location, history } = props;
    const [movieList, setMovieList] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(()=> {
        (async () => {

            const searchValue = queryString.parse(location.search);
            const  s  = searchValue['?s'];
            const response = await fetch(
                `${URL_API}/search/movie?api_key=${API}&language=es-MX&query=${s}&page=1`
            );
            const movies = await response.json();
            setSearchValue(s);
            setMovieList(movies);
        })();

    }, [location.search]);

    const onChangeSearch = e => {
        let urlParams = queryString.parse(location.search);
        urlParams['s'] = e.target.value;
        delete urlParams['?s'];
        history.push(`?${decodeURIComponent(queryString.stringify(urlParams)).replace('?','')}`);
        setSearchValue(e.target.value)
    };

    return (
        <Row>
            <Col className="Search" style={{ paddingTop:'8%'}}>
                <h1 className="mb-3 mt-4 h1 text-center">BUSCADOR DE PELÍCULAS</h1>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <InputGroup className="Search-input mb-3 mt-4 w-75" size="lg">
                            <FormControl onChange={onChangeSearch} value={searchValue}
                                         placeholder="Ingresa una palabra clave..."
                                         aria-label="Recipient's username"
                                         aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary"><img src="../../assets/img/lupa.png" alt=""/></Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>

                </Row>
                <CardColumns style={{padding:'3% 10%'}} >
                    {movieList.results && (
                        <MovieCatalog movies={movieList}/>
                    )}
                </CardColumns>
            </Col>
        </Row>
    )
};

export default withRouter(Search);
