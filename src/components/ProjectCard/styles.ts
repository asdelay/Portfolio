import {styled} from 'styled-components';

export const ProjectCardWrapper = styled.div`
    margin-bottom: 96px;
    @media screen and (min-width: 1024px){
       max-width: 820px;
       
    }

`;

export const CardImageWrapper = styled.div`
    border-radius: 24px;
    max-height: 250px;
    overflow: hidden;
    @media screen and (min-width: 1024px){
       max-height: 442px;   
    }
`;

export const ProjectCardImage = styled.img`
    width: 100%;
    border-radius: 24px;
    margin-bottom: 12px;

`;
export const ProjectTitle = styled.div`
    font-size: 36px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 24px;

    @media screen and (min-width: 1024px){
       font-size: 48px;
    }
    
`;

export const TechnologyWrapper = styled.div`
    overflow: visible;
    display: flex;
    flex-flow: row wrap;
    gap: 8px;
`;

export const ProjectTechnology = styled.div`
    display: flex;
    padding: 12px 16px;
    align-items: center;
    gap: 8px;
    border: 1px solid white;
    border-radius: 24px;
    transition: all 0.3s;
    cursor: default;
    &:hover{
        color: black;
        background-color: white;
    }

    @media screen and (min-width: 1024px){
       padding: 12px 28px;
    }
`;