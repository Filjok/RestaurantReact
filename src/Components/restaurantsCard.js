import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function restaurantsCard(props) {
  
  return (
    <Link to={`restaurant/${props.item.id}`} style={{textDecoration:'none',color:'white'}}>
    <Card className='my-3 p-3 rounded'>

      <Card.Img className=' p-3 ' src={props.item.photograph}></Card.Img>
      <Card.Text>{props.item.name}</Card.Text>
      <Card.Text><p>Location :{props.item.neighborhood}</p></Card.Text>
      <Card.Text><p>Cuisine :{props.item.cuisine_type}</p></Card.Text>

    </Card>
    </Link>
  )
}

export default restaurantsCard