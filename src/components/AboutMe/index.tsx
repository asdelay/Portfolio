import ProjectName from "../ProjectName";
import Technologies from "../Technologies";
import { AboutWrapper, ProjectsContainer, StyledContainer, StyledDescription, StyledJob, StyledName, StyledProjectTitle } from "./styles";
import useAboutMe from "./useAboutMe";
import '../../index.css';

const AboutMe = () => {
    const initialText = 'Crreating seamless digital experiences with clean, scalable code and thoughtful design.';
    const animatedText = useAboutMe(initialText, 100)
    return (
        <AboutWrapper id="about">
            <StyledContainer>
                <div>
                    <StyledName>I'm <br /> Oleksandr <br /> Ptukha</StyledName>
                    <StyledJob>Full-Stack Developer</StyledJob>
                    <StyledDescription>{animatedText}</StyledDescription>
                </div>                                
                <ProjectsContainer>
                    <StyledProjectTitle>My Projects</StyledProjectTitle>
                    <ProjectName project="Next-Pizza" projectLink="nextpizza"/>
                    <ProjectName project="Open Deal" projectLink="opendeal"/>
                    <ProjectName project="Codecrafters" projectLink="codecrafters"/>
                </ProjectsContainer>
            </StyledContainer>
            
            
            <Technologies />
        </AboutWrapper>
    );
}
export default AboutMe