import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
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