import styled from 'styled-components';

export const Button = styled.div`
    background: ${({primary}) => (primary ? 'transparent' : '#00b36b')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
    color: #b3ffe0 !important;
    font-size: ${({ big }) => (big ? '20px' : '16px')};
    outline: none;
    border: #b3ffe0 1px solid;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none !important;
    transition: 0.3s !important;
    border-radius: ${({ round }) => (round ? '10px' : 'none')};
    &:hover {
        background: ${({primary}) => (primary ? '#00b36b' : 'transparent')};
        transform: translateY(-2px);
    }
`;