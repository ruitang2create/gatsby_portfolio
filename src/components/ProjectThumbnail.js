import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Carousel } from 'react-bootstrap';
import { ImGithub, ImNewTab } from 'react-icons/im';

const ProjectThumbnail = ({ title, desc, type, url, github, techs, mobileDemo, desktopDemo, publicRepo, imgs, demoSwitch, demoUrlSetter, mobileDemoSetter, desktopDemoSetter, frameInitializer }) => {
    const demoHandler = () => {
        frameInitializer('mobile');
        mobileDemoSetter(mobileDemo);
        desktopDemoSetter(desktopDemo);
        demoUrlSetter(url);
        demoSwitch();
    };

    return (
        <ThumbnailContainer id={title}>
            <CarouselContainer>
                <StyledCarousel>
                    {imgs.map((item, index) => (
                        <Carousel.Item
                            key={index}
                            interval={3000}
                        >
                            <ThumbnailImg image={item.node.childImageSharp.gatsbyImageData} alt="title" />
                        </Carousel.Item>
                    ))}
                </StyledCarousel>
                <ProjectCover>
                    <ProjectType>{type}</ProjectType>
                    <ProjectTitle>{title}</ProjectTitle>
                    <ProjectDesc>{desc}</ProjectDesc>
                    <ProjectTechStacks>
                        {techs.map((item, index) => <TechTag key={index}>{item}</TechTag>)}
                    </ProjectTechStacks>
                    <div style={{ clear: "both" }}></div>
                    <ProjectLinks>
                        {publicRepo && <GithubLink href={github} target="_blank" rel="noreferrer"><ImGithub /> Github</GithubLink>}
                        <DemoLink onClick={demoHandler}><ImNewTab /> Live Demo</DemoLink>
                    </ProjectLinks>
                </ProjectCover>
            </CarouselContainer>
            <ProjectContent>
                <ProjectType>{type}</ProjectType>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDesc>{desc}</ProjectDesc>
                <ProjectTechStacks>
                    {techs.map((item, index) => <TechTag key={index}>{item}</TechTag>)}
                </ProjectTechStacks>
                <div style={{ clear: "both" }}></div>
                <ProjectLinks>
                    {publicRepo && <GithubLink href={github} target="_blank" rel="noreferrer"><ImGithub /> Github</GithubLink>}
                    <DemoLink onClick={demoHandler}><ImNewTab /> Live Demo</DemoLink>
                </ProjectLinks>
            </ProjectContent>
        </ThumbnailContainer>
    );
}

export default ProjectThumbnail;

const ThumbnailContainer = styled.div`
    background: transparent;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: clamp(1.5rem, 2vw, 3rem);

    @media screen and (max-width: 1200px) {
        grid-template-columns: 2fr 3fr;
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }

    padding-bottom: 3rem;
    border-bottom: solid 1px #215f41;
`;

const CarouselContainer = styled.div`
    position: relative;
    // width: 80%;
`;

const ProjectCover = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(13, 38, 26, 0.8);
    display: none;
    padding: 2rem 1.5rem;

    @media screen and (max-width: 600px) {
        display: block;
    }
`;

const ProjectType = styled.h5`
    color: #339933;
`;

const ProjectTitle = styled.h2`
    text-align: left;
    color: #1e6242;
    font-size: clamp(1.5rem, 2vw, 2.6rem);
    background: #b1e7ce;
    padding: 0.5rem 2rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-bottom: 0;
    margin-top: 1rem;
`;

const ProjectDesc = styled.p`
    font-size: clamp(1rem, 1.5vw, 1.6rem);
    background: #37ae77;
    padding: 1rem 2rem;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-top: 0;
    margin-bottom: 1rem;
`;

const ProjectLinks = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 1rem;
`;

const ProjectTechStacks = styled.div`
    margin-bottom: 1rem;
`;

const TechTag = styled.div`
    display: inline;
    float: left;
    margin: 3px 5px;
    padding: 3px 5px;
    border-radius: 10px;
    background: #37ae77;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    font-size: clamp(0.8rem, 1.4vw, 1.3rem);
`;

const GithubLink = styled.a`
    cursor: pointer;
    align-items: center;
    justify-items: center;
    transition: 0.3s;
    font-size: 16px;
    color: #b3ffe0;

    &:hover {
        color: #b3ffe0;
        text-decoration: underline !important;
        transform: translateY(-2px);
    }
`;

const DemoLink = styled.div`
    cursor: pointer;
    align-items: center;
    justify-items: center;
    transition: 0.3s;
    font-size: 16px;
    color: #b3ffe0;

    &:hover {
        color: #b3ffe0;
        text-decoration: underline !important;
        transform: translateY(-2px);
    }
`;

const ThumbnailImg = styled(GatsbyImage)`
    transform: translateY(6px);
`;

const StyledCarousel = styled(Carousel)`
    box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.5);
    transition: 0.3s;
    opacity: 0.7;
    width: 60%;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.5);
        opacity: 1;
    }

    @media screen and (max-width: 1200px) {
        width: 75%;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

const ProjectContent = styled.div`
    padding-top: 2rem;
    @media screen and (max-width: 600px) {
        display: none;
    }
`;
