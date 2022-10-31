import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//import Container from "react-bootstrap/Container";

//import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Trip from "./Trip";

//import { useCurrentUser } from "../../contexts/CurrentUserContext";


function TripPage() {
  const { id } = useParams();
  const [trip, setTrip] = useState({ results: [] });



  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: trip }] = await Promise.all([
          axiosReq.get(`/trips/${id}`),
        ]);
        setTrip({ results: [trip] });
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles for mobile</p>
        <Trip {...trip.results[0]} setTrips={setTrip} tripPage />
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default TripPage;