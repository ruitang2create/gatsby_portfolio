import React from 'react';
import { IoRocketSharp } from 'react-icons/io5';
import styled from 'styled-components';
import { sidebarData } from '../data/SidebarData';
import scrollTo from 'gatsby-plugin-smoothscroll';

const GoTopButton = () => {
    return (
        <RocketContainer>
            <ButtonWrapper onClick={() => scrollTo('#headerSection')}>
                <h5>TOP</h5>
                <RocketButton id="rocketBtn"/>
            </ButtonWrapper>
        </RocketContainer>
    );
};

export default GoTopButton;

const RocketContainer = styled.div`
    color: ${sidebarData.textColor};
    position: fixed;
    bottom: 0;
    right: 0;
    padding-right: 3rem;
    z-index: 100;

    &::after {
        content: "";
        display: block;
        width: 1px;
        height: 150px;
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

const RocketButton = styled(IoRocketSharp)`
    transition: 0.3s;
    transform: rotate(-45deg);
`;

const ButtonWrapper = styled.div`
    font-size: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    transition: 0.3s;
    transform: translateY(-10px);

    h5 {
        font-size: 1rem;
        margin-block-end: 0.2em;
    }

    &:hover {
    cursor: pointer;
    transform: translateY(-15px);
}
`;