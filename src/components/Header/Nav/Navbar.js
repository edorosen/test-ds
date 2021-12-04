import React from 'react';
import { Nav } from './styles';
import HeaderImg from '../HeaderImg';
import Burger from './Burger';
import CallUs from './CallUs';

const Navbar = () => {
  return (
    <Nav>
      <HeaderImg />
      <Burger />
      <CallUs />
    </Nav>
  );
};

export default Navbar;