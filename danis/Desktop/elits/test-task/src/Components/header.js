import React, { Component } from "react";

import {
    Navbar,
    Nav,
    Container,
} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from '../Pages/Home.js'
import News from '../Pages/News.js'

export default class Header extends Component {
    render() {
        return (
            <>
                <header>
                    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="/"> На главную </Nav.Link>
                                    <Nav.Link href="/news"> Новости </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/news" element={<News />} />
                    </Routes>
                </Router>

            </>
        )
    }
}