import React from "react";
import { styled } from "styled-components";
import Project from "../Components/ProjectEntryCombo";
import { GameProjects } from "../data";
import { Column } from "../Styles/StyledComponents";

const GamesContainer = styled(Column)`
  gap: 100px;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const Seperator = styled.div`
  width: 100%;
  height: 1px;
  background: silver;
  opacity: 0.2;
`;

const NewMainPage: React.FC = () => (
  <GamesContainer>
    {GameProjects.map((project, index) => (
      <React.Fragment key={index}>
        <Project project={project} />
        {index !== GameProjects.length - 1 && <Seperator />}
      </React.Fragment>
    ))}
  </GamesContainer>
);


export default NewMainPage;
