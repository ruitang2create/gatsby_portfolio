import React from 'react';
import styled from 'styled-components';
import { sidebarData } from '../data/SidebarData';

const Sidebar = () => {
    return (
        <SidebarContainer>
            {sidebarData.data.map((item, index) => (
                <SidebarItem key={index}>
                    <a href={item.link} target="_blank" rel="noreferrer">{item.icon}</a>
                </SidebarItem>
            ))}
        </SidebarContainer>
    )
};

export default Sidebar;

const SidebarContainer = styled.div`
    font-size: 1.2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    color: ${sidebarData.textColor};
    padding-left: 3rem;
    background: transparent;
    z-index: 100;
    display: grid;
    grid-template-columns: 1fr;

    &::after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0px auto;
        background-color: ${sidebarData.textColor};
    }

    @media screen and (max-width: 1200px) {
        padding: 2rem;
    }

    @media screen and (max-width: 600px) {
        padding: 1rem;
    }
`;

const SidebarItem = styled.div`
    padding: 0.5rem;
    transition: 0.3s;

    &:hover {
        transform: translateY(-5px);
    }
`;