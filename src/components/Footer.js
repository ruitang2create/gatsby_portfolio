import React, { useState } from 'react';
import styled from 'styled-components';
import { BiGitRepoForked, BiStar } from 'react-icons/bi';
import { sidebarData } from '../data/SidebarData';
import axios from 'axios';
import { repoData } from '../data/RepoData';

const Footer = () => {
    const [repoStats, setRepoStats] = useState({
        stars: 0,
        fokrs: 0,
    });

    const [fetched, setFetched] = useState(false);

    const getRepoStats = () => {
        console.log('Fetching github repo stas...');
        axios.get(`https://api.github.com/repos/${repoData.owner}/${repoData.repo}`)
            .then(res => {
                console.log('Fetched github repo stas: ' + res.data);
                setRepoStats({
                    stars: res.data.stargazers_count,
                    fokrs: res.data.forks_count,
                });
                setFetched(true);
            })
    }

    if (!fetched) {
        getRepoStats();
    }

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
            <GithubRepoWrapper href="https://github.com/ruitang2create/gatsby_portfolio" target="_blank" rel="noreferrer">
                {/* <button onClick={getRepoStats}>Fetch Repo Stats</button> */}
                <p>
                    <span id="repoStars"><BiStar /> {repoStats.stars}</span><span><BiGitRepoForked /> {repoStats.fokrs}</span>
                </p>
            </GithubRepoWrapper>
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

const CopyrightWrapper = styled.div`
    p {
        margin-bottom: 0;
    }
`;

const GithubRepoWrapper = styled.a`
    margin-top: 0;
    display: inline-block;
    transition: 0.3s;
    text-decoration: none !important;
    color: inherit !important;
        
    &:hover {
        cursor: pointer;
        color: #b3ffe0 !important;
    }

    p {
        margin-top: 0;
        margin-bottom: 0;
    }

    #repoStars {
        margin-right: 1rem;
    }
`;

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