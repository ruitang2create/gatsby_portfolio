import React from 'react';
import { ImGithub, ImFacebook2, ImLinkedin } from 'react-icons/im';

const color = '#b3ffe0';

export const sidebarData = {
    data:
        [
            {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/rui-tang-6526221b8/",
                icon: (<ImLinkedin css={`color: ${color}`} />),
            },
            {
                name: "Github",
                link: "https://github.com/ruitang2create",
                icon: (<ImGithub css={`color: ${color}`} />),
            },
            {
                name: "Facebook",
                link: "https://www.facebook.com/rui.tang.35380/",
                icon: (<ImFacebook2 css={`color: ${color}`} />),
            },
        ],
    textColor: color,
};