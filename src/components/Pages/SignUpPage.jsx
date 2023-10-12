import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function SignUpPage({ signUpHandler }) {


    return (
        <Form onSubmit={signUpHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="name" name="name" />
            </Form.Group>
            <Button variant="outline-success" type="submit">Зарегистрироваться</Button>
        </Form>
    );
}
