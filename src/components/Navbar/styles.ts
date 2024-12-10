import {styled} from 'styled-components';

export const NavbarWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 5px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 2;

    @media screen and (min-width: 1024px){
        padding: 12px 100px;
    }
`;
export const LogoWrapper = styled.div `
    cursor: pointer;

    transition: transform 0.3s;

    &:hover{
        transform: rotate(180deg);
    }
`;

export const StyledLogo = styled.img`
    height: 42px;
    width: 42px;
`;
export const ItemsWrapper = styled.div `
    display: flex;
    justify-content: flex-end;
    gap: 32px;

    
`;
export const NavigationItem = styled.a `
    font-weight: 600;
    font-size: 18px;

    transition: all 0.3s;
    &:hover {
        font-weight: 800;
    }
`;
