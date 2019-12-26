import React from "react";
import { Link } from 'react-router-dom'
import './NavBar.scss';
import {Navbar, Nav, Col, Row} from "react-bootstrap";
import Logo from "./pelicula.png";

const NavBar = () => {
    return (
        <Row>
            <Col>
                <Navbar collapseOnSelect expand="lg"  variant="dark" className="nav-bar">
                    <Navbar.Brand >
                        <img src={Logo} className="nav-bar_logo"/>
                        <Navbar.Brand><p className="nav-bar-title">MOVIES APP</p></Navbar.Brand>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="basic-navbar " >
                        <Nav className="d-flex basic-navbar-toggle">
                            <Link to="/">INICIO</Link>
                            <Link to="/new-movies">NUEVAS</Link>
                            <Link to="/best-movies">POPULARES</Link>
                            <Link to="/my-movies">FAVORITAS</Link>
                            <Link to="/search">BUSCAR</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </Row>

    )
};

export default NavBar;
