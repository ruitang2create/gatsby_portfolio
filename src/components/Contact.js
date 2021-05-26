import React from 'react';
import styled from 'styled-components';
import { SiMinutemailer } from 'react-icons/si';

const Contact = () => {
    return (
        <ContactContainer id="contactSection">
            <ContactContent>
                <h1>Get In Touch <ContactIcon /></h1>
                <p>Feel free to send me an email if you want to build something with me. My inbox is always open for cooperations and technical discussions.</p>
                <p className='jobAd'>I'm currently looking for opportunities to work as a front-end/back-end/full-stack developer. Please let me know if you think I might be a good fit for your open position.</p>
                <ContactButton href="mailto:rui.tang.work@gmail.com" rel="noopener noreferrer" target="_blank">Email Me</ContactButton>
            </ContactContent>
        </ContactContainer>
    );
};

export default Contact;

const ContactContainer = styled.div`
    width: 100%;
    padding: clamp(1rem, 5vh, 5rem) calc((100vw - 800px) / 2);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
        180deg, 
        rgba(6, 20, 13, 0.8) 0%, 
        rgba(6, 20, 13, 1) 100%
    ), 
    #184e35;
    background-size: cover;
`;

const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #00995c;

    h1 {
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(1.6rem, 5vw, 3rem);
        padding: 0 1rem;
        color: #b3ffe0;
    }

    p {
        text-align: center;
        margin-bottom: 2rem;
        font-size: clamp(1rem, 2vw, 1.2rem);
        padding: 0 1rem;
    }

    p.jobAd {
        color: #00cc7a;
        text-decoration: underline;
        border: #b3ffe0 2px dashed;
        padding: 10px;
        margin-left: 2rem;
        margin-right: 2rem;
        border-radius: 5px;
    }
`;

const ContactButton = styled.a`
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

const ContactIcon = styled(SiMinutemailer)`
    margin-left: 1rem;
    margin-bottom: 2rem;
`;