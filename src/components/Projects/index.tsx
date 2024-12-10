import ProjectCard from "../ProjectCard";
import { ProjectsArray, ProjectsWrapper, StyledHeader, StyledRule } from "./styles";
import nextpizza from '../../assets/Next-pizza.png'
import testTask from '../../assets/testTask.png'
import codecrafters from '../../assets/codecrafters.png'
const Projects = () => {
    return (
        <ProjectsWrapper id="projects">
            <StyledHeader>Featured projects</StyledHeader>
            <StyledRule />
            <ProjectsArray>
                <ProjectCard imageSrc={nextpizza} name='Next-Pizza' projectId='nextpizza' stack={['Typescript', 'Next.js', 'Prisma', 'Tailwind', 'Zustand', 'axios', 'lodash']}/>
                <ProjectCard imageSrc={testTask} name='Open Deal' projectId='opendeal' stack={['Nest.js', 'TypeOrm', 'React', 'Redux Toolkit', 'axios', 'Typescript', 'Tailwind']}/>
                <ProjectCard imageSrc={codecrafters} name='Codecrafters' projectId='codecrafters' stack={['Typescript', 'Nest.js', 'TypeOrm', 'MySQL', 'Redux Toolkit', 'RTK Query', 'Typescript', 'React', 'PWA']}/>
            </ProjectsArray>

        </ProjectsWrapper>
    );
}

export default Projects;