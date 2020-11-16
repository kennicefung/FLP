import React from 'react';
import styled from 'styled-components';
import { AiFillCar } from 'react-icons/ai';
import { BsHouseFill } from 'react-icons/bs';
import { RiHospitalLine } from 'react-icons/ri';
import { FaBaby } from 'react-icons/fa';
import { FaHospital } from 'react-icons/fa';
import { Draggable } from 'react-beautiful-dnd';

import { IconContext } from "react-icons";

const Button = styled.button`
  height: 45px;
  width: 45px;
  background: #D86147;
  color: white;
  border: 0px;
  text-align:center;
  border-radius: 50%;
  font-size: 16px;
  justify-content: center;
  display:block;
  margin: 10px;
`;

function Dream(props) {
  const {type, id} = props;
  var icon;
  if(type == "CAR")
    icon = <AiFillCar />;
  if(type == "HOUSE")
    icon = <BsHouseFill />;
  if(type == "BABY")
    icon = <FaBaby />;
  if(type == "HOSP")
    icon = <FaHospital />;
  return (
    <Draggable draggableId={"draggable-"+id} index={id}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}>
              <Button id={id} style={{outline: 'none'}}>
                <IconContext.Provider
                  value={{ color: 'white', size: '25px' , display: 'inline-block' }}>
                  {icon}
                </IconContext.Provider>
              </Button>
            </div>
          )}
    </Draggable>
  );
}

export default Dream;
