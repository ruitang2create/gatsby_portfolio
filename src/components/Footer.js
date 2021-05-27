import React from 'react';
import styled from 'styled-components';
import { sidebarData } from '../data/SidebarData';

const Footer = () => {
    return (
        <FooterContainer>
            <OutlinksWrapper>
                {sidebarData.data.map((item, index) => (
                    <OutlinkItem key={index}>
                        <a href={item.link} target="_blank" rel="noreferrer">{item.icon}</a>
                    </OutlinkItem>
                ))}
            </OutlinksWrapper>
            <CopyrightWrapper>
                <p>Designed & Built by Rui Tang</p>
            </CopyrightWrapper>
            <githubWrapper>

            </githubWrapper>
        </FooterContainer>
    )
};

export default Footer;

const FooterContainer = styled.div`
    position: relative;
    text-align: center;
    padding: 1rem calc((100vw - 1100px) / 2);
    background: #06140d;
    color: #00995c;
    font-size: 14px;
    font-weight: bold;
`;

const CopyrightWrapper = styled.div``;

const githubWrapper = styled.div``;

const OutlinksWrapper = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        padding: 1rem 30%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        color: ${sidebarData.textColor};
    }
`;

const OutlinkItem = styled.div`
    padding: 0.5rem;
    transition: 0.3s;
    font-size: 1.2rem;
    &:hover {
        transform: translateY(-5px);
    }
`;