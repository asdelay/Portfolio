import Techology from "../Technology";
import { TechnologiesWrapper, ScrollingContent } from "./styles";

import reactImage from '../../assets/atom.png';
import reduxImage from '../../assets/redux.256x243.png';
import nestjsImage from '../../assets/nestjs.256x256.png';
import typescriptImage from '../../assets/typescript.png';
import sqlImage from '../../assets/database.png';
import dockerImage from '../../assets/docker.png';
import nextImage from '../../assets/next-js.png';

const Technologies = () => {
    return (
        <TechnologiesWrapper>
            <ScrollingContent>
                <Techology imageSrc={reactImage} technologyName="React" />
                <Techology imageSrc={reduxImage} technologyName="Redux" />
                <Techology imageSrc={nestjsImage} technologyName="Nest.js" />
                <Techology imageSrc={typescriptImage} technologyName="TypeScript" />
                <Techology imageSrc={sqlImage} technologyName="SQL" />
                <Techology imageSrc={dockerImage} technologyName="Docker" />
                <Techology imageSrc={nextImage} technologyName="Next.js" />
                {/* Repeat the items to make the animation seamless */}
                <Techology imageSrc={reactImage} technologyName="React" />
                <Techology imageSrc={reduxImage} technologyName="Redux" />
                <Techology imageSrc={nestjsImage} technologyName="Nest.js" />
                <Techology imageSrc={typescriptImage} technologyName="TypeScript" />
                <Techology imageSrc={sqlImage} technologyName="SQL" />
                <Techology imageSrc={dockerImage} technologyName="Docker" />
                <Techology imageSrc={nextImage} technologyName="Next.js" />
            </ScrollingContent>
        </TechnologiesWrapper>
    );
}
export default Technologies;
