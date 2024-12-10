import {styled} from 'styled-components';

export const ProjectsWrapper = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 24px 24px 0 0;
    padding: 24px 5px;
    color: white;
    padding-bottom: 48px;

    @media screen and (min-width: 1024px){
       padding: 128px 100px;
    }
`;

export const StyledHeader = styled.div`
    text-transform: uppercase;
    font-size: 56px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 80%;
`;

export const StyledRule = styled.hr`
    width: 100%;
    border: 0;
    border-top: 1px solid #A8A8A8;
    margin: 20px 0 60px 0;

    @media screen and (min-width: 1024px){
        margin: 50px 0 30px 0;
    }
`;

export const ProjectsArray = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;