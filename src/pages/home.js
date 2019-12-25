import React from "react";
import { Row, Col,Container } from "react-bootstrap";
import CarouselMovies from "../components/Carousel/Carousel";
import useFetch from "../hooks/fetch";
import { URL_API, API } from "../utils/constants";
import Footer from "../components/Footer/Footer"


const Home = () => {
    const newMovies = useFetch(`${URL_API}/movie/now_playing?api_key=${API}&language=es-MX&page=1`);

    return (
        <Container fluid={true} className="p-0 m-0">
            <Row className="p-0 m-0">
                <Col className="p-0 m-0">
                    <CarouselMovies movies={newMovies} className="p-0 m-0" />
                </Col>
            </Row>
            <Row className="row-footer">
                <Footer/>
            </Row>

        </Container>

    )

};

export default Home;
