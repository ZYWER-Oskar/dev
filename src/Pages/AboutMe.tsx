import React from "react";
import styled from "styled-components";
import { PersonalInfo } from "../data";
import { Column } from "../Styles/StyledComponents";
import { Row } from '../Styles/StyledComponents';

const Container = styled(Column)`
  align-items: center;
  margin-top: 40px;
  gap: 20px;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 5px solid rgb(229, 225, 191);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const AboutText = styled.p`
  line-height: 1.6;
  max-width: 75vw;
  margin: 10px;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CVButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const MyLink = styled.a`
    color: green !important;
`

const AboutMe: React.FC = () => {
  return (
    <Container>
      <ProfileImage src={PersonalInfo.image} alt="Your Name" />
      <AboutText>
       {PersonalInfo.description}
      </AboutText>
      <p>Find my links on my Linktree</p>
      <MyLink href="https://linktr.ee/oskarzywer" target="_blank"> HERE</MyLink>
    </Container>
  );
};

 //     <CVButton href={`${PersonalInfo.cvUri}`} download>
 //       Download My CV
 //     </CVButton>

export default AboutMe;