import React from 'react';
import styled from 'styled-components';
import { AiFillCar } from 'react-icons/ai';
import { BsHouseFill } from 'react-icons/bs';
import { RiHospitalLine } from 'react-icons/ri';
import { IconContext } from "react-icons";

const Button = styled.button`
  height: 36px;
  width: 36px;
  background: blue;
  color: white;
  border: 0px;
  text-align:center;
  border-radius: 50%;
  font-size: 16px;
  justify-content: center;
  display:block;
`;

function Dream(props) {
  const {type, id} = props;
  var icon;
  if(type == "CAR")
    icon = <AiFillCar />;
  if(type == "HOUSE")
    icon = <BsHouseFill />;
  if(type == "HEALTH")
    icon = <RiHospitalLine />;
  return (
        <Button id={id}>
          <IconContext.Provider
            value={{ color: 'white', size: '12px' , display: 'inline-block' }}
          >
            {icon}
          </IconContext.Provider>
        </Button>
  );
}

export default Dream;
