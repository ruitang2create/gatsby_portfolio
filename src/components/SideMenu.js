import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { menuData } from '../data/MenuData';
import scrollTo from 'gatsby-plugin-smoothscroll';

const SideMenu = () => {
    const [menuShow, setMenuShow] = useState(false);

    const switchIcon = menuShow ? <IoCloseCircleOutline fontSize="1.8rem" /> : <FaBars fontSize="1.8rem" />;

    return (
        <SideMenuContainer>
            <SwitchWrapper onClick={() => setMenuShow(!menuShow)}>
                {switchIcon}
            </SwitchWrapper>
            {
                menuShow &&
                <MenuItemsWrapper>
                    <SideMenuItem onClick={() => scrollTo('#headerSection')}>Top</SideMenuItem>
                    {menuData.map((item, index) => (
                        <SideMenuItem key={index} onClick={() => scrollTo(item.link)}>{item.title}</SideMenuItem>
                    ))}
                </MenuItemsWrapper>
            }
        </SideMenuContainer>
    );
};

export default SideMenu;

const SideMenuContainer = styled.nav`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        background: transparent;
        color: #b3ffe0;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 100;
        text-align: right;
        margin-right: 1rem;
        margin-top: 24px;
    }
`;

const SwitchWrapper = styled.div`
    cursor: pointer;
`;

const MenuItemsWrapper = styled.div`
    background: transparent;
    color: #b3ffe0;
    margin-top: 2px;
`;

const SideMenuItem = styled.div`
    cursor: pointer;
    padding: 2px;
    transition: 0.3s;
    
    &:hover {
        transform: translateX(-3px);
        text-decoration: underline;
    }
`;
