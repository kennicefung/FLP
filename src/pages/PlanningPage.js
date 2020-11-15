import React, { useEffect } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import DreamsPanel from "../components/dreamsPanel/DreamsPanel";
import PlanningChart from "../components/planningChart/PlanningChart";


const PlanningPage = () => {
  return (
    <Container fluid={true} style={{marginTop: 32}}>
      <Row>
        <Col xs={12} md={8} id="chart-wrapper">
          <PlanningChart />
        </Col>
        <Col xs={6} md={4} id="dream-board-wrapper">
          <DreamsPanel/>
        </Col>
      </Row>
    </Container>
  );
};

export default PlanningPage;