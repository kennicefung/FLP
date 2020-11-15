import React from 'react';
import {Container, Row} from 'react-bootstrap'
import Dream from "../dreams/Dream"


function DreamsPanel() {
  return (
    <Container>
      <Row>
        <Dream type="CAR" id={1}/>
      </Row>
      <Row>
        <Dream type="HOUSE" id={2}/>
      </Row>
      <Row>
        <Dream type="HEALTH" id={3}/>
      </Row>
    </Container>
  );
}

export default DreamsPanel;
