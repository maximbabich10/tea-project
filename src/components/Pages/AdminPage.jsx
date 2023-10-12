import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

export default function AdminPage({ logoutHandler }) {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">GreatTea</Navbar.Brand>
                <Nav className="me-auto flex-grow-1" />
                <Button onClick={logoutHandler} className="nav-link" variant="warning">logout</Button>
            </Container>
        </Navbar>
    );
}