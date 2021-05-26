import React from 'react';
import styled from 'styled-components';
import codingVid from '../assets/videos/tech3.mp4';

const Footer = () => {
    return (
        <FooterContainer>
            <ContactBg>
                <ContactVideo src={codingVid} type="video/mp4" autoPlay loop muted playsInline />
            </ContactBg>
            <p>Designed & Built by Rui Tang</p>
        </FooterContainer>
    )
};

export default Footer;

const FooterContainer = styled.div`
    position: relative;
    text-align: center;
    padding: 5rem calc((100vw - 1100px) / 2);
    color: #000;
    background: #fafafa;
`;

const ContactBg = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const ContactVideo = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;