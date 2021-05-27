import * as React from "react";
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import scrollTo from 'gatsby-plugin-smoothscroll';
import myResume from '../assets/files/Rui-Tang-Resume-Web-Developer.pdf';

const Header = () => (
  <Nav id="headerSection">
    <NavLink to="/"><strong>RT</strong></NavLink>
    <NavMenu>
      {menuData.map((item, index) => (
        <NavLink onClick={() => scrollTo(item.link)} key={index}>{item.title}</NavLink>
      ))}
    </NavMenu>
    <NavBtn>
      <ResumeButton href={myResume} target="_blank" rel="noreferrer">Resume</ResumeButton>
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

const ResumeButton = styled.a`
    background: transparent;
    white-space: nowrap;
    padding: 10px 32px;
    color: #b3ffe0;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    border: #b3ffe0 1px solid;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none !important;
    transition: 0.3s !important;
    border-radius: 10px;

    &:hover {
        background: #00b36b;
        transform: translateY(-2px);
        color: #b3ffe0;
    }
`;