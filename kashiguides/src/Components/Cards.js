import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Cards = ({firstName,age}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/person1.avif" />
      <Card.Body>
        <Card.Title>{firstName}</Card.Title>
        <Card.Text>
        age:{age}
         
        </Card.Text>
        <Button variant="primary">talk to him</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cards
