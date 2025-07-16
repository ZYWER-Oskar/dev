import React from "react";
import { styled } from "styled-components";
import GameMedia from "./GameMedia";
import { Project as ProjectInterface } from "../types";
import ProjectInfo from "./ProjectInfo";
import { Row } from "../Styles/StyledComponents";

interface ProjectInfoProps {
  project: ProjectInterface;
}

const GameContainer = styled(Row)`
  align-items: flex-start;
  
  & > * {
    flex: 1;
    max-width: 50%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  & > * {
    flex: 1;
    max-width: 100%;
  }
    
`;

const Project: React.FC<ProjectInfoProps> = ({ project }) => {
  return (
    <GameContainer>
      <ProjectInfo project={project} />
      <GameMedia media={project.media} />
    </GameContainer>
  );
};

export default Project;
