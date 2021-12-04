import React from 'react';
import { NavLink } from "react-router-dom";
import { Ul, DropDown } from './styles';
import Drop from './DropDown';

const RightNav = ({ open }) => {

  return (
    <>
      <Ul open={open}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/About">About us</NavLink></li>
        <DropDown>
          <Drop />
        </DropDown>
        <li><NavLink to="/Contacts">Contact us</NavLink></li>
      </Ul>
    </>
  )
}

export default RightNav;