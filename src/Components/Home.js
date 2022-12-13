import React, { useState, useEffect } from "react";
import RestaurantsCard from "./restaurantsCard";
import { Row, Col } from "react-bootstrap";

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  async function fetchData() {
    await fetch("/restaurants.json")
      .then((res) => res.json())
      .then((data) => setRestaurants(data.restaurants));
  }
  // fetchData()

  useEffect(() => {
    fetchData();
  }, []);
  console.log(restaurants);

  return (
    <Row>
      {restaurants.map((restaurant) => (
        <Col sm={12} md={8} lg={6} xl={3}>
          <RestaurantsCard  key={restaurants.id} item={restaurant} />
        </Col>
      ))}
    </Row>
  );
}

export default Home;
