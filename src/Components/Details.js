import React, { useEffect, useState } from "react";
import { ListGroup, Row, Col, Image, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Review from './review'

function Details() {
  const [details, setDetails] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/restaurants.json")
        .then((res) => res.json())
        .then((data) => setDetails(data.restaurants));
    };
    fetchData();
  }, []);

  const filteredDetails = details.find((i) => i.id == params.id);
  console.log(filteredDetails);


  return (
    <div>
      <Link className="btn btn-outline-white rounded my-2 btn-sm" to="/">
        Back
      </Link>
      {filteredDetails ? (
        <>
        <Row className="my-3">
          <Col md={3}>
            <Image
              className="img"
              src={filteredDetails.photograph}
              alt={filteredDetails.name}
              fluid
            />
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroup.Item>
                <h1>{filteredDetails.name}</h1>
                <p>{filteredDetails.neighborhood}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>Cuisine: {filteredDetails.cuisine_type}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>Address: {filteredDetails.address}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroup.Item>
                <h4>Operating Hours:</h4>
                <p>Monday: {filteredDetails.operating_hours.Monday}</p>
                <p>Tuesday: {filteredDetails.operating_hours.Monday}</p>
                <p>Wednesday: {filteredDetails.operating_hours.Monday}</p>
                <p>Thursday: {filteredDetails.operating_hours.Monday}</p>
                <p>Friday: {filteredDetails.operating_hours.Monday}</p>
                <p>Saturday: {filteredDetails.operating_hours.Monday}</p>
                <p>Sunday: {filteredDetails.operating_hours.Monday}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
        <Col>
       <Card className="my-3 mx-3 p-3 rounded">
        <Review data={filteredDetails.reviews} />
       </Card>
        </Col>
        </Row>
        
        </>
        
      ) : null}
    </div>
  );
}

export default Details;
