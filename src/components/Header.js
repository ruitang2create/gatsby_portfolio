import * as React from "react";
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { menuData } from '../data/MenuData';
import { Button } from "./Button";
import scrollTo from 'gatsby-plugin-smoothscroll';

const Header = () => (
  <Nav>
    <NavLink to="/">HOME</NavLink>
    <Bars />
    <NavMenu>
      {menuData.map((item, index) => (
        <NavLink onClick={() => scrollTo(item.link)} key={index}>{item.title}</NavLink>
      ))}
    </NavMenu>
    <NavBtn>
      <Button primary="true" round="true">Resume</Button>
    </NavBtn>
  </Nav >
)

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`;

const NavLink = styled.div`
  color: #b3ffe0;
  display: flex;
  align-items: center;
  text-decoration: none !important;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    border-bottom: #b3ffe0 1.5px solid;
    color: #b3ffe0 !important;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;

  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;