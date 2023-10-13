import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function TeaCard({tea}) {
    // console.log(tea)
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={tea.image}/>
      <Card.Body>
        <Card.Title>{tea.name}</Card.Title>
        <Card.Text>{tea.description}</Card.Text>
        <Button variant="warning">Удалить</Button>
      </Card.Body>
    </Card>
    );
}


