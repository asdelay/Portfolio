import { styled } from 'styled-components';

export const TechnologiesWrapper = styled.div`
    width: 100%;
    height: 64px;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    @media screen and (min-width: 1024px){
        height: 134px;
    }
`;

export const ScrollingContent = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    white-space: nowrap;
    animation: scroll 15s linear infinite;

    @keyframes scroll {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(-50%);
        }
    }
`;
