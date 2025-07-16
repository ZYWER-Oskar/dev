import React from "react";
import { styled } from "styled-components";
import { Project as ProjectInterface } from "../types";
import BigLogoButton from "./BigLogoButton";
import { Column, Row } from "../Styles/StyledComponents";

interface ProjectInfoProps {
  project: ProjectInterface;
}

const GameInfoContainer = styled(Column)`
`;

const GameTitle = styled.h1`
  font-family: "ZenDots", sans-serif;
  font-size: 2rem;
  color:rgb(250, 255, 151);
  margin-top: 0;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const GameDescription = styled.p`
  margin: 0;
  font-size: 1.5rem;

    @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const InfoTable = styled(Column)`
  gap: 5px;
  margin: 20px 0;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const InfoRow = styled(Row)`
  gap: 8px;
`;

const InfoKey = styled.span`
  font-weight: bold;
  min-width: 70px;
  text-align: left;
`;

const InfoValue = styled.span`
  color: silver;
`;

const LinksContainer = styled(Row)`
  gap: 10px;
`;

const ProjectInfo: React.FC<ProjectInfoProps> = ({ project }) => {
    return (
        <GameInfoContainer>
            <GameTitle>{project.name}</GameTitle>
            <GameDescription>{project.description}</GameDescription>

            <InfoTable>
                {project.source && <InfoRow>
                    <InfoKey>Source:</InfoKey>
                    <InfoValue >
                        <a href={project.source.url} target="_blank" rel="noopener noreferrer">
                            {project.source.name}
                        </a>
                    </InfoValue>
                </InfoRow>}
            </InfoTable>
            <LinksContainer>
                {project.links.map((link, index) => (
                    <BigLogoButton key={index} size={128} source={link.source} linkTo={link.url} />
                ))}
            </LinksContainer>
        </GameInfoContainer>
    );
};

export default ProjectInfo;
