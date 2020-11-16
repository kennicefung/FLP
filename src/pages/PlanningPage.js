import React, { useEffect } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import DreamsPanel from "../components/dreamsPanel/DreamsPanel";
import PlanningChart from "../components/planningChart/PlanningChart";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

class PlanningPage extends React.Component {
  onDragEnd = () => {
    // the only one that is required
  };
  render(){
    return (
      <Container fluid={true} style={{marginTop: 5}}>
        <DragDropContext
        onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable-1">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}
              {...provided.droppableProps}>
              <Row>
                <Col xs={12} md={8} id="chart-wrapper" style={{height:500}}>
                <PlanningChart />
                </Col>
                <Col xs={6} md={4} id="dream-board-wrapper">
                  <DreamsPanel/>
                </Col> 
              </Row>
            </div>
          )}
          </Droppable>
        </DragDropContext>
      </Container>
    );
  }
}

export default PlanningPage;