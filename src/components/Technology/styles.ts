import {styled} from 'styled-components';

export const TechnologyWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    margin-right: 48px;
    @media screen and (min-width: 1024px){
        gap: 48px;
        margin-right: 96px;
    }
`;

export const Circle = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: #A8A8A8;
    flex-shrink: 0;
    @media screen and (min-width: 1024px){
        width: 30px;
        height: 30px;
    }
`;
export const StyledImage = styled.img`
    width: 36px;
    height: 36px;
    filter: grayscale(100%);

    @media screen and (min-width: 1024px){
        width: 85px;
        height: 85px;
    }
`;

export const StyledTechnology = styled.div`
    @media screen and (min-width: 1024px){
        font-size: 22px;
        margin-right: 24px;
    }
`;