import {styled} from 'styled-components';

export const FooterWrapper = styled.div`
    padding: 24px 5px 12px 5px;
    background-color: white;
    border-radius: 24px 24px 0 0;
    @media screen and (min-width: 1024px){
       padding: 32px 100px 12px 100px;
       display: flex;
       justify-content: space-between;
    }
`;
export const FooterContainer = styled.div`
    background-color: black;
`;
export const FooterTitle = styled.div`
    font-size: 16px;
    letter-spacing: 0.8px;

     @media screen and (min-width: 1024px){
        font-size: 24px;
        letter-spacing: 1px;
    }
`;

export const Contacts = styled.div`
    margin: 36px 0;
    @media screen and (min-width: 1024px){
        margin: 16px 0;
    }
`;

export const StyledEmail = styled.div`
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1px;
    transition: all 0.3s;
    &:hover {
        font-size: 25px;
        font-weight: 800;
    }

    @media screen and (min-width: 1024px){
        font-size: 40px;
        &:hover {
            font-size: 40px;
            font-weight: 800;
        }
    }
`;

export const StyledPhone = styled.div`
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    transition: all 0.3s;
    &:hover {
        font-size: 19px;
        font-weight: 800;
    }
    @media screen and (min-width: 1024px){
        font-size: 32px;
        &:hover {
            font-size: 32px;
            font-weight: 800;
        }
    }
`;

export const StyledLinks = styled.div`
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1024px){
        display: flex;
        flex-direction: row;
        
    }
`;

export const StyledLink = styled.div`
   a {
        position: relative;
        display: inline-block;
        transition: all 0.3s;
        margin-bottom: 12px;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 2px;
            background-color: black;
            transition: width 0.3s ease;
        }

        &:hover::after {
            width: 100%;
        }

        @media screen and (min-width: 1024px){
            margin: 4px 16px;
        }
    }
    
`;

export const LeftContainer = styled.div`

`;