import {styled} from 'styled-components';

export const AboutWrapper = styled.div`
    margin-top: 68px;
`;

export const StyledName = styled.div`
    font-family: "Jost", sans-serif !important;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 64px;
    line-height: 98%;
    margin-bottom: 8px;
    padding: 0 5px;

    @media screen and (min-width: 1024px){
        max-width: 960px;
        font-size: 148px;
        font-weight: 800;
        letter-spacing: -10px;
        line-height: 80%;
        margin-bottom: 16px;
    }
`;

export const StyledJob = styled.div`
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 20px;
    background-image: linear-gradient(to right, #000000, #565656, #666666);
    color: transparent;
    background-clip: text;
    max-width: 350px;
    margin-bottom: 28px;
    padding: 0 5px;

    @media screen and (min-width: 1024px){
        max-width: 925px;
        font-size: 32px;
        font-weight: 800;
        letter-spacing: 1px;
        margin-bottom: 36px;
    }
`;
export const StyledDescription = styled.div`
    max-width: 350px;
    height: 184px;
    font-size: 24px;
    font-weight: 400;
    line-height: 100%;
    padding: 0 5px;

    @media screen and (min-width: 1024px){
        max-width: 925px;
        font-size: 48px;
    }
`;
export const StyledProjectTitle = styled.div`
    text-transform: uppercase;    
    color: #474747;
    line-height: 80%;
    letter-spacing: 0.5px;
    margin-bottom: 48px;
    padding: 0 5px;

    @media screen and (min-width: 1024px){
 
    }
`;

export const StyledContainer = styled.div`
     @media screen and (min-width: 1024px){
        margin-top: 120px;
        display: flex;
        justify-content: space-between;
        flex-flow: row wrap;
        padding: 0 100px;
    }
`;

export const ProjectsContainer = styled.div`
    @media screen and (min-width: 1024px){
        width: 270px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
`;