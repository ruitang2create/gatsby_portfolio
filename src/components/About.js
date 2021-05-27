import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { aboutData } from '../data/AboutData';
import { useStaticQuery, graphql } from 'gatsby';
import { GiDominoMask } from 'react-icons/gi';
import myResume from '../assets/files/Rui-Tang-Resume-Web-Developer.pdf';

const About = () => {
    const data = useStaticQuery(
        graphql`
            query {
                file(name: {regex: "/myProfile/"}) {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        `);

    return (
        <AboutContainer id="aboutSection">
            <GiDominoMask size='clamp(3.5rem, 4vw, 4rem)' />
            <AboutHead>
                <AboutTitle>WHO'S THIS GUY</AboutTitle>
            </AboutHead>
            <AboutContent>
                <AboutTextAndResume>
                    {aboutData.paras.map(para => <AboutText>{para}</AboutText>)}
                    <ResumeBtnWrapper>
                        <ResumeBtn href={myResume} target="_blank" rel="noreferrer">Resume</ResumeBtn>
                    </ResumeBtnWrapper>
                </AboutTextAndResume>
                <ImageWrapper>
                    <AboutImage image={data.file.childImageSharp.gatsbyImageData} />
                </ImageWrapper>
            </AboutContent>
        </AboutContainer>
    );
};

export default About;

const AboutContainer = styled.div`
    background: #37ae77;
    justify-content: center;
    height: 100%;
    text-align: left;
    padding: 3rem clamp(2vw, 10vw, 15vw);
`;


const AboutHead = styled.div`
    text-align: left;
`;

const AboutTitle = styled.h1`
    font-size: clamp(1.8rem, 2.8vw, 4rem);
    text-align: left;
    font-weight: bold;
`;

const AboutContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    padding: 1rem 1rem;
    color: #00331e;
    font-size: clamp(1rem, 1.2vw, 1.5rem);

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 2rem 2rem;
        text-align: center;
        grid-gap: 2rem;
    }
`;

const AboutTextAndResume = styled.div`
`;

const AboutText = styled.p`
    text-align: left;
    margin-bottom: 1rem;
    line-height: 1.2;
    font-weight: bold;
`;

const ImageWrapper = styled.div`
    text-align: center;
`;

const AboutImage = styled(GatsbyImage)`
    min-width: 180px;
    width: 60%;
    box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.5);
    border-radius: 5px;

    @media screen and (max-width: 1200px) {
        width: 70%;
    }

    @media screen and (max-width: 900px) {
        width: 80%;
    }

    @media screen and (max-width: 768px) {
        width: 60%;
    }

    @media screen and (max-width: 768px) {
        width: 60%;
    }
`;

const ResumeBtnWrapper = styled.div`
    padding-top: 1.5rem;
`;

const ResumeBtn = styled.a`
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