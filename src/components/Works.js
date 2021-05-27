import React, { useState } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { ImBookmarks, ImMobile, ImDisplay } from 'react-icons/im';
import ProjectThumbnail from './ProjectThumbnail';
import { worksData } from '../data/WorksData';
import worksBg from '../assets/images/worksBg2.jpg';
import { Modal } from 'react-bootstrap';
import './styles/DemoModal.css';

const Works = ({ heading }) => {
    const [show, setShow] = useState(false);
    const [frameSize, setFrameSize] = useState({
        width: "375",
        height: "812",
    });
    const [demoUrl, setDemoUrl] = useState("http://portfolio.ruitangcs.com");
    const [mobileDemo, setMobileDemo] = useState(true);
    const [desktopDemo, setDesktopDemo] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const data = useStaticQuery(
        graphql`
            query {
                allFile(filter: {relativePath: {regex: "/works//"}}) {
                    edges {
                        node {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        `
    );


    function getTrips(workInfo) {
        return workInfo.map((item, index) => (
            <ProjectThumbnail
                title={item.name}
                desc={item.description}
                type={item.type}
                url={item.url}
                github={item.github}
                techs={item.techs}
                mobileDemo={item.mobile}
                desktopDemo={item.desktop}
                imgs={data.allFile.edges.slice(index * 2, (index + 1) * 2)}
                demoSwitch={handleShow}
                demoUrlSetter={setDemoUrl}
                mobileDemoSetter={setMobileDemo}
                desktopDemoSetter={setDesktopDemo}
            />
        ));
    }

    const setFrame = (device) => {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        let ratio = 0;
        let fWidth = 0;
        let fHeight = 0;
        if (device === 'desktop') {
            ratio = 1080 / 1920;
            fWidth = vw * 0.8;
            fHeight = fWidth * ratio;
        } else if (device === 'mobile') {
            ratio = 375 / 812;
            fHeight = vh * 0.8;
            fWidth = fHeight * ratio;
        }
        setFrameSize({ width: fWidth, height: fHeight });
    }

    return (
        <div id="worksSection">
            <ProjectsContainer>
                <ProjectsHeading data-sal="zoom-in" data-sal-delay="3000" data-sal-duration="5000" data-sal-easing="ease-out-back"><ImBookmarks /> {heading}</ProjectsHeading>
                <ProjectWrapper>{getTrips(worksData)}</ProjectWrapper>
            </ProjectsContainer>
            <Modal dialogClassName="demoModal" show={show} onHide={handleClose} centered>
                <Modal.Header closeButton style={{ textAlign: "center" }}>Demo</Modal.Header>
                <Modal.Body style={{ textAlign: "center" }}>
                    <iframe title="demo" width={frameSize.width} height={frameSize.height} src={demoUrl} ></iframe>
                </Modal.Body>
                <Modal.Footer style={{ textAlign: "center" }}>
                    {desktopDemo && <ImDisplay onClick={() => setFrame('desktop')} />}
                    {mobileDemo && <ImMobile onClick={() => setFrame('mobile')} />}
                </Modal.Footer>
            </Modal>
        </div >
    );
};

export default Works;

const ProjectsContainer = styled.div`
    min-height: 100vh;
    padding: clamp(1rem, 5vh, 5rem) clamp(2vw,10vw,15vw);
    background: #184e35;
    // background-image: url(${worksBg});
    color: #b3ffe0;
`;

const ProjectsHeading = styled.div`
    font-size: clamp(1.8rem, 2.8vw, 4rem);
    text-align: center;
    margin-bottom: 3rem;
    color: #b3ffe0;
`;

const ProjectWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 5rem;
    justify-items: center;
`;
