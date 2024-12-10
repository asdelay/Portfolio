import { Circle, StyledImage, StyledTechnology, TechnologyWrapper } from "./styles";
import { FC } from "react";

interface TechnologyProps {
    imageSrc: string;
    technologyName: string;
}
const Techology: FC<TechnologyProps> = ({imageSrc, technologyName}) => {
    return (
        <TechnologyWrapper>
            <Circle />
            <StyledImage src={imageSrc} alt="Technology Icon" />
            <StyledTechnology>{technologyName}</StyledTechnology>
        </TechnologyWrapper>
    );
}

export default Techology;