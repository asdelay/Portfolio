import { FC } from "react";
import { CardImageWrapper, ProjectCardImage, ProjectCardWrapper, ProjectTechnology, ProjectTitle, TechnologyWrapper } from "./styles";
import '../../index.css';
interface ProjectCardProps {
    imageSrc: string; 
    name: string; 
    projectId: string;
    stack: string[];
}
const ProjectCard: FC<ProjectCardProps> = ({imageSrc, name, projectId, stack}) => {
    return (
        <ProjectCardWrapper id={projectId}>
            <CardImageWrapper>
                <ProjectCardImage src={imageSrc} alt="Project picture" />
            </CardImageWrapper>
            <ProjectTitle>{name}</ProjectTitle>
            <TechnologyWrapper>
                {stack.map((technology, idx) => <ProjectTechnology key={idx}>{technology}</ProjectTechnology>)}
            </TechnologyWrapper>
            
        </ProjectCardWrapper>
    );
}
export default ProjectCard;