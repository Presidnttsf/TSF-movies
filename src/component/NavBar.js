import { Nav, NavDropdown, Navbar, Container, Button } from 'react-bootstrap';
import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

function NavBar(props) {

    return (

        <Container fluid>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
                <Container>

                    <Navbar.Brand><Link to="/" className='Tsf-movies' >TSF Movies</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link>
                                <Link to="/latest" className='Tsf-movies' >Latest Movies</Link>
                            </Nav.Link>
                            <Nav.Link><Link className='Tsf-movies' to='/addedByUser'>User Added</Link></Nav.Link>
                            <NavDropdown title="Title Type" id="collasible-nav-dropdown">
                                <NavDropdown.Item><Link to="titleType/tvEpisode" >tvEpisode</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="titleType/video" >video</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="titleType/videoGame" >videoGame</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="titleType/movie" >movie</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="titleType/tvMiniSeries" >tvMiniSeries</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="titleType/tvSeries" >tvSeries</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="titleType/tvMovie" >tvMovie</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="titleType/tvSpecial" >tvSpecial</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="titleType/tvShort" >tvShort</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="titleType/short" >short</Link></NavDropdown.Item>


                            </NavDropdown>
                        </Nav>
                        <Nav>

                            <Nav.Link> <Link className='Tsf-movies' to='/addMovie'> Add Movie</Link></Nav.Link>
                            {props.button}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </Container >


    )
}
export default NavBar;
