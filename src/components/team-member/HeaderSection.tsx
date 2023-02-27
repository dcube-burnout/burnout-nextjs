import React from "react";
import styled from "styled-components";
import { HeaderSection } from "../types";

const HeaderSection = ({
  profile,
  name,
  teamName,
  userDetails,
}: HeaderSection) => {
  return (
    <>
      <Container>
        <Circle>
          <FireIcon>{profile}</FireIcon>
        </Circle>
        <TeamName>
          {teamName}
          <br />
          <h1>{name}</h1>
          <h1>{userDetails}</h1>
        </TeamName>
      </Container>
    </>
  );
};

const TeamName = styled.div`
  margin-top: 2rem;
  margin-left: 2rem;
  color: white;
  h1:nth-of-type(1) {
    color: #ff6624;
  }

  h1:nth-of-type(2) {
    color: #ff6624;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

const FireIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 42px;
  flex-basis: 40%;
`;

const Circle = styled.div`
  background: #fdddd7;
  border-radius: 50%;
  min-height: 5rem;
  min-width: 5rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
  margin-top: 5rem;
  overflow: hidden;
`;

export default HeaderSection;
