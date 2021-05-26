import React from 'react';
import styled from 'styled-components';
import EmailBg from '../assets/images/email.jpg';
import { Button } from './Button';

const Email = () => {
    return (
        <EmailContainer>
            <EmailContent>
                <h1>Get In Touch</h1>
                <p>Feel free to send me an email if you want to build something with me. My inbox is always open for cooperations and technical discussions.</p>
                <p>I'm currently looking for opportunities to work as a front-end/back-end/full-stack developer. I will appreciate it if you can let me know that I might be a good fit for your open position.</p>
                <EmailButton href="mailto:rui.tang.work@gmail.com" rel="noopener noreferrer" target="_blank">Email Me</EmailButton>
            </EmailContent>
        </EmailContainer>
    );
};

export default Email;

const EmailContainer = styled.div`
    background: linear-gradient(
        180deg, 
        rgba(0,0,0,0.5) 0%, 
        rgba(0,0,0,0.5) 35%, 
        rgba(0,0,0,0.5) 100%
    ), 
    url(${EmailBg}) no-repeat center;
    background-size: cover;
    height: 450px;
    width: 100%;
    padding: 5rem calc((100vw - 1300px) / 2);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const EmailContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(1rem, 5vw, 3rem);
        padding: 0 1rem;
    }

    p {
        text-align: left;
        margin-bottom: 2rem;
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        padding: 0 1rem;
    }
`;

const EmailButton = styled.a`
    background: #00b36b;
    white-space: nowrap;
    padding: 10px 32px;
    color: #001a0f;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    border: #00804d 1px solid;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none !important;
    transition: 0.3s !important;
    border-radius: 10px;

    &:hover {
        background: #00663d;
        transform: translateY(-2px);
        color: #b3ffe0;
    }
`;