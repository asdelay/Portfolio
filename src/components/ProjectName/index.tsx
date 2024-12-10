import { FC } from "react";
import { ProjectWrapper } from "./styles";

interface ProjectNameProps {
    project: string;
    projectLink: string;
}

const ProjectName: FC<ProjectNameProps> = ({project, projectLink}) => {
    return (
        <ProjectWrapper><a href={`#${projectLink}`}>{project}</a></ProjectWrapper>
    );
}
export default ProjectName;