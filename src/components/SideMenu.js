import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { menuData } from '../data/MenuData';
import scrollTo from 'gatsby-plugin-smoothscroll';

const SideMenu = () => {
    return (
        <SideMenuContainer>
            <SwitchWrapper>
                <FaBars /> {/*css={`color: #047ba1`}  */}
            </SwitchWrapper>
            <MenuItemsWrapper>
                <SideMenuItem onClick={() => scrollTo('#headerSection')}>Top</SideMenuItem>
                {menuData.map((item, index) => (
                    <SideMenuItem key={index} onClick={() => scrollTo(item.link)}>{item.title}</SideMenuItem>
                ))}
            </MenuItemsWrapper>
        </SideMenuContainer>
    );
};

export default SideMenu;

const SideMenuContainer = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        background: transparent;
        color: #b3ffe0;
        position: fixed;
        top: 0;
        right: 0;
        width: 50px;
        z-index: 100;
        text-align: right;
    }
`;

const SwitchWrapper = styled.div``;

const MenuItemsWrapper = styled.div``;

const SideMenuItem = styled.div``;
