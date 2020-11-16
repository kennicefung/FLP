import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Dream from "../dreams/Dream"
import { Draggable } from 'react-beautiful-dnd';


function DreamsPanel() {
  return (
    <div style={{width: 200}}>
      <Row>
        <Col><Dream type="CAR" id={1}/></Col>
        <Col><Dream type="HOUSE" id={2}/></Col>
      </Row>
      <Row>
        <Col><Dream type="BABY" id={3}/></Col>
        <Col><Dream type="HOSP" id={4}/></Col>
      </Row>
    </div>
  );
}

export default DreamsPanel;
