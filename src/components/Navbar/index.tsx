import { ItemsWrapper, LogoWrapper, NavbarWrapper, NavigationItem, StyledLogo } from "./styles";
import Logo2 from '../../assets/code2.svg'
const Navbar = () => {
    return (
        <NavbarWrapper>
            <LogoWrapper>
                <a href="#about"><StyledLogo src={Logo2} alt="Logo" /></a>
            </LogoWrapper>            
            <ItemsWrapper>
                <div><NavigationItem href="#about">About</NavigationItem></div>
                <div><NavigationItem href="#projects">Projects</NavigationItem></div>
                <div><NavigationItem href="#contacts">Contacts</NavigationItem></div>
            </ItemsWrapper>
        </NavbarWrapper>
    );
}
export default Navbar;