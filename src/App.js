import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Provider } from 'react-redux'

// Store
import store from "./store";


// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import NavBar from "./components/Navbar";

//Pages

import Home from "./pages/home";
import NewMovies from "./pages/new-movies";
import BestMovies from "./pages/best-movies";
import Search from "./pages/Search";
import Movie from "./pages/movie/movie";
import MisMovies from "./pages/my-movies";
import Error404 from "./pages/error404";



const App = () => {

    // let store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
    return (

        <Provider store={store}>
            <Container  fluid={true} >
                <Router>
                    <Row>
                        <Col className="m-0 p-0">
                            <NavBar/>
                        </Col>

                    </Row>

                    <Row>
                        <Col>
                            <Switch>
                                <Route path="/" exact={true}>
                                    <Home/>
                                </Route>

                                <Route path="/new-movies" exact={true}>
                                    <NewMovies/>
                                </Route>

                                <Route path="/best-movies" exact={true}>
                                    <BestMovies/>
                                </Route>

                                <Route path="/movie/:id" exact={true}>
                                    <Movie/>
                                </Route>

                                <Route path="/search" exact={true}>
                                    <Search/>
                                </Route>

                                <Route path="/my-movies" exact={true}>
                                    <MisMovies/>
                                </Route>

                                <Route path="*">
                                    <Error404/>
                                </Route>
                            </Switch>
                        </Col>
                    </Row>
                </Router>
            </Container>
        </Provider>
    );
};



export default App;
