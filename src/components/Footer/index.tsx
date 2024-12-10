import { Contacts, FooterContainer, FooterTitle, FooterWrapper, LeftContainer, StyledEmail, StyledLink, StyledLinks, StyledPhone } from "./styles";

const Footer = () => {
    return (
        <FooterContainer id="contacts">
            <FooterWrapper>
                <LeftContainer>
                    <FooterTitle>get in touch</FooterTitle>
                    <Contacts>
                        <StyledEmail><a href="mailto:oleksandrptuha1@gmail.com">oleksandrptuha1@gmail.com</a></StyledEmail>
                        <StyledPhone><a href="tel:+380680718071">+380680718071</a></StyledPhone>
                    </Contacts>
                </LeftContainer>
                <StyledLinks>
                    <div>
                        <StyledLink><a href="#projects">projects</a></StyledLink>
                        <StyledLink><a href="#about">about</a></StyledLink>
                    </div>
                    <div>
                        <StyledLink><a href="https://t.me/ptukhaoleksandr">telegram</a></StyledLink>
                        <StyledLink><a href="https://github.com/asdelay">github</a></StyledLink>
                        <StyledLink><a href="https://docs.google.com/document/d/1NkyQz1_N3abDcoKpOyuEBXRx4S5v9dzB/edit?usp=sharing&ouid=101010464070262774091&rtpof=true&sd=true">cv</a></StyledLink>
                    </div>
                    
                </StyledLinks>
            </FooterWrapper>
        </FooterContainer>
        
    );
}

export default Footer;