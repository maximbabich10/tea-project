import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

export default function AppNavBar({ currentUser, logoutHandler }) {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand>Tea</Navbar.Brand>
                <Nav className="me-auto flex-grow-1">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                {currentUser
                    ? (
                        <>
                            <span className="nav-link">
                                Привет,
                                {' '}
                                {currentUser.name}
                                {' '}
                                !
                                {currentUser.role}
                            </span>
                            <Button onClick={logoutHandler} className="nav-link" variant="warning">logout</Button>
                        </>
                    )
                    : (
                        <>
                            <Nav.Link href="/auth/signup">signup</Nav.Link>
                            <Nav.Link href="/auth/signin">signin</Nav.Link>
                        </>
                    )}
                {currentUser?.role === 1 &&
                    (<Nav.Link href='/admin/page'>admin</Nav.Link>)}
            </Container>
        </Navbar>
    );
}
